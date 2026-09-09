import Nfc from './nfc/Nfc';
import SiteGlowCursor from './components/glow-cursor/SiteGlowCursor';
import FadeIn from './components/scroll/FadeIn';
import ArrowIcon from './components/arrow-icon/ArrowIcon';
import Navbar from './components/navbar/Navbar';
import Home from './home/Home';
import Services, { Process } from './services/Services';
import About from './about/About';
import Contact from './contact/Contact';
import Project from './project/project';
import './site-design.css';

export default function Page() {
  return (
    <div className="portfolio-site">
      <a className="skip-link" href="#main-content">
        Vai al contenuto
      </a>
      <Navbar />
      <SiteGlowCursor />
      <main id="main-content">
        <Home />
        <Project />
        <Process />
        <Services />
        <Nfc />
        {/* <Expertise /> */}
        <About />
        <Contact />
      </main>
      <footer className="site-footer">
        <FadeIn className="site-width footer-main">
          <a className="footer-brand" href="#home" aria-label="Simone Borin, torna all’inizio">
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
          <div className="footer-socials">
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
        {/* <div className="site-width footer-bottom">
          <p>© {new Date().getFullYear()} Simone Borin. Tutti i diritti riservati.</p>
          <p>Siti migliori per idee più grandi.</p>
        </div> */}
      </footer>
    </div>
  );
}
