import styles from './page.module.css';
import Sidebar from './components/sidebar/Sidebar';
import ScrollReveal from './components/scroll/ScrollReveal';
import IntroSplash from './components/splash/IntroSplash';
import HomePage from './home/Home';
import About from './about/About';
import Services from './services/Services';
import Contact from './contact/Contact';
import Project from './project/project';
import Navbar from './components/navbar/Navbar';
export default function Home() {
  return (
    <>
      {/* <IntroSplash /> */}
      <div className={styles.page}>
        {/* <Sidebar /> */}
        <Navbar />
        <div id="main-scroll-container" className={styles['section-container']}>
          <ScrollReveal />
          <HomePage />
          <About />
          <Services />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}
