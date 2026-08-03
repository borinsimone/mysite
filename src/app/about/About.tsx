import React from 'react';
import styles from './about.module.scss';

const stats = [
  { value: '6+', label: 'Anni di esperienza' },
  { value: '80+', label: 'Progetti completati' },
  { value: '40+', label: 'Clienti soddisfatti' },
  { value: '100%', label: 'Focus sui risultati' },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles['section-container']}>
        <div className={styles.inner}>
          {/* Left column */}
          <div className={styles.content}>
            <p className={styles.kicker}>Chi sono</p>

            <h2 className={styles.title}>
              Design pulito.
              <br />
              Codice solido.
              <br />
              <span>Risultati concreti.</span>
            </h2>

            <p className={styles.lead}>
              Sono Simone Borin, web designer e developer freelance. Creo siti web che unissono
              estetica, usabilità e performance per trasformare idee in esperienze digitali
              efficaci.
            </p>
          </div>

          {/* Right column – photo card */}
          <div className={styles.photoCard}>
            <div className={styles.avatar}>SB</div>
            {/* Replace div below with: <img src="/photo.jpg" alt="Simone Borin" className={styles.photo} /> */}
            <div className={styles.photoPlaceholder} />
            <div className={styles.focusBar}>
              <span className={styles.focusLabel}>Focus</span>
              <p>Qualità, comunicazione, attenzione ai dettagli.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
