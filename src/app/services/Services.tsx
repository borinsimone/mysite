import FadeIn from '../components/scroll/FadeIn';
import styles from './services.module.scss';
import ArrowIcon from '../components/arrow-icon/ArrowIcon';
import BorderGlow from '../components/borderGlow/BorderGlow';
import { serviceCards, steps } from '../site-content';

export function Process() {
  return (
    <section className="site-section section-line" id="method" aria-labelledby="method-title">
      <div className={`site-width ${styles.processLayout}`}>
        <FadeIn>
          <p className="eyebrow">Come lavoro</p>
          <h2 id="method-title">
            Un processo chiaro,
            <br />
            passo dopo passo<span>.</span>
          </h2>
          <p className={`section-intro ${styles.processIntro}`}>
            Un metodo collaudato per trasformare le tue idee in un sito web efficace.
          </p>
          <ol className={styles.processSteps}>
            {steps.map((step) => (
              <li key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
        <FadeIn className={styles.processArt} aria-hidden="true">
          <div className={styles.processGrid} />
          <div className={styles.processStack}>
            {['IDEA', 'STRATEGY', 'DESIGN', 'DEVELOP', 'LAUNCH'].map((label, index) => (
              <div className={styles.glassStep} key={label}>
                <span>0{index + 1}</span>
                <strong>{label}</strong>
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
        </FadeIn>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section className="site-section section-line" id="services" aria-labelledby="services-title">
      <div className="site-width">
        <FadeIn className="section-heading">
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
              Parliamo del tuo progetto <ArrowIcon />
            </a>
          </div>
        </FadeIn>
        <div className={styles.servicesGrid}>
          {serviceCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.08} className="reveal-card">
              <BorderGlow
                className={styles.serviceGlow}
                glowColor="346 100 75"
                backgroundColor="#080b0e"
                borderRadius={11}
                glowRadius={30}
                colors={['#ff2858', '#f472b6', '#ff436e']}
                fillOpacity={0}
              >
                <a href="#contact" className={styles.serviceCard}>
                  <div className={styles.serviceTop}>
                    <span className="service-icon" aria-hidden="true">
                      {card.icon}
                    </span>
                    <span className={styles.cardNumber}>0{index + 1}</span>
                  </div>
                  <p className={styles.cardLabel}>{card.label}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="circle-link" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
              </BorderGlow>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
