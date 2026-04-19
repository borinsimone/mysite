'use client';

import { useEffect } from 'react';

const REVEAL_SELECTOR = '[data-reveal]';

function ScrollReveal() {
  useEffect(() => {
    const container = document.getElementById('main-scroll-container');
    if (!container) {
      return;
    }

    const revealNodes = Array.from(container.querySelectorAll(REVEAL_SELECTOR));

    if (!revealNodes.length) {
      return;
    }

    revealNodes.forEach((node) => {
      if (!node.classList.contains('reveal-ready')) {
        node.classList.add('reveal-ready');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      {
        root: container,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

export default ScrollReveal;
