import ArrowIcon from '../components/arrow-icon/ArrowIcon';
import HeroBackground from './HeroBackground';
import { expertise } from '../site-content';
import * as motion from 'motion/react-client';

function reveal(delay: number) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { delay } },
    viewport: { amount: 0.1 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function Home() {
  return (
    <section className="hero section-line" id="home" aria-labelledby="hero-title">
      <motion.div
        className="fade-in"
        style={{ position: 'absolute', inset: 0, zIndex: -1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroBackground />
      </motion.div>
      <div className="site-width hero-layout">
        <div className="hero-copy">
          <motion.p className="eyebrow fade-in" {...reveal(0.08)}>
            Siti web su misura, pensati per crescere
          </motion.p>
          <motion.h1 id="hero-title" className="fade-in" {...reveal(0.16)}>
            Il tuo valore.
            <br />
            Un sito lo rende
            <br />
            <span>evidente.</span>
          </motion.h1>
          <motion.p className="lead fade-in" {...reveal(0.24)}>
            Progetto interfacce veloci e curate che comunicano con chiarezza e mettono in risalto il
            valore di ciò che fai.
          </motion.p>
          <div className="button-row">
            <motion.a className="pill primary fade-in" href="#contact" {...reveal(0.32)}>
              Inizia il tuo progetto <ArrowIcon />
            </motion.a>
            <motion.a className="pill fade-in" href="#method" {...reveal(0.4)}>
              Scopri di più <ArrowIcon direction="down" />
            </motion.a>
          </div>
          <div className="hero-values">
            <motion.div className="fade-in" {...reveal(0.48)}>
              <strong>Design</strong>
              <span>Chiaro e su misura</span>
            </motion.div>
            <motion.div className="fade-in" {...reveal(0.56)}>
              <strong>Codice</strong>
              <span>Solido e performante</span>
            </motion.div>
            <motion.div className="fade-in" {...reveal(0.64)}>
              <strong>Obiettivi</strong>
              <span>Al centro del progetto</span>
            </motion.div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <motion.span className="art-caption fade-in" {...reveal(0.35)}>
            IDEAS
            <br />
            DESIGN
            <br />
            DEVELOP
            <br />
            GROW
            <i />
          </motion.span>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="site-section section-line" id="expertise" aria-labelledby="expertise-title">
      <div className="site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Design + sviluppo</p>
            <h2 id="expertise-title">
              Ogni dettaglio conta.
              <br />
              <span>Anche quelli invisibili.</span>
            </h2>
          </div>
          <p className="section-intro">
            Dall’interfaccia al codice, ogni elemento contribuisce a un sito affidabile, elegante e
            facile da usare. Esplora le competenze.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <details className="expertise-card" key={item.label}>
              <summary>
                <span className="service-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.label}</h3>
                <p>{item.title}</p>
                <span className="detail-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="expertise-detail">
                <p>{item.modalDescription}</p>
                <div className="chips">
                  {item.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
