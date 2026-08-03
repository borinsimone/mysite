'use client';

import React from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Chi Sono' },
  { id: 'services', label: 'Servizi' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'contact', label: 'Contatti' },
];

function Navbar() {
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

          <nav className="navbar-links" aria-label="Navigazione principale">
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
