import React from 'react';

export const expertise = [
  {
    eyebrow: 'UI / UX DESIGN',
    label: 'Web Design',
    title: 'Esperienze digitali su misura',
    description: 'Struttura e gerarchia visiva chiare, orientate agli obiettivi del brand.',
    modalDescription: `Un sito efficace non deve soltanto essere bello: deve aiutare le persone a capire subito chi sei, cosa offri e quale azione compiere. Una struttura chiara, una gerarchia visiva precisa e un'interfaccia coerente rendono la navigazione più semplice e naturale. Il risultato è un'esperienza progettata intorno ai tuoi obiettivi e alle reali esigenze dei tuoi utenti.`,
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
    description: 'Interfacce moderne e mantenibili, costruite con attenzione a UX e scalabilità.',
    modalDescription: `Un buon design ha bisogno di una base tecnica solida. Sviluppo interfacce moderne, responsive e affidabili, pensate per funzionare correttamente su ogni dispositivo. Un codice ordinato e mantenibile rende il sito più stabile, facilita gli aggiornamenti futuri e permette al progetto di crescere senza dover essere ricostruito da zero.`,
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
    modalDescription: `La velocità influenza direttamente l'esperienza dell'utente. Un sito lento può far perdere attenzione, credibilità e potenziali clienti ancora prima che abbiano visto i contenuti. Ottimizzo immagini, risorse e rendering per ridurre i tempi di caricamento e garantire una navigazione fluida, reattiva e piacevole anche da smartphone.`,
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
    description: 'Fondamenta tecniche e contenutistiche per migliorare la visibilità organica.',
    modalDescription: `Un sito ben realizzato deve poter essere compreso anche dai motori di ricerca. Una struttura corretta, contenuti organizzati, metadata e dati strutturati aiutano Google a interpretare le pagine e a mostrarle alle persone giuste. La SEO tecnica di base non garantisce automaticamente le prime posizioni, ma crea fondamenta solide per migliorare la visibilità nel tempo.`,
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
    title: 'Movimenti che guidano l’attenzione',
    description: 'Micro-animazioni e transizioni che guidano l’attenzione senza distrarre.',
    modalDescription: `Le animazioni non devono essere semplici decorazioni. Quando sono progettate correttamente, aiutano a evidenziare le informazioni importanti, rendono più chiare le interazioni e accompagnano l'utente durante la navigazione. Micro-interazioni e transizioni coerenti danno personalità al sito senza rallentarlo o distrarre dai contenuti.`,
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

export const serviceCards = [
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

export const steps = [
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
