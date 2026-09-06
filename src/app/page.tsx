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
      <main id="main-content">
        <Home />
        <Process />
        <Services />
        {/* <Expertise /> */}
        <Project />
        <About />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="site-width footer-main">
          <a className="footer-brand" href="#home" aria-label="Simone Borin, torna all’inizio">
            <span className="monogram">SB</span>
            <span>
              Simone Borin<small>Web designer & developer</small>
            </span>
          </a>
          <nav aria-label="Navigazione footer">
            <a href="#about">Chi sono</a>
            <a href="#services">Servizi</a>
            <a href="#method">Metodo</a>
            <a href="#portfolio">Progetti</a>
            <a href="#contact">Contatti</a>
          </nav>
          <div className="footer-socials">
            <a href="https://github.com/simoneborin" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/simoneborin" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a className="circle-link" href="#home" aria-label="Torna all’inizio">
              ↑
            </a>
          </div>
        </div>
        <div className="site-width footer-bottom">
          <p>© {new Date().getFullYear()} Simone Borin. Tutti i diritti riservati.</p>
          <p>Siti migliori per idee più grandi.</p>
        </div>
      </footer>
    </div>
  );
}
