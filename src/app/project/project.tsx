import styles from './project.module.scss';
import BorderGlow from '../components/borderGlow/BorderGlow';
const projects = [
  {
    title: 'Peroò Artist',
    category: 'Portfolio artistico',
    description: 'Il portfolio di Chiara, pittrice e artista del flusso.',
    href: 'https://borinsimone.github.io/portfolio-perooartist/',
    signature: 'Peroò',
    subtitle: 'ARTIST / PORTFOLIO',
  },
];

export default function Project() {
  return (
    <section className="site-section section-line" id="portfolio" aria-labelledby="projects-title">
      <div className="site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Progetti</p>
            <h2 id="projects-title">
              Idee che diventano
              <br />
              <span>risultati.</span>
            </h2>
          </div>
          <div>
            <p className="section-intro">
              Progetti che raccontano il mio approccio: design curato, sviluppo solido e attenzione
              ai dettagli.
            </p>
            <a className="pill small" href="#project-list">
              Esplora i progetti <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className={styles.grid} id="project-list">
          {projects.map((project, index) => (
            <BorderGlow
              key={project.href}
              className={styles.glowCard}
              edgeSensitivity={30}

              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              glowColor="346 100 75"
              backgroundColor="#080b0e"
              borderRadius={14}

              colors={['#ff2858', '#f472b6', '#ff436e']}
              fillOpacity={0}
            >
              <a
                className={styles.card}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: visita il sito (si apre in una nuova scheda)`}
              >
                <div className={styles.preview} aria-hidden="true">
                  <span className={styles.index}>
                    PROGETTO / {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.signature}>
                    {project.signature}
                    <span>.</span>
                  </span>
                  <span className={styles.subtitle}>{project.subtitle}</span>
                  <span className={styles.live}>
                    <i />
                    ONLINE
                  </span>
                </div>
                <div className={styles.info}>
                  <div>
                    <p className={styles.category}>{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                  </div>
                  <span className="circle-link" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </a>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
