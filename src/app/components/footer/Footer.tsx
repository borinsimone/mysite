import FadeIn from '../scroll/FadeIn';
import ArrowIcon from '../arrow-icon/ArrowIcon';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <FadeIn className={`site-width ${styles.footerMain}`}>
        <a className={styles.footerBrand} href="#home" aria-label="Simone Borin, torna all’inizio">
          <span className="monogram">SB</span>
          <span>
            Simone Borin<small>Web designer & developer</small>
          </span>
        </a>
        <nav aria-label="Navigazione footer">
          <a href="#portfolio">Progetti</a>
          <a href="#method">Metodo</a>
          <a href="#services">Servizi</a>
          <a href="#about">Chi sono</a>
          <a href="#contact">Contatti</a>
        </nav>
        <div className={styles.footerSocials}>
          <a href="https://github.com/simoneborin" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowIcon direction="up-right" />
          </a>
          <a href="https://linkedin.com/in/simoneborin" target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowIcon direction="up-right" />
          </a>
          <a href="#home" aria-label="Torna all’inizio">
            Torna su <ArrowIcon direction="up" />
          </a>
        </div>
      </FadeIn>
    </footer>
  );
}
