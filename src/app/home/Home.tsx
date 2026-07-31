'use client';
import React from 'react';
import styles from './home.module.scss';
import SpecularButton from '../components/specular-button/SpecularButton';
import Lightfall from '../components/lightfall/Lightfall';
import GlassSurface from '../components/glass-surface/GlassSurface';

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
      <Lightfall
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
      />
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
    </div>
  );
}

export default Home;
