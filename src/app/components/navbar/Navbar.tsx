'use client';

import React, { useState } from 'react';
import './Navbar.css';
import OptionWheel from '../optionwheel/OptionWheel';
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Chi Sono' },
  { id: 'services', label: 'Servizi' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'contact', label: 'Contatti' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);
    const scrollContainer = document.getElementById('main-scroll-container');

    if (!target || !scrollContainer) return;

    const topOffset = 96;

    scrollContainer.scrollTo({
      top: Math.max(target.offsetTop - topOffset, 0),
      behavior: 'smooth',
    });

    setIsMobileMenuOpen(false);
  };

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
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
            onClick={onToggleMobileMenu}
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
            <OptionWheel
              items={NAV_LINKS.map((item) => item.label)}
              defaultSelected={0}
              textColor="#a6a6a6"
              activeColor="#ffffff"
              side="left"
              fontSize={3}
              spacing={1.4}
              curve={1}
              tilt={6}
              blur={2}
              fade={0.25}
              smoothing={200}
              inset={80}
              loop={false}
              draggable
              soundUrl="/assets/sounds/click-soft.mp3"
              soundVolume={0.5}
              onChange={(index, item) => console.log(index, item)}
            />
            {/* {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="navbar-link"
                onClick={(event) => onSectionClick(event, item.id)}
              >
                {item.label}
              </a>
            ))} */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
