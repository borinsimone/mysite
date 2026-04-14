import React from 'react';
import styles from './about.module.scss';

function About() {
  return (
    <section
      id='about'
      className={styles.about}
    >
      <div className={styles.header}>
        <p className={styles.kicker}>About me</p>
        <h2>
          Costruisco esperienze digitali affidabili e orientate ai risultati
        </h2>
      </div>

      <div className={styles.grid}>
        <article className={styles.story}>
          <p>
            Sono Simone, frontend developer freelance. Mi occupo di progettare
            interfacce moderne con attenzione a performance, usabilita e
            manutenibilita del codice.
          </p>
          <p>
            Lavoro con clienti che vogliono una presenza online professionale:
            sito vetrina, landing page o dashboard, sempre con un approccio
            pragmatico e orientato al business.
          </p>
          <p>
            Ogni progetto parte da obiettivi chiari e si chiude con consegne
            pulite, documentate e pronte per evolvere.
          </p>
        </article>

        <aside className={styles.metrics}>
          <div className={styles.metricCard}>
            <strong>40+</strong>
            <span>Progetti realizzati</span>
          </div>
          <div className={styles.metricCard}>
            <strong>5+</strong>
            <span>Anni di esperienza</span>
          </div>
          <div className={styles.metricCard}>
            <strong>95%</strong>
            <span>Clienti soddisfatti</span>
          </div>
        </aside>
      </div>

      <div className={styles.footer}>
        <div className={styles.stack}>
          <h3>Stack preferito</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>SCSS</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className={styles.ctaBox}>
          <p>Hai un progetto in mente? Partiamo da una call di 20 minuti.</p>
          <a href='mailto:hello@simone.dev'>Prenota una call</a>
        </div>
      </div>
    </section>
  );
}

export default About;
