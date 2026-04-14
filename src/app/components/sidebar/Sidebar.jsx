'use client';

import React, { useEffect, useState } from 'react';
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

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'home', Icon: HomeIcon, href: '#home', active: true },
    { name: 'about', Icon: AboutIcon, href: '#about' },
    { name: 'services', Icon: ServicesIcon, href: '#services' },
    { name: 'portfolio', Icon: PortfolioIcon, href: '#portfolio' },
    { name: 'contact', Icon: ContactIcon, href: '#contact' },
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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
          <div className='logo'>Atlas</div>
          <span
            className='corner cornerBottom'
            aria-hidden='true'
          />
        </div>

        <nav
          className='nav'
          aria-label='Main navigation'
        >
          <ul className='links'>
            {links.map((link) => (
              <li
                key={link.name}
                className={`link ${link.active ? 'active' : ''}`}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
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
