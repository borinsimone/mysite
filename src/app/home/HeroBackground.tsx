'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import heroBackground from './herobgmysite.png';

export default function HeroBackground() {
  const background = useRef<HTMLDivElement>(null);
  const imageLayer = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, (value) => value * 0.5);
  const parallaxScale = useTransform(scrollY, [0, 500], [1, 1.5]);

  useEffect(() => {
    const layer = imageLayer.current;
    const hero = layer?.closest('section');
    if (!layer || !hero) return;

    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let clientX = 0;
    let clientY = 0;

    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      layer.style.setProperty('--glow-opacity', '0');
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !pointerQuery.matches || motionQuery.matches) return;
      clientX = event.clientX;
      clientY = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const bounds = layer.getBoundingClientRect();
        const localX = ((clientX - bounds.left) / bounds.width) * layer.offsetWidth;
        const localY = ((clientY - bounds.top) / bounds.height) * layer.offsetHeight;
        layer.style.setProperty('--glow-x', `${localX}px`);
        layer.style.setProperty('--glow-y', `${localY}px`);
        layer.style.setProperty('--glow-opacity', '1');
        frame = 0;
      });
    };

    hero.addEventListener('pointermove', move);
    hero.addEventListener('pointerleave', hide);
    hero.addEventListener('pointercancel', hide);
    window.addEventListener('scroll', hide, { passive: true });
    window.addEventListener('blur', hide);
    pointerQuery.addEventListener('change', hide);
    motionQuery.addEventListener('change', hide);
    return () => {
      hide();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', hide);
      hero.removeEventListener('pointercancel', hide);
      window.removeEventListener('scroll', hide);
      window.removeEventListener('blur', hide);
      pointerQuery.removeEventListener('change', hide);
      motionQuery.removeEventListener('change', hide);
    };
  }, []);

  return (
    <div ref={background} className="hero-background" aria-hidden="true">
      <motion.div
        ref={imageLayer}
        className="hero-parallax-layer"
        style={{ y: reducedMotion ? 0 : parallaxY, scale: reducedMotion ? 1 : parallaxScale }}
      >
        <Image src={heroBackground} alt="" fill sizes="100vw" priority />
        <div className="hero-accent-glow">
          <Image src={heroBackground} alt="" fill sizes="100vw" />
        </div>
      </motion.div>
    </div>
  );
}
