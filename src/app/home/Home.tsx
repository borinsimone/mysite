'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './home.module.scss';
import SpecularButton from '../components/specular-button/SpecularButton';
import Lightfall from '../components/lightfall/Lightfall';
import GlassSurface from '../components/glass-surface/GlassSurface';
import Antigravity from '../components/antigravitybg/Antigravity';
import CardSwap, { Card } from '../components/card-swap/CardSwap';
import Galaxy from '../components/galaxybg/Galaxy';
import BorderGlow from '../components/borderGlow/BorderGlow';
import me from './me.png';
const SERVICE_TAGS = [
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
    description: 'Interfacce moderne e mantenibili, costruite con attenzione a UX e scalabilita.',
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
    description: 'Fondamenta tecniche e contenutistiche per migliorare la visibilita organica.',
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
    title: 'Movimenti che guidano l attenzione',
    description: 'Micro-animazioni e transizioni che guidano l attenzione senza distrarre.',
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
  const [selectedCard, setSelectedCard] = useState<(typeof SERVICE_TAGS)[0] | null>(null);

  const scrollToContact = () => {
    const target = document.getElementById('contact');
    const scrollContainer = document.getElementById('main-scroll-container');

    if (!target) return;

    if (window.innerWidth <= 860 || !scrollContainer) {
      const topOffset = 88;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(targetTop - topOffset, 0),
        behavior: 'smooth',
      });
      return;
    }

    const topOffset = 96;

    scrollContainer.scrollTo({
      top: Math.max(target.offsetTop - topOffset, 0),
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.home} id="home">
      <div className={styles.lightfallBg}>
        {/* <Lightfall
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
      /> */}
        <Antigravity
          count={900}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.3}
          lerpSpeed={0.05}
          color="#EF4444"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="tetrahedron"
          fieldStrength={10}
        />
        {/* <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.1}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={1}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        /> */}
      </div>

      <Image src={me} alt="Simone Borin" className={styles.meImage} />
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
      <div className={styles.servicesCardsSwap}>
        <CardSwap
          width="min(86vw, 460px)"
          height="clamp(200px, 40vw, 340px)"
          cardDistance={44}
          verticalDistance={48}
          delay={3200}
          pauseOnHover={false}
          onCardClick={(idx) => setSelectedCard(SERVICE_TAGS[idx])}
        >
          {SERVICE_TAGS.map((item, index) => (
            <Card key={item.label} customClass={styles.serviceSwapCard}>
              <div className={styles.serviceSwapCardTop}>
                <span className={styles.serviceSwapEyebrow}>{item.eyebrow}</span>
                {/* <div className={styles.serviceSwapDots} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  </div> */}
              </div>

              <div className={styles.serviceSwapBody}>
                <div className={styles.serviceSwapMeta}>
                  <span className={styles.serviceSwapIndex}>0{index + 1}</span>
                  <span className={styles.serviceSwapLabel}>{item.label}</span>
                </div>
                <h3 className={styles.serviceSwapTitle}>{item.title}</h3>
                <p className={styles.serviceSwapDescription}>{item.description}</p>
              </div>

              <div className={styles.serviceSwapBottom}>
                <div className={styles.serviceSwapChips}>
                  {item.chips.map((chip) => (
                    <span key={chip} className={styles.serviceSwapChip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <span className={styles.serviceSwapArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </Card>
          ))}
        </CardSwap>

        {/* <CardSwap
          width="min(92vw, 520px)"
          height={220}
          cardDistance={22}
          verticalDistance={16}
          delay={3200}
          pauseOnHover
          skewAmount={2}
          easing="elastic"
        >
          {SERVICE_TAGS.map((item) => (
            <article key={item.label} className={styles.serviceCard}>
              <div className={styles.serviceCardHead}>
                <span className={styles.serviceCardIcon}>{item.icon}</span>
                <h3 className={styles.serviceCardTitle}>{item.label}</h3>
              </div>
              <p className={styles.serviceCardDescription}>{item.description}</p>
            </article>
          ))}
        </CardSwap> */}
      </div>
      {selectedCard && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCard(null)}>
          <BorderGlow
            edgeSensitivity={30}
            glowColor="255 45 85"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={400}
            glowIntensity={10}
            coneSpread={25}
            animated={false}
            colors={['#ff2d55', '#ff6b8a', '#ff0033']}
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.modalClose}
                onClick={() => setSelectedCard(null)}
                aria-label="Chiudi"
              >
                ×
              </button>
              <span className={styles.modalEyebrow}>{selectedCard.eyebrow}</span>
              <h2 className={styles.modalTitle}>{selectedCard.title}</h2>
              <p className={styles.modalDescription}>{selectedCard.modalDescription}</p>
              <div className={styles.modalChips}>
                {selectedCard.chips.map((chip) => (
                  <span key={chip} className={styles.serviceSwapChip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>
        </div>
      )}
      <div className={styles.cardsHint} aria-hidden="true">
        <span className={styles.cardsHintDot} />
        Clicca sulle card per capire che funziona un sito
      </div>
    </div>
  );
}

export default Home;
