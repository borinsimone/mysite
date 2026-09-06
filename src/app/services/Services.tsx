import BorderGlow from '../components/borderGlow/BorderGlow';
import { serviceCards, steps } from '../site-content';

export function Process() {
  return (
    <section className="site-section section-line" id="method" aria-labelledby="method-title">
      <div className="site-width process-layout">
        <div>
          <p className="eyebrow">Come lavoro</p>
          <h2 id="method-title">
            Un processo chiaro,
            <br />
            passo dopo passo<span>.</span>
          </h2>
          <p className="section-intro process-intro">
            Un metodo collaudato per trasformare le tue idee in un sito web efficace.
          </p>
          <ol className="process-steps">
            {steps.map((step) => (
              <li key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="process-art" aria-hidden="true">
          <div className="process-grid" />
          <div className="process-stack">
            {['IDEA', 'STRATEGY', 'DESIGN', 'DEVELOP', 'LAUNCH'].map((label, index) => (
              <div className="glass-step" key={label}>
                <span>0{index + 1}</span>
                <strong>{label}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
          <span className="art-caption">
            FROM
            <br />
            IDEA
            <br />
            TO
            <br />
            IMPACT
            <i />
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section className="site-section section-line" id="services" aria-labelledby="services-title">
      <div className="site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Servizi</p>
            <h2 id="services-title">
              Soluzioni digitali
              <br />
              <span>su misura per te.</span>
            </h2>
          </div>
          <div>
            <p className="section-intro">
              Ogni progetto è pensato per rispondere a obiettivi reali, con un approccio strategico
              e orientato ai risultati.
            </p>
            <a className="pill small" href="#contact">
              Parliamo del tuo progetto <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="services-grid">
          {serviceCards.map((card, index) => (
            <BorderGlow
              key={card.title}
              className="service-glow"
              glowColor="346 100 75"
              backgroundColor="#080b0e"
              borderRadius={11}
              glowRadius={30}
              colors={['#ff2858', '#f472b6', '#ff436e']}
              fillOpacity={0}
            >
              <a href="#contact" className="service-card">
                <div className="service-top">
                  <span className="service-icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <span className="card-number">0{index + 1}</span>
                </div>
                <p className="card-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="circle-link" aria-hidden="true">
                  ↗
                </span>
              </a>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
