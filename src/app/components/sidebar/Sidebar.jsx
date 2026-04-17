'use client';

import React, { useEffect, useRef, useState } from 'react';
import './sidebar.scss';
import { Divide as Hamburger } from 'hamburger-react';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const HomeIcon = () => (
  <svg {...iconProps}>
    <path d='M3 11.5 12 4l9 7.5' />
    <path d='M5.5 10.5V20h13V10.5' />
  </svg>
);

const AboutIcon = () => (
  <svg {...iconProps}>
    <circle
      cx='12'
      cy='12'
      r='9'
    />
    <path d='M12 10v6' />
    <path d='M12 7.5h.01' />
  </svg>
);

const ServicesIcon = () => (
  <svg {...iconProps}>
    <path d='M12 2.5v3' />
    <path d='m16.95 4.55-2.1 2.1' />
    <path d='M21.5 12h-3' />
    <path d='m16.95 19.45-2.1-2.1' />
    <path d='M12 21.5v-3' />
    <path d='m7.05 19.45 2.1-2.1' />
    <path d='M2.5 12h3' />
    <path d='m7.05 4.55 2.1 2.1' />
    <circle
      cx='12'
      cy='12'
      r='3.5'
    />
  </svg>
);

const PortfolioIcon = () => (
  <svg {...iconProps}>
    <rect
      x='3.5'
      y='6.5'
      width='17'
      height='12'
      rx='2'
    />
    <path d='M9 6.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v1.5' />
    <path d='M3.5 11.5h17' />
  </svg>
);

const ContactIcon = () => (
  <svg {...iconProps}>
    <rect
      x='3.5'
      y='5.5'
      width='17'
      height='13'
      rx='2'
    />
    <path d='m4.5 7 7.5 6 7.5-6' />
  </svg>
);

const navLinks = [
  { name: 'home', Icon: HomeIcon, href: '#home' },
  { name: 'about', Icon: AboutIcon, href: '#about' },
  { name: 'services', Icon: ServicesIcon, href: '#services' },
  { name: 'portfolio', Icon: PortfolioIcon, href: '#portfolio' },
  { name: 'contact', Icon: ContactIcon, href: '#contact' },
];

const getScrollContainer = () =>
  document.getElementById('main-scroll-container') ??
  document.querySelector('[class*="section-container"]');

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });
  const animationRef = useRef(null);
  const spyFrameRef = useRef(null);
  const linksRef = useRef(null);
  const linkRefs = useRef({});

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
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }

      if (spyFrameRef.current) {
        window.cancelAnimationFrame(spyFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeItem = linkRefs.current[activeLink];
      const list = linksRef.current;

      if (!activeItem || !list) {
        return;
      }

      const itemHeight = activeItem.offsetHeight;
      const railHeight = Math.max(22, Math.round(itemHeight * 0.62));
      const top = activeItem.offsetTop + (itemHeight - railHeight) / 2;

      setIndicatorStyle({
        top,
        height: railHeight,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);

    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeLink, isOpen]);

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

  const handleNavClick = (event, href) => {
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

    event.preventDefault();
    setIsOpen(false);
    setActiveLink(href.slice(1));

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
          <ul
            className='links'
            ref={linksRef}
            style={{
              '--active-top': `${indicatorStyle.top}px`,
              '--active-height': `${indicatorStyle.height}px`,
              '--active-opacity': indicatorStyle.opacity,
            }}
          >
            <li
              className='activeRailTrail'
              aria-hidden='true'
              role='presentation'
            />
            <li
              className='activeRail'
              aria-hidden='true'
              role='presentation'
            />
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`link ${activeLink === link.name ? 'active' : ''}`}
                ref={(element) => {
                  if (element) {
                    linkRefs.current[link.name] = element;
                  }
                }}
              >
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  aria-current={activeLink === link.name ? 'page' : undefined}
                >
                  <span
                    className='icon'
                    aria-hidden='true'
                  >
                    <link.Icon />
                  </span>
                  <span className='name'>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
