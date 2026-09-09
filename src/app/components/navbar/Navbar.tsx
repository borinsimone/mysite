'use client';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ArrowIcon from '../arrow-icon/ArrowIcon';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './Navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'method', label: 'Metodo' },
  { id: 'services', label: 'Servizi' },
  { id: 'about', label: 'Chi sono' },
  { id: 'contact', label: 'Contatti' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 860) setIsOpen(false);
    };
    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

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
    <header className="navbar-shell">
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
          aria-controls="navbar-mobile-menu"
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="navbar-links" aria-label="Navigazione principale">
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
          Parliamone <ArrowIcon />
        </a>
      </div>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            key="mobile-menu"
            active={active}
            trigger={toggle}
            onClose={() => setIsOpen(false)}
            onNavigate={setActive}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileMenu({
  active,
  trigger,
  onClose,
  onNavigate,
}: {
  active: string;
  trigger: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onNavigate: (id: string) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const menu = dialog.current;
    const button = trigger.current;
    const previousOverflow = document.body.style.overflow;
    menu?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      menu?.close();
      document.body.style.overflow = previousOverflow;
      button?.focus({ preventScroll: true });
    };
  }, [trigger]);

  return (
    <motion.dialog
      ref={dialog}
      initial={{ opacity: 0, y: reducedMotion ? 0 : -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reducedMotion ? 0 : -10 }}
      transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      id="navbar-mobile-menu"
      className="mobile-menu"
      aria-label="Menu di navigazione"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          onClose();
      }}
    >
      <div className="mobile-menu-body">
        <div className="mobile-menu-main">
          <nav className="mobile-menu-links" aria-label="Navigazione mobile">
            {links.map(({ id, label }, index) => (
              <motion.a
                initial={{ opacity: 0, x: reducedMotion ? 0 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.25,
                  delay: reducedMotion ? 0 : index * 0.035,
                }}
                key={id}
                href={`#${id}`}
                aria-current={active === id ? 'location' : undefined}
                onClick={() => {
                  onClose();
                  onNavigate(id);
                }}
              >
                <span className="mobile-menu-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mobile-menu-dash" aria-hidden="true" />
                <span>{label}</span>
                <ArrowIcon />
              </motion.a>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <a className="mobile-menu-contact" href="#contact" onClick={() => onClose()}>
              <svg
                className="mobile-menu-chat"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 4h12v11H12l-4 3V4Z" />
                <path d="M8 9H4v12l4-3h6v-3" />
              </svg>
              <span>
                Inizia il tuo progetto<small>Parliamone insieme</small>
              </span>
              <span className="mobile-menu-contact-arrow">
                <ArrowIcon />
              </span>
            </a>
            <div className="mobile-menu-socials">
              {[
                { label: 'GitHub', href: 'https://github.com/simoneborin', icon: faGithub },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/simoneborin',
                  icon: faLinkedinIn,
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (si apre in una nuova scheda)`}
                >
                  <svg
                    aria-hidden="true"
                    viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`}
                    fill="currentColor"
                  >
                    <path d={icon.icon[4] as string} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <aside className="mobile-menu-art" aria-hidden="true">
          <p className="mobile-menu-tagline">
            Web solutions
            <br />
            for a brighter
            <br />
            tomorrow
          </p>
          <div className="mobile-menu-signoff">
            <span>SB</span>
            <strong>Simone Borin</strong>
          </div>
        </aside>
      </div>
    </motion.dialog>
  );
}
