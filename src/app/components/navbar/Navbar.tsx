'use client';

import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Chi sono' },
  { id: 'services', label: 'Servizi' },
  { id: 'method', label: 'Metodo' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'contact', label: 'Contatti' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggle.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 860) setIsOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    );
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar-shell" ref={header}>
      <div className="site-width navbar-inner">
        <a
          className="monogram"
          href="#home"
          aria-label="Simone Borin, home"
          onClick={() => setIsOpen(false)}
        >
          SB
        </a>
        <button
          ref={toggle}
          type="button"
          className={`navbar-toggle ${isOpen ? 'is-open' : ''}`}
          aria-expanded={isOpen}
          aria-controls="navbar-mobile-links"
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="navbar-mobile-links"
          className={`navbar-links ${isOpen ? 'is-open' : ''}`}
          aria-label="Navigazione principale"
          onBlur={(event) => {
            if (!header.current?.contains(event.relatedTarget)) setIsOpen(false);
          }}
        >
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => {
                setIsOpen(false);
                setActive(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="pill small navbar-cta" href="#contact" onClick={() => setIsOpen(false)}>
          Parliamone <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
