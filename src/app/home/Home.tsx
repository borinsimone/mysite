import HeroBackground from './HeroBackground';
import { expertise } from '../site-content';

export default function Home() {
  return (
    <section className="hero section-line" id="home" aria-labelledby="hero-title">
      <HeroBackground />
      <div className="site-width hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Siti web su misura, pensati per crescere</p>
          <h1 id="hero-title">
            Il tuo valore.
            <br />
            Un sito che fa
            <br />
            <span>la differenza.</span>
          </h1>
          <p className="lead">
            Progetto interfacce veloci e curate che comunicano con chiarezza e mettono in risalto il
            valore di ciò che fai.
          </p>
          <div className="button-row">
            <a className="pill primary" href="#contact">
              Inizia il tuo progetto <span aria-hidden="true">→</span>
            </a>
            <a className="pill" href="#method">
              Scopri di più <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-values">
            <div>
              <strong>Design</strong>
              <span>Chiaro e su misura</span>
            </div>
            <div>
              <strong>Codice</strong>
              <span>Solido e performante</span>
            </div>
            <div>
              <strong>Obiettivi</strong>
              <span>Al centro del progetto</span>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="art-caption">
            IDEAS
            <br />
            DESIGN
            <br />
            DEVELOP
            <br />
            GROW
            <i />
          </span>
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
