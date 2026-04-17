'use client';

import React, { useEffect, useRef, useState } from 'react';
import './sidebar.scss';
import { Divide as Hamburger } from 'hamburger-react';
import GooeyNav from '../menu/GooeyNav';

const navLinks = [
  { name: 'home', label: 'Home', href: '#home' },
  { name: 'about', label: 'About', href: '#about' },
  { name: 'services', label: 'Services', href: '#services' },
  { name: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { name: 'contact', label: 'Contact', href: '#contact' },
];

const getScrollContainer = () =>
  document.getElementById('main-scroll-container') ??
  document.querySelector('[class*="section-container"]');

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [pillStyle, setPillStyle] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });
  const animationRef = useRef(null);
  const spyFrameRef = useRef(null);
  const navUnlockTimeoutRef = useRef(null);
  const gooeyShellRef = useRef(null);
  const navLockRef = useRef({
    active: false,
    targetId: null,
  });

  const lockSpy = (targetId) => {
    navLockRef.current = { active: true, targetId };

    if (navUnlockTimeoutRef.current) {
      window.clearTimeout(navUnlockTimeoutRef.current);
      navUnlockTimeoutRef.current = null;
    }
  };

  const unlockSpy = () => {
    navLockRef.current = { active: false, targetId: null };

    if (navUnlockTimeoutRef.current) {
      window.clearTimeout(navUnlockTimeoutRef.current);
      navUnlockTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const updatePill = () => {
      const shell = gooeyShellRef.current;
      if (!shell) {
        return;
      }

      const activeItem = shell.querySelector(
        '.sidebarGooeyNav nav ul li.active',
      );
      if (!activeItem) {
        setPillStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const shellRect = shell.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const top = itemRect.top - shellRect.top;

      setPillStyle({
        top,
        height: itemRect.height,
        opacity: 1,
      });
    };

    updatePill();
    window.addEventListener('resize', updatePill);

    return () => {
      window.removeEventListener('resize', updatePill);
    };
  }, [activeLink, isOpen]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }

      if (spyFrameRef.current) {
        window.cancelAnimationFrame(spyFrameRef.current);
      }

      if (navUnlockTimeoutRef.current) {
        window.clearTimeout(navUnlockTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const container = getScrollContainer();
    if (!container) {
      return;
    }

    const sections = navLinks
      .map((link) => {
        const id = link.href.slice(1);
        const element = document.getElementById(id);
        return element ? { id, element } : null;
      })
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const updateActiveLink = () => {
      if (navLockRef.current.active) {
        return;
      }

      const marker = container.scrollTop + container.clientHeight * 0.35;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.element.offsetTop <= marker) {
          current = section.id;
        } else {
          break;
        }
      }

      setActiveLink((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (spyFrameRef.current) {
        return;
      }

      spyFrameRef.current = window.requestAnimationFrame(() => {
        updateActiveLink();
        spyFrameRef.current = null;
      });
    };

    updateActiveLink();
    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (spyFrameRef.current) {
        window.cancelAnimationFrame(spyFrameRef.current);
      }
    };
  }, []);

  const handleNavClick = (href) => {
    if (!href?.startsWith('#')) {
      setIsOpen(false);
      return;
    }

    const target = document.getElementById(href.slice(1));
    const container = getScrollContainer();
    if (!target || !container) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);
    const targetId = href.slice(1);
    lockSpy(targetId);
    setActiveLink(targetId);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const isMobile = window.matchMedia('(max-width: 860px)').matches;
    const targetTop =
      target.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop;

    const finalTop = Math.max(0, targetTop - 4);

    if (prefersReducedMotion) {
      container.scrollTop = finalTop;
      unlockSpy();
      window.history.replaceState(null, '', href);
      return;
    }

    if (isMobile) {
      // Wait a frame so the menu state settles, then perform native scroll.
      window.requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });

        // Fallback for browsers that don't reliably animate container scroll.
        window.setTimeout(() => {
          const delta = Math.abs(container.scrollTop - finalTop);
          if (delta > 6) {
            container.scrollTo({ top: finalTop, behavior: 'smooth' });
          }
        }, 80);
      });

      navUnlockTimeoutRef.current = window.setTimeout(() => {
        unlockSpy();
      }, 520);

      window.history.replaceState(null, '', href);
      return;
    }

    const start = container.scrollTop;
    const distance = finalTop - start;
    const duration = 900;
    const startTime = performance.now();
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    if (animationRef.current) {
      window.cancelAnimationFrame(animationRef.current);
    }

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollTop = start + distance * easeInOutCubic(progress);

      if (progress < 1) {
        animationRef.current = window.requestAnimationFrame(step);
      } else {
        unlockSpy();
        window.history.replaceState(null, '', href);
      }
    };

    animationRef.current = window.requestAnimationFrame(step);
  };

  return (
    <>
      <div className='menuToggle'>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          label={isOpen ? 'Close menu' : 'Open menu'}
          rounded
          duration={0.35}
          size={22}
          color='#f3f5f8'
        />
      </div>

      {isOpen && (
        <button
          type='button'
          className='sidebarBackdrop'
          aria-label='Close menu overlay'
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='brand'>
          <span
            className='corner cornerTop'
            aria-hidden='true'
          />
          <div className='logo'>
            Borin <span>project</span>
          </div>
          <span
            className='corner cornerBottom'
            aria-hidden='true'
          />
        </div>

        <nav
          className='nav'
          aria-label='Main navigation'
        >
          <div
            className='sidebarGooeyShell'
            ref={gooeyShellRef}
            style={{
              '--pill-top': `${pillStyle.top}px`,
              '--pill-height': `${pillStyle.height}px`,
              '--pill-opacity': pillStyle.opacity,
            }}
          >
            <span
              className='sidebarActivePill'
              aria-hidden='true'
            />
            <GooeyNav
              className='sidebarGooeyNav'
              vertical
              items={navLinks.map((link) => ({
                label: link.label,
                href: link.href,
              }))}
              activeHref={`#${activeLink}`}
              initialActiveIndex={0}
              animationTime={560}
              particleCount={10}
              particleDistances={[56, 8]}
              particleR={64}
              timeVariance={190}
              colors={[1, 2, 3, 4]}
              onItemClick={(_event, item) => handleNavClick(item.href)}
            />
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
