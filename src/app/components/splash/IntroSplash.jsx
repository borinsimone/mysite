'use client';

import { useEffect, useState } from 'react';
import styles from './IntroSplash.module.scss';

const SPLASH_SESSION_KEY = 'sb-intro-splash-seen';

function IntroSplash() {
  const [phase, setPhase] = useState('show');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const seenInSession = window.sessionStorage.getItem(SPLASH_SESSION_KEY) === '1';

    if (seenInSession) {
      setPhase('done');
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const showDuration = reducedMotion ? 420 : 2200;
    const hideDuration = reducedMotion ? 180 : 620;

    const hideTimer = window.setTimeout(() => {
      setPhase('hide');
    }, showDuration);

    const doneTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
      setPhase('done');
    }, showDuration + hideDuration);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  return (
    <div className={`${styles.splash} ${phase === 'hide' ? styles.hide : ''}`} aria-hidden="true">
      <div className={styles.grain} />
      <div className={styles.glow} />
      <div className={styles.content}>
        <p className={styles.kicker}>Simone Borin</p>
        {/* <h1>Il tuo amichevole sviluppatore di quartiere</h1> */}
        <span className={styles.line} />
      </div>
    </div>
  );
}

export default IntroSplash;
