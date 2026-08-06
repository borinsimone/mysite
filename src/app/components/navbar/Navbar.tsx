'use client';

import React, { useEffect, useState } from 'react';
import './Navbar.css';
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Chi Sono' },
  { id: 'services', label: 'Servizi' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'contact', label: 'Contatti' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const onSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);
    const scrollContainer = document.getElementById('main-scroll-container');

    if (!target || !scrollContainer) return;

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
    <header className="navbar-shell">
      <div className="navbar-container">
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-brand"
            onClick={(event) => onSectionClick(event, 'home')}
          >
            SB
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
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
