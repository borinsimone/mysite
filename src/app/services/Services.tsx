'use client';
import React from 'react';
import styles from './services.module.scss';
import BorderGlow from '../components/borderGlow/BorderGlow';
function CodeIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='16 18 22 12 16 6' />
      <polyline points='8 6 2 12 8 18' />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M9.5 2a2.5 2.5 0 0 1 5 0v1a2.5 2.5 0 0 1 2.45 2H18a3 3 0 0 1 3 3v.5a2.5 2.5 0 0 1 0 5V14a3 3 0 0 1-3 3h-1.05A2.5 2.5 0 0 1 14.5 19v1a2.5 2.5 0 0 1-5 0v-1A2.5 2.5 0 0 1 7.05 17H6a3 3 0 0 1-3-3v-.5a2.5 2.5 0 0 1 0-5V8a3 3 0 0 1 3-3h1.05A2.5 2.5 0 0 1 9.5 3V2Z' />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='23 6 13.5 15.5 8.5 10.5 1 18' />
      <polyline points='17 6 23 6 23 12' />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 20h9' />
      <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect
        x='3'
        y='3'
        width='7'
        height='7'
        rx='1'
      />
      <rect
        x='14'
        y='3'
        width='7'
        height='7'
        rx='1'
      />
      <rect
        x='3'
        y='14'
        width='7'
        height='7'
        rx='1'
      />
      <path d='M14 17h7M17.5 14v7' />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <ellipse
        cx='12'
        cy='5'
        rx='9'
        ry='3'
      />
      <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' />
      <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' />
    </svg>
  );
}

const services = [
  {
    icon: <CodeIcon />,
    title: 'Web Development',
    description:
      'Siti vetrina, landing page e web app performanti. Codice pulito, SEO-ready e ottimizzato per la conversione.',
    tags: ['Next.js', 'React', 'TypeScript'],
    accent: 'blue',
    glowColor: '220 100 65',
  },
  {
    icon: <BrainIcon />,
    title: 'AI & Automazioni',
    description:
      'Integro modelli AI e automazioni su misura per eliminare attività ripetitive e far scalare il tuo business.',
    tags: ['OpenAI', 'n8n', 'Zapier', 'API'],
    accent: 'purple',
    glowColor: '280 88 68',
  },
  {
    icon: <TrendingIcon />,
    title: 'SEO & Traffico',
    description:
      'Strategia SEO tecnica e on-page per portare traffico qualificato e migliorare il posizionamento organico.',
    tags: ['Core Web Vitals', 'Schema', 'Content'],
    accent: 'green',
    glowColor: '160 74 66',
  },
  {
    icon: <PenIcon />,
    title: 'UI/UX Design',
    description:
      "Interfacce intuitive progettate attorno all'utente. Dal wireframe al prodotto finito, con un occhio al dettaglio.",
    tags: ['Figma', 'Prototyping', 'Design System'],
    accent: 'red',
    glowColor: '348 100 58',
  },
  {
    icon: <GridIcon />,
    title: 'Dashboard',
    description:
      'Dashboard interattive per monitorare KPI, dati e analytics in tempo reale. Chiare, veloci e personalizzate.',
    tags: ['Chart.js', 'D3', 'Recharts'],
    accent: 'orange',
    glowColor: '24 100 58',
  },
  {
    icon: <DatabaseIcon />,
    title: 'Gestionali',
    description:
      'Applicativi custom per gestire clienti, ordini, prodotti e processi interni. Scalabili e su misura.',
    tags: ['Full-stack', 'Auth', 'CRUD', 'DB'],
    accent: 'teal',
    glowColor: '188 76 49',
  },
];

function Services() {
  return (
    <section
      id='services'
      className={styles.services}
    >
      <div className={styles.header}>
        <p className={styles.kicker}>What I do</p>
        <h2>Soluzioni digitali per ogni&nbsp;esigenza</h2>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <BorderGlow
            key={s.title}
            className={`${styles.card} ${styles[`accent-${s.accent}`]}`}
            glowColor={s.glowColor}
            backgroundColor='#0a0d14'
            borderRadius={18}
            glowIntensity={6.5}
            glowRadius={80}
            coneSpread={85}
            edgeSensitivity={20}
          >
            <div className={styles.iconWrap}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <ul className={styles.tags}>
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </BorderGlow>
        ))}
      </div>

      <div className={styles.cta}>
        <p>Hai un progetto in mente o vuoi sapere come posso aiutarti?</p>
        <a href='mailto:hello@simone.dev'>Parliamone</a>
      </div>
    </section>
  );
}

export default Services;
