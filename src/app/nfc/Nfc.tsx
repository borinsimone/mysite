import NfcExample from './NfcExample';
import reviewsImage from './images/reviews.svg';
import socialImage from './images/social.svg';
import menuImage from './images/menu.svg';
import contactImage from './images/contact.svg';
import { faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faBolt,
  faPen,
  faLink,
  faChartSimple,
  faUtensils,
  faAddressCard,
  faWifi,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons';
import FadeIn from '../components/scroll/FadeIn';
import ArrowIcon from '../components/arrow-icon/ArrowIcon';
import styles from './nfc.module.scss';

const features = [
  { title: 'Tap immediato', text: 'Basta avvicinare uno smartphone compatibile.', icon: faBolt },
  {
    title: 'Design su misura',
    text: 'Una grafica personalizzata per la tua attività.',
    icon: faPen,
  },
  {
    title: 'Tutto in un link',
    text: 'Menu, social, recensioni, contatti e molto altro.',
    icon: faLink,
  },
  {
    title: 'Analytics',
    text: 'Monitora le interazioni e aggiorna i tuoi contenuti.',
    icon: faChartSimple,
  },
];
const useCases = [
  {
    title: 'Recensioni Google',
    text: 'Fai crescere la tua reputazione con un semplice tap.',
    icon: faGoogle,
    image: reviewsImage,
    imageAlt:
      'Esempio illustrativo: uno smartphone avvicinato a una tessera NFC sul banco apre la pagina per lasciare una recensione.',
    service:
      'Una tessera personalizzata collegata alla pagina recensioni della tua attività su Google. Il cliente raggiunge il punto giusto senza cercare il nome del negozio.',
    scenario:
      'Un cliente ha appena concluso un acquisto. Alla cassa gli proponi di raccontare la sua esperienza: avvicina il telefono alla card e può scrivere una recensione autentica.',
    steps: [
      'Personalizziamo la tessera con la tua identità e il link della tua attività.',
      'Il cliente avvicina uno smartphone compatibile e apre il collegamento NFC.',
      'Si apre la pagina Google: il cliente sceglie liberamente se e cosa scrivere.',
    ],
  },
  {
    title: 'Social media',
    text: 'Porta i tuoi clienti sui tuoi profili social.',
    icon: faInstagram,
    image: socialImage,
    imageAlt:
      'Esempio illustrativo: una tessera NFC condivisa durante un evento apre i profili social su uno smartphone.',
    service:
      'Un accesso diretto al tuo profilo social oppure a una pagina che raccoglie tutti i tuoi canali. La card porta la tua presenza digitale anche negli incontri dal vivo.',
    scenario:
      'Durante un evento una persona si interessa al tuo lavoro. Le mostri la tessera: con un tap trova i tuoi canali, senza dover digitare o ricordare il tuo username.',
    steps: [
      'Scegliamo il profilo o la pagina di collegamenti da mostrare.',
      'La persona avvicina il telefono e apre il link proposto.',
      'Può esplorare i tuoi contenuti e scegliere di seguirti o contattarti.',
    ],
  },
  {
    title: 'Menu o listino',
    text: 'Mostra il tuo menu, listino o i tuoi servizi in un attimo.',
    icon: faUtensils,
    image: menuImage,
    imageAlt:
      'Esempio illustrativo: una tessera NFC al tavolo di un ristorante apre il menu digitale sul telefono.',
    service:
      'La tua tessera diventa un punto di accesso al menu, al listino o al catalogo dei servizi. Collegandola a una pagina gestibile, puoi aggiornare i contenuti mantenendo lo stesso link.',
    scenario:
      'Un ospite si siede al tavolo e avvicina lo smartphone alla card. Consulta il menu direttamente dal telefono. Lo stesso sistema può mostrare trattamenti e prezzi in un salone.',
    steps: [
      'Prepariamo o colleghiamo il tuo menu o listino digitale.',
      'Posizioni la tessera sul tavolo, al banco o alla reception.',
      'Il cliente apre il collegamento e consulta i contenuti aggiornati.',
    ],
  },
  {
    title: 'Biglietto da visita',
    text: 'Condividi i tuoi contatti e la tua attività.',
    icon: faAddressCard,
    image: contactImage,
    imageAlt:
      'Esempio illustrativo: una tessera NFC usata durante un incontro apre una scheda contatto sullo smartphone.',
    service:
      'Un biglietto da visita NFC che apre una pagina con nome, recapiti, sito e collegamenti professionali. Possiamo includere un contatto scaricabile da salvare in rubrica.',
    scenario:
      'Incontri un possibile cliente e vuoi lasciargli i tuoi riferimenti. Avvicina il telefono alla tua card, consulta la scheda e sceglie di salvare il contatto.',
    steps: [
      'Raccogliamo i tuoi recapiti e progettiamo tessera e pagina personale.',
      'Durante un incontro condividi la card con un semplice tap.',
      'La persona apre la scheda, visita il sito o salva il contatto quando previsto.',
    ],
  },
];

function Icon({ icon }: { icon: typeof faBolt }) {
  const [width, height, , , paths] = icon.icon;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {(Array.isArray(paths) ? paths : [paths]).map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

export default function Nfc() {
  return (
    <section
      id="nfc"
      className={`site-section section-line ${styles.section}`}
      aria-labelledby="nfc-title"
    >
      <div className="site-width">
        <div className={styles.layout}>
          <FadeIn className={styles.copy}>
            <p className="eyebrow">Connessioni, anche fuori dallo schermo</p>
            <h2 id="nfc-title">
              Un piccolo tap.
              <br />
              <span>Grandi connessioni.</span>
            </h2>
            <p className={styles.intro}>
              Tessere NFC personalizzate che collegano i tuoi clienti al tuo mondo digitale.
              Recensioni, social, menu, contatti e molto altro, con un semplice tap.
            </p>
            <div className={styles.actions}>
              <a className="pill primary" href="#nfc-examples">
                Scopri di più <ArrowIcon />
              </a>
              <a className={styles.textLink} href="#contact">
                Richiedi informazioni
              </a>
            </div>
            <div className={styles.features}>
              {features.map(({ title, text, icon }) => (
                <div key={title} className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <Icon icon={icon} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn className={styles.art} delay={0.12} aria-hidden="true">
            <div className={styles.orbit} />
            <span className={styles.artLabel}>
              Real ideas.
              <br />
              Real impact.
            </span>
            <div className={`${styles.card} ${styles.backCard}`}>
              <Icon icon={faQrcode} />
              <small>SCAN TO CONNECT</small>
            </div>
            <div className={`${styles.card} ${styles.middleCard}`}>
              <span>
                MORE
                <br />
                THAN A<br />
                CARD.
              </span>
            </div>
            <div className={`${styles.card} ${styles.frontCard}`}>
              <span className={styles.nfcSymbol}>
                <Icon icon={faWifi} />
              </span>
              <span className={styles.monogram}>
                SB<span>.</span>
              </span>
              <small>TAP TO CONNECT</small>
            </div>
            <div className={styles.pedestal} />
            <p className={styles.artCaption}>
              Physical meets digital<span>Stessa identità. Nuove possibilità.</span>
            </p>
          </FadeIn>
        </div>
        <div id="nfc-examples" className={styles.examples}>
          <FadeIn className={styles.examplesHeading}>
            <p className="eyebrow">Alcuni esempi di utilizzo</p>
            <span />
          </FadeIn>
          <div className={styles.examplesGrid}>
            {useCases.map((useCase, index) => (
              <FadeIn key={useCase.title} delay={index * 0.07} className={styles.exampleWrap}>
                <NfcExample details={useCase} className={styles.example}>
                  <span className={styles.exampleIcon}>
                    <Icon icon={useCase.icon} />
                  </span>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.text}</p>
                  <span className={styles.exampleArrow}>
                    <ArrowIcon />
                  </span>
                </NfcExample>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
