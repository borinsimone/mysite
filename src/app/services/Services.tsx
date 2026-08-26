'use client';
import React from 'react';
import Image from 'next/image';
import styles from './services.module.scss';
import BorderGlow from '../components/borderGlow/BorderGlow';
import processImg from './serviceImgNobg.png';
import MagicBento, { BentoCardProps } from '../components/magicBento/MagicBento';
import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';
const serviceCards = [
  {
    label: 'Presenza online',
    title: 'Siti vetrina',
    description:
      'Siti professionali, veloci e facili da gestire, ideali per presentare la tua attività e attirare nuovi clienti.',
    color: '#120f17',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
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
    label: 'Conversione',
    title: 'Landing page',
    description:
      'Pagine ad alto impatto pensate per convertire, promuovere un servizio o lanciare un prodotto.',
    color: '#120f17',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    label: 'Prodotto digitale',
    title: 'Web app / gestionali',
    description:
      'Soluzioni web personalizzate per automatizzare processi e semplificare la gestione della tua attività.',
    color: '#120f17',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    label: 'Ottimizzazione',
    title: 'Restyling e ottimizzazione',
    description:
      "Rinnovo l'aspetto e miglioro le performance di siti esistenti per renderli moderni ed efficaci.",
    color: '#120f17',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
  },
];

const bentoServiceCards: BentoCardProps[] = serviceCards.map((card) => ({
  label: card.label,
  title: card.title,
  description: card.description,
  color: card.color,
  icon: card.icon,
}));

const steps = [
  {
    number: '01',
    title: 'Ascolto',
    description:
      'Conosco i tuoi obiettivi, analizzo il contesto e definisco le priorità del progetto.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategia',
    description:
      'Creo la struttura, definisco contenuti e funzionalità per ottenere risultati concreti.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design',
    description: "Progetto un'interfaccia chiara, coerente e intuitiva, centrata sull'utente.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Sviluppo',
    description:
      'Sviluppo con codice pulito, performante e scalabile. Testo, ottimizzo e pubblico.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Lancio',
    description: 'Testo, ottimizzo e pubblico il sito. Poi resto al tuo fianco per farlo crescere.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles['section-container']}>
        {/* --- Services grid --- */}
        <div className={styles.header}>
          <p className={styles.kicker}>Servizi</p>
          <h2>Soluzioni digitali su misura</h2>
          <p className={styles.lead}>
            Ogni progetto è pensato per rispondere a obiettivi reali,
            <br />
            con un approccio strategico e orientato ai risultati.
          </p>
        </div>

        <MagicBento
          items={bentoServiceCards}
          layout="uniform"
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={true}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="255, 45, 85"
          disableAnimations={false}
        />
        {/* --- Process timeline --- */}
        <div className={styles.process}>
          <div className={styles.processHeader}>
            <p className={styles.kicker}>Come lavoro</p>
            <h2 className={styles.processTitle}>
              Un processo chiaro,
              <br />
              passo dopo passo<span className={styles.processAccent}>.</span>
            </h2>
            <p className={styles.processSub}>
              Un metodo collaudato per trasformare le tue idee in un sito web efficace.
            </p>
          </div>
          <div className={styles.processContent}>
            <div className={styles.steps}>
              {steps.map((step, i) => (
                <div key={step.number} className={styles.stepRow}>
                  <div className={styles.stepLeft}>
                    <div className={styles.stepCircle}>{step.number}</div>
                    {i < steps.length - 1 && <span className={styles.stepConnector} />}
                  </div>
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="255 45 85"
                    backgroundColor="#120F17"
                    borderRadius={28}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={['#ff2d55', '#ff6b8a', '#ff0033']}
                  >
                    <div className={styles.stepCard}>
                      <div className={styles.stepCardInner}>
                        <span className={styles.stepIcon}>{step.icon}</span>
                        <div className={styles.stepContent}>
                          <h4 className={styles.stepTitle}>{step.title}</h4>
                          <p className={styles.stepDesc}>{step.description}</p>
                        </div>
                      </div>
                      <button className={styles.stepArrow} aria-label={`Dettagli ${step.title}`}>
                        ↗
                      </button>
                    </div>
                  </BorderGlow>
                </div>
              ))}
            </div>
            <div className={styles.processVisual} aria-hidden="true">
              <span className={styles.visualGlow} />
              <Image
                src={processImg}
                alt=""
                className={styles.processImage}
                sizes="(max-width: 860px) 280px, 520px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
