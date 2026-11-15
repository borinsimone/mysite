'use client';

import dynamic from 'next/dynamic';
import { useCallback, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';
import ArrowIcon from '../components/arrow-icon/ArrowIcon';
import styles from './nfc-experience.module.scss';

const Scene = dynamic(() => import('./NfcScene'), { ssr: false });
const chapters = [
  {
    label: '01 / LA TUA IDENTITÀ',
    title: 'Un piccolo tap.',
    accent: 'Grandi connessioni.',
    text: 'Una tessera NFC personalizzata che porta la tua attività dal mondo fisico a quello digitale.',
  },
  {
    label: '02 / FATTA PER TE',
    title: 'Il tuo stile.',
    accent: 'Su ogni lato.',
    text: 'Logo, colori e grafica su misura. Una carta da mostrare, condividere e ricordare.',
  },
  {
    label: '03 / LA CONNESSIONE',
    title: 'Avvicina.',
    accent: 'E sei connesso.',
    text: 'Basta avvicinare uno smartphone compatibile per aprire il collegamento: recensioni, social, menu o contatti.',
  },
  {
    label: '04 / NUOVE POSSIBILITÀ',
    title: 'Una carta.',
    accent: 'Il tuo mondo digitale.',
    text: 'Scegli dove portare i tuoi clienti. Scopri gli esempi o parliamo della tua tessera personalizzata.',
  },
];

function Chapter({
  index,
  progress,
  enhanced,
}: {
  index: number;
  progress: MotionValue<number>;
  enhanced: boolean;
}) {
  const chapter = chapters[index];
  const start = index / 4;
  const opacity = useTransform(progress, (p) => {
    const local = p - start;
    const enter = index === 0 ? 1 : Math.max(0, Math.min(1, local / 0.045));
    const exit = index === 3 ? 1 : Math.max(0, Math.min(1, (0.25 - local) / 0.045));
    return enter * exit;
  });
  const y = useTransform(progress, (p) => 12 * (1 - Math.max(0, Math.min(1, (p - start) / 0.06))));
  const visibility = useTransform(progress, (p) =>
    p >= start && (index === 3 || p < start + 0.25) ? 'visible' : 'hidden',
  );
  return (
    <motion.article
      className={styles.chapter}
      style={enhanced ? { opacity, y, visibility } : { opacity: 1, y: 0, visibility: 'visible' }}
    >
      <p className={styles.label}>{chapter.label}</p>
      {index === 0 ? (
        <h2 id="nfc-title">
          {chapter.title}
          <br />
          <span>{chapter.accent}</span>
        </h2>
      ) : (
        <h3>
          {chapter.title}
          <br />
          <span>{chapter.accent}</span>
        </h3>
      )}
      <p className={styles.description}>{chapter.text}</p>
      {index === 3 && (
        <div className={styles.actions}>
          <a className="pill primary" href="#contact">
            Crea la tua card <ArrowIcon />
          </a>
        </div>
      )}
    </motion.article>
  );
}

export default function NfcExperience() {
  const root = useRef<HTMLDivElement>(null);
  const near = useInView(root, { margin: '400px 0px', once: true });
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);
  const handleError = useCallback(() => setFailed(true), []);
  const enhanced = ready && !failed && !reducedMotion;
  const { scrollYProgress } = useScroll({ target: root, offset: ['start start', 'end end'] });
  return (
    <div ref={root} className={styles.experience} data-enhanced={enhanced}>
      <div className={styles.stage}>
        <div className={styles.visual} aria-hidden="true">
          {!enhanced && (
            <div className={styles.fallback}>
              <span>
                SB<span>.</span>
              </span>
              <small>TAP TO CONNECT</small>
            </div>
          )}
          {near && !reducedMotion && !failed && (
            <Scene progress={scrollYProgress} onReady={handleReady} onError={handleError} />
          )}
          <span className={styles.caption}>PHYSICAL MEETS DIGITAL</span>
        </div>
        <div className={styles.chapters}>
          {chapters.map((chapter, index) => (
            <Chapter
              key={chapter.label}
              index={index}
              progress={scrollYProgress}
              enhanced={enhanced}
            />
          ))}
        </div>
        <a className={styles.skip} href="#nfc-examples">
          Passa agli esempi <ArrowIcon direction="down" />
        </a>
        {enhanced && (
          <motion.div
            className={styles.progress}
            style={{ scaleX: scrollYProgress }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
