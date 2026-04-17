'use client';
import React from 'react';
import styles from './home.module.scss';
import DarkVeil from '../components/bg/DarkVeil';
import BorderGlow from '../components/borderGlow/BorderGlow';
function Home() {
  return (
    <div
      className={styles.home}
      id='home'
    >
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={1.5}
        scanlineFrequency={0.5}
        warpAmount={0}
      />

      <div className={styles.content}>
        <p className={styles.kicker}>
          Ciao! io sono <span>Simone Borin</span>
        </p>
        <h1>
          Sono uno <span>Sviluppatore Freelance</span>
        </h1>
        <p className={styles.lead}>
          Progetto e sviluppo siti web moderni per freelance, startup e piccole
          aziende. Realizzo interfacce veloci, responsive e orientate ai
          risultati.
        </p>

        <div className={styles.actions}>
          <a
            href='mailto:hello@simone.dev'
            className={styles.primaryCta}
          >
            Contattami
          </a>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <div
          className={styles.cornerTop}
          aria-hidden='true'
        />
        <BorderGlow
          className={styles.image}
          glowColor='348 100 58'
          backgroundColor='#090c13'
          borderRadius={4}
          glowIntensity={3.5}
          glowRadius={80}
          coneSpread={55}
          edgeSensitivity={60}
        >
          <span>SB</span>
        </BorderGlow>
        <div
          className={styles.cornerBottom}
          aria-hidden='true'
        />
      </div>
    </div>
  );
}

export default Home;
