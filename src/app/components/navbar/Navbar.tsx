'use client';

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import GlassSurface from '../glass-surface/GlassSurface';
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Chi Sono' },
  { id: 'services', label: 'Servizi' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'contact', label: 'Contatti' },
];

const CTA_LINK = { id: 'contact', label: 'Iniziamo' };

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isMobileViewport = () => window.innerWidth <= 860;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 860) setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    const useWindowScroll = isMobileViewport() || !scrollContainer;
    const scrollTarget: Window | HTMLElement = useWindowScroll ? window : scrollContainer;
    let lastScrollTop = useWindowScroll ? window.scrollY : scrollContainer.scrollTop;

    const readScrollDirection = () => {
      const currentScrollTop = useWindowScroll ? window.scrollY : scrollContainer.scrollTop;
      const isScrollingDown = currentScrollTop > lastScrollTop;
      const hasPassedThreshold = currentScrollTop > 24;

      if (!hasPassedThreshold) {
        setIsScrolled(false);
      } else if (isScrollingDown) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollTop = currentScrollTop;
    };

    scrollTarget.addEventListener('scroll', readScrollDirection, { passive: true });
    readScrollDirection();

    return () => {
      scrollTarget.removeEventListener('scroll', readScrollDirection);
    };
  }, []);

  const onSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);
    const scrollContainer = document.getElementById('main-scroll-container');

    if (!target) return;

    if (isMobileViewport() || !scrollContainer) {
      const topOffset = 88;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(targetTop - topOffset, 0),
        behavior: 'smooth',
      });

      window.history.replaceState(null, '', `#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const topOffset = window.innerWidth <= 860 ? 16 : 96;
    const targetTop =
      target.getBoundingClientRect().top -
      scrollContainer.getBoundingClientRect().top +
      scrollContainer.scrollTop;

    scrollContainer.scrollTo({
      top: Math.max(targetTop - topOffset, 0),
      behavior: 'smooth',
    });

    window.history.replaceState(null, '', `#${sectionId}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-shell ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* <GlassSurface
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        mixBlendMode="screen"
      >
        <span>Advanced Glass Distortion</span>
      </GlassSurface> */}
      <div className="navbar-container">
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-brand"
            onClick={(event) => onSectionClick(event, 'home')}
          >
            <span className="navbar-brand-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="navbar-brand-text">Simone Borin</span>
          </a>

          <button
            type="button"
            className={`navbar-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="navbar-mobile-links"
            aria-label="Apri o chiudi menu di navigazione"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span className="navbar-toggle-line" />
            <span className="navbar-toggle-line" />
            <span className="navbar-toggle-line" />
          </button>

          <nav
            id="navbar-mobile-links"
            className={`navbar-links ${isMobileMenuOpen ? 'is-open' : ''}`}
            aria-label="Navigazione principale"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="navbar-link"
                onClick={(event) => onSectionClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}

            <a
              href={`#${CTA_LINK.id}`}
              className="navbar-cta navbar-cta-mobile"
              onClick={(event) => onSectionClick(event, CTA_LINK.id)}
            >
              {CTA_LINK.label}
            </a>
          </nav>

          <a
            href={`#${CTA_LINK.id}`}
            className="navbar-cta navbar-cta-desktop"
            onClick={(event) => onSectionClick(event, CTA_LINK.id)}
          >
            {CTA_LINK.label}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
