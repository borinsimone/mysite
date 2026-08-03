'use client';
import React from 'react';
import styles from './home.module.scss';
import SpecularButton from '../components/specular-button/SpecularButton';
import Lightfall from '../components/lightfall/Lightfall';
import GlassSurface from '../components/glass-surface/GlassSurface';
import Antigravity from '../components/antigravitybg/Antigravity';
import CardSwap, { Card } from '../components/card-swap/CardSwap';
const SERVICE_TAGS = [
  {
    eyebrow: 'UI / UX DESIGN',
    label: 'Web Design',
    title: 'Esperienze digitali su misura',
    description: 'Struttura e gerarchia visiva chiare, orientate agli obiettivi del brand.',
    chips: ['UX Research', 'UI Design', 'Prototype'],
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    eyebrow: 'WEB DEVELOPMENT',
    label: 'Frontend Development',
    title: 'Siti web veloci e performanti',
    description: 'Interfacce moderne e mantenibili, costruite con attenzione a UX e scalabilita.',
    chips: ['React', 'Next.js', 'TypeScript'],
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    eyebrow: 'PERFORMANCE',
    label: 'Performance',
    title: 'Caricamenti rapidi e fluidi',
    description: 'Ottimizzazione caricamento e rendering per un sito rapido e reattivo.',
    chips: ['Core Web Vitals', 'Caching', 'Image Opt'],
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    eyebrow: 'SEO',
    label: 'SEO Base',
    title: 'Fondamenta SEO solide',
    description: 'Fondamenta tecniche e contenutistiche per migliorare la visibilita organica.',
    chips: ['Metadata', 'Schema', 'Struttura'],
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    eyebrow: 'MOTION',
    label: 'Motion',
    title: 'Movimenti che guidano l attenzione',
    description: 'Micro-animazioni e transizioni che guidano l attenzione senza distrarre.',
    chips: ['Microinteraction', 'Transition', 'Reveal'],
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12 Q6 6 12 12 Q18 18 22 12" />
      </svg>
    ),
  },
];

function GlassSpecularButton({ children }: { children: React.ReactNode }) {
  return (
    <GlassSurface
      width="fit-content"
      height="auto"
      borderRadius={999}
      backgroundOpacity={0.08}
      saturation={1.05}
      blur={8}
      displace={0.15}
      distortionScale={-85}
      redOffset={0}
      greenOffset={3}
      blueOffset={6}
      mixBlendMode="soft-light"
    >
      <SpecularButton
        size="md"
        radius={18}
        tintOpacity={0.08}
        blur={10}
        lineColor="#ff2d55"
        textColor="#ff2d55"
      >
        {children}
      </SpecularButton>
    </GlassSurface>
  );
}

function Home() {
  const scrollToContact = () => {
    const target = document.getElementById('contact');
    const scrollContainer = document.getElementById('main-scroll-container');

    if (!target || !scrollContainer) return;

    const topOffset = 96;

    scrollContainer.scrollTo({
      top: Math.max(target.offsetTop - topOffset, 0),
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.home} id="home">
      {/* <Lightfall
        className={styles.lightfallBg}
        colors={['#1a0b12', '#4a1121', '#ff2d55']}
        backgroundColor="#09060a"
        speed={0.5}
        streakCount={2}
        streakWidth={1}
        streakLength={1}
        glow={0.7}
        density={0.6}
        twinkle={1}
        zoom={3}
        backgroundGlow={0.2}
        opacity={0.68}
        mouseInteraction
        mouseStrength={0.5}
        mouseRadius={1}
      /> */}
      <div className={styles.lightfallBg}>
        <Antigravity
          count={900}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.3}
          lerpSpeed={0.05}
          color="#EF4444"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="tetrahedron"
          fieldStrength={10}
        />
      </div>
      <div className={styles.heroContent}>
        <p className={styles.kicker}>Siti web su misura, pensati per crescere</p>

        <h1 className={styles.title}>
          Un sito che comunica <span>con chiarezza</span> e sostiene <span>il tuo lavoro</span>
        </h1>

        <p className={styles.lead}>
          Progetto interfacce veloci, curate e pensate per mettere in risalto il valore di ciò che
          fai, così il sito diventa uno strumento affidabile, elegante e facile da usare.
        </p>

        <div className={styles.actions}>
          {/* <GlassSpecularButton>Contattami</GlassSpecularButton> */}
          <SpecularButton
            className={styles.secondaryCta}
            type="button"
            lineColor="#ff2d55"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            baseColor="#525252"
            intensity={1}
            shineSize={50}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={true}
            onClick={scrollToContact}
          >
            Contattami
          </SpecularButton>
        </div>
      </div>
      <div className={styles.servicesCardsSwap}>
        <CardSwap
          width="min(86vw, 460px)"
          height="clamp(200px, 40vw, 340px)"
          cardDistance={44}
          verticalDistance={48}
          delay={3200}
          pauseOnHover={false}
        >
          {SERVICE_TAGS.map((item, index) => (
            <Card key={item.label} customClass={styles.serviceSwapCard}>
              <div className={styles.serviceSwapCardTop}>
                <span className={styles.serviceSwapEyebrow}>{item.eyebrow}</span>
                {/* <div className={styles.serviceSwapDots} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div> */}
              </div>

              <div className={styles.serviceSwapBody}>
                <div className={styles.serviceSwapMeta}>
                  <span className={styles.serviceSwapIndex}>0{index + 1}</span>
                  <span className={styles.serviceSwapLabel}>{item.label}</span>
                </div>
                <h3 className={styles.serviceSwapTitle}>{item.title}</h3>
                <p className={styles.serviceSwapDescription}>{item.description}</p>
              </div>

              <div className={styles.serviceSwapBottom}>
                <div className={styles.serviceSwapChips}>
                  {item.chips.map((chip) => (
                    <span key={chip} className={styles.serviceSwapChip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <span className={styles.serviceSwapArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </Card>
          ))}
        </CardSwap>

        {/* <CardSwap
          width="min(92vw, 520px)"
          height={220}
          cardDistance={22}
          verticalDistance={16}
          delay={3200}
          pauseOnHover
          skewAmount={2}
          easing="elastic"
        >
          {SERVICE_TAGS.map((item) => (
            <article key={item.label} className={styles.serviceCard}>
              <div className={styles.serviceCardHead}>
                <span className={styles.serviceCardIcon}>{item.icon}</span>
                <h3 className={styles.serviceCardTitle}>{item.label}</h3>
              </div>
              <p className={styles.serviceCardDescription}>{item.description}</p>
            </article>
          ))}
        </CardSwap> */}
      </div>
    </div>
  );
}

export default Home;
