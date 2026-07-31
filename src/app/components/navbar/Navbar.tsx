'use client';

import React from 'react';
import './Navbar.css';
import GlassSurface from '../glass-surface/GlassSurface';

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
      <GlassSurface
        className="navbar-container"
        width="90%"
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={0}
        blueOffset={0}
        brightness={100}
        opacity={0.1}
        mixBlendMode="screen"

        borderRadius={50}
      >
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
      </GlassSurface>
    </header>
  );
}

export default Navbar;
