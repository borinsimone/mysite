'use client';
import React from 'react';
import Masonry from '../components/masonry/Masonry';
import styles from './project.module.scss';

const filters = ['Tutti', 'Web App', 'AI', 'Dashboard', 'SEO', 'UI/UX'];

const projects = [
  {
    id: 'p-1',
    name: 'FlowBank Landing Revamp',
    category: 'SEO + Web Development',
    summary: 'Redesign completo della landing con focus su performance e lead generation.',
    result: '+38% conversion rate',
    stack: ['Next.js', 'TypeScript', 'GA4'],
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    url: '#flowbank-case',
    height: 520,
  },
  {
    id: 'p-2',
    name: 'Studio Medico CRM Light',
    category: 'Gestionale',
    summary: 'Mini gestionale per appuntamenti, storico pazienti e promemoria automatici.',
    result: '-52% tempo operativo',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    url: '#crm-medico-case',
    height: 420,
  },
  {
    id: 'p-3',
    name: 'E-commerce AI Assistant',
    category: 'AI / Automazioni',
    summary: 'Assistente AI per supporto pre-vendita con routing ticket e FAQ dinamiche.',
    result: '+27% ordine medio',
    stack: ['OpenAI', 'n8n', 'Webhook'],
    img: 'https://images.unsplash.com/photo-1551281044-8b47c4f89f3a?auto=format&fit=crop&w=1200&q=80',
    url: '#assistant-case',
    height: 560,
  },
  {
    id: 'p-4',
    name: 'LogiTrack Dashboard',
    category: 'Dashboard',
    summary: 'Dashboard KPI in tempo reale per tracking spedizioni e SLA del team operativo.',
    result: '+41% visibilita processi',
    stack: ['Recharts', 'Next.js', 'Supabase'],
    img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    url: '#logitrack-case',
    height: 460,
  },
  {
    id: 'p-5',
    name: 'SaaS Onboarding UX',
    category: 'UI/UX',
    summary: 'Refactor dei flussi onboarding con prototipi testati e design system modulare.',
    result: '-34% drop-off',
    stack: ['Figma', 'Design Tokens', 'A/B Test'],
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    url: '#saas-ux-case',
    height: 500,
  },
  {
    id: 'p-6',
    name: 'Hotel Booking Funnel',
    category: 'SEO + CRO',
    summary: 'Ottimizzazione tecnica e contenuti cluster per aumentare traffico organico.',
    result: '+112% traffico organico',
    stack: ['Schema.org', 'Core Web Vitals', 'Search Console'],
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    url: '#hotel-case',
    height: 430,
  },
  {
    id: 'p-7',
    name: 'Agency Ops Board',
    category: 'Gestionale + Dashboard',
    summary: 'Pannello interno per task, scadenze e marginalita commesse in un unico flusso.',
    result: '+29% produttivita team',
    stack: ['React', 'Prisma', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    url: '#agency-ops-case',
    height: 470,
  },
  {
    id: 'p-8',
    name: 'Fintech Insights Hub',
    category: 'Web App',
    summary: 'Portale analitico multi-tenant con autenticazione e viste personalizzate.',
    result: 'NPS da 7.1 a 8.6',
    stack: ['Next.js', 'Auth', 'Charts'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    url: '#fintech-hub-case',
    height: 540,
  },
];

const items = projects.map(({ id, img, url, height }) => ({
  id,
  img,
  url,
  height,
}));

function Project() {
  return (
    <section id="portfolio" className={styles.project}>
      <div
        className={styles.header}
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '0ms' }}
      >
        <p className={styles.kicker}>Projects</p>
        <h2>Una selezione di lavori reali</h2>
        <p className={styles.sub}>
          Questa e una preview della sezione portfolio: layout pronto, animazioni attive e spazio
          perfetto per inserire i tuoi case study completi.
        </p>
      </div>

      <div
        className={styles.filters}
        aria-label="Filtri portfolio"
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '70ms' }}
      >
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`${styles.filter} ${index === 0 ? styles.active : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div
        className={styles.masonryWrap}
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '130ms' }}
      >
        <Masonry
          items={items}
          animateFrom="bottom"
          duration={0.8}
          stagger={0.05}
          hoverScale={0.97}
          scaleOnHover
        />
      </div>

      <div
        className={styles.caseStudies}
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '200ms' }}
      >
        {projects.slice(0, 4).map((project) => (
          <article key={project.id} className={styles.caseCard}>
            <p className={styles.caseCategory}>{project.category}</p>
            <h3>{project.name}</h3>
            <p className={styles.caseSummary}>{project.summary}</p>
            <p className={styles.caseResult}>{project.result}</p>
            <ul className={styles.caseStack}>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div
        className={styles.footer}
        data-reveal="true"
        style={{ ['--reveal-delay' as string]: '270ms' }}
      >
        <p>Vuoi vedere il case study completo di un progetto simile al tuo?</p>
        <a href="mailto:hello@simone.dev?subject=Portfolio%20request">
          Richiedi portfolio completo
        </a>
      </div>
    </section>
  );
}

export default Project;
