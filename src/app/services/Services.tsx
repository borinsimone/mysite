'use client';
import React from 'react';
import styles from './services.module.scss';
import MagicBento from '../components/bento/MagicBento';
const services = [
  {
    label: 'Build',
    title: 'Web Development',
    description:
      'Siti vetrina, landing page e web app performanti. Codice pulito, SEO-ready e ottimizzato per la conversione.',
    color: '#120f17',
  },
  {
    label: 'Automate',
    title: 'AI & Automazioni',
    description:
      'Integro modelli AI e automazioni su misura per eliminare attività ripetitive e far scalare il tuo business.',
    color: '#130f1b',
  },
  {
    label: 'Growth',
    title: 'SEO & Traffico',
    description:
      'Strategia SEO tecnica e on-page per portare traffico qualificato e migliorare il posizionamento organico.',
    color: '#121019',
  },
  {
    label: 'Design',
    title: 'UI/UX Design',
    description:
      "Interfacce intuitive progettate attorno all'utente. Dal wireframe al prodotto finito, con un occhio al dettaglio.",
    color: '#150f17',
  },
  {
    label: 'Insights',
    title: 'Dashboard',
    description:
      'Dashboard interattive per monitorare KPI, dati e analytics in tempo reale. Chiare, veloci e personalizzate.',
    color: '#121018',
  },
  {
    label: 'Ops',
    title: 'Gestionali',
    description:
      'Applicativi custom per gestire clienti, ordini, prodotti e processi interni. Scalabili e su misura.',
    color: '#10121a',
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div
        className={styles.header}
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '0ms' }}
      >
        <p className={styles.kicker}>What I do</p>
        <h2>Soluzioni digitali per ogni&nbsp;esigenza</h2>
      </div>

      <div
        className={styles.bentoWrap}
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '90ms' }}
      >
        <MagicBento
          items={services}
          layout="uniform"
          textAutoHide={false}
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          enableMagnetism
          clickEffect
          glowColor="255, 45, 85"
          spotlightRadius={280}
          particleCount={10}
        />
      </div>

      <div
        className={styles.cta}
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '170ms' }}
      >
        <p>Hai un progetto in mente o vuoi sapere come posso aiutarti?</p>
        <a href="mailto:hello@simone.dev">Parliamone</a>
      </div>
    </section>
  );
}

export default Services;
