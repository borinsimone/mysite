'use client';
import React from 'react';
import styles from './project.module.scss';
import DriftWall from '../components/driftwall/DriftWall';

function Project() {
  const items = [
    {
      image: 'https://picsum.photos/id/1015/600/400',
      title: 'Peaks',
      href: 'https://example.com/one',
    },
    {
      image: 'https://picsum.photos/id/1025/600/400',
      title: 'Pup',
      href: 'https://example.com/two',
    },
    {
      image: 'https://picsum.photos/id/1039/600/400',
      title: 'Falls',
      href: 'https://example.com/three',
    },
  ];
  return (
    <section id="portfolio" className={styles.project}>
      <div className={styles['section-container']}>
        <header className={styles.header}>
          <p className={styles.kicker}>Progetti</p>
          <h2>
            Idee trasformate in
            <br />
            esperienze digitali<span className={styles.accent}>.</span>
          </h2>
          <p className={styles.sub}>
            Una selezione di siti, interfacce e prodotti digitali progettati per unire identità,
            usabilità e risultati concreti.
          </p>
        </header>

        <div className={styles.driftWallWrap}>
          <DriftWall
            items={items}
            columns={3}
            tileWidth={360}
            tileHeight={230}
            gap={24}
            tilt={8}
            turn={-7}
            perspective={1500}
            depth={55}
            speed={16}
            direction="up"
            variance={0.18}
            parallax={0.28}
            lift={44}
            fade={0.82}
            dim={0.78}
            overlayColor="#05070d"
            radius={18}
            roll={0}
            pauseOnHover
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
