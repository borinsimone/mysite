import React from 'react';
import './sidebar.scss';

function Sidebar() {
  const links = [
    { name: 'home', icon: '⌂', href: '#home', active: true },
    { name: 'about', icon: 'i', href: '#about' },
    { name: 'services', icon: '≡', href: '#services' },
    { name: 'portfolio', icon: '▣', href: '#portfolio' },
    { name: 'contact', icon: '✉', href: '#contact' },
  ];

  return (
    <div className='sidebar'>
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
              <a href={link.href}>
                <span
                  className='icon'
                  aria-hidden='true'
                >
                  {link.icon}
                </span>
                <span className='name'>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
