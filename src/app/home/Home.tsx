'use client';
import React from 'react';
import styles from './home.module.scss';
import SpecularButton from '../components/specular-button/SpecularButton';
import Lightfall from '../components/lightfall/Lightfall';
import GlassSurface from '../components/glass-surface/GlassSurface';
import Antigravity from '../components/antigravitybg/Antigravity';
const SERVICE_TAGS = [
  {
    label: 'Web Design',
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
    label: 'Frontend Development',
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
    label: 'Performance',
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
    label: 'SEO Base',
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
    label: 'Motion',
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
      <div className={styles.servicesTags}>
        {SERVICE_TAGS.map((item, i, arr) => (
          <React.Fragment key={item.label}>
            <span className={styles.servicesTag}>
              <span className={styles.servicesTagIcon}>{item.icon}</span>
              {item.label}
            </span>
            {i < arr.length - 1 && <span className={styles.servicesDivider} />}
          </React.Fragment>
        ))}
      </div>{' '}
    </div>
  );
}

export default Home;
