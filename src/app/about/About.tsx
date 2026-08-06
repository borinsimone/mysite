import React from 'react';
import Image from 'next/image';
import styles from './about.module.scss';
import profilePhoto from './aboutImgNobg.png';

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
              Sono Simone Borin, web designer e developer freelance. Creo siti web che uniscono
              estetica, usabilità e performance per trasformare idee in esperienze digitali
              efficaci.
            </p>

            {/* <dl className={styles.stats} aria-label="Esperienza professionale">
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl> */}
          </div>

          <div className={styles.photoWrap}>
            <span className={styles.photoAura} aria-hidden="true" />
            <span className={styles.photoOrbit} aria-hidden="true" />
            <Image
              src={profilePhoto}
              alt="Illustrazione del processo di web design e sviluppo"
              className={styles.photo}
              sizes="(max-width: 860px) 100vw, 52vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
