import React from 'react';
import styles from './home.module.scss';
import DarkVeil from '../components/bg/DarkVeil';
function Home() {
  return (
    <div className={styles.home}>
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
          Hello, my name is <span>Simone Borin</span>
        </p>
        <h1>
          I&apos;m a <span>Freelance Developer</span>
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
        <div className={styles.image}>
          <span>SB</span>
        </div>
        <div
          className={styles.cornerBottom}
          aria-hidden='true'
        />
      </div>
    </div>
  );
}

export default Home;
