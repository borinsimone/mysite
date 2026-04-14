import styles from './page.module.css';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './home/Home';
import About from './about/About';
import Services from './services/Services';
export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles['section-container']}>
        <HomePage />
        <About />
        <Services />
      </div>
    </div>
  );
}
