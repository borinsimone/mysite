import React from 'react';
import styles from './about.module.scss';
import profilePhoto from './image.png';

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

          <div className={styles.photoWrap}>
            <img src={profilePhoto.src} alt="Simone Borin" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
