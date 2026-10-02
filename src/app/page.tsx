import Nfc from './nfc/Nfc';
import SiteGlowCursor from './components/glow-cursor/SiteGlowCursor';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './home/Home';
import Services, { Process } from './services/Services';
import About from './about/About';
import Contact from './contact/Contact';
import Project from './project/project';
import './site-base.scss';

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
        <Nfc />
        <Process />
        <Services />

        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
