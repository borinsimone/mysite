export default function About() {
  return (
    <section className="site-section" id="about" aria-labelledby="about-title">
      <div className="site-width about-layout">
        <div className="about-mark" aria-hidden="true">
          <span>
            SB<span>.</span>
          </span>
          <small>
            CREATIVE MIND.
            <br />
            DEVELOPER SOUL.
          </small>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Chi sono</p>
          <h2 id="about-title">
            Design pulito.
            <br />
            Codice solido.
            <br />
            <span>Risultati concreti.</span>
          </h2>
          <p className="section-intro">
            Sono Simone Borin, web designer e developer freelance. Creo siti web che uniscono
            estetica, usabilità e performance per trasformare idee in esperienze digitali efficaci.
          </p>
          <a className="pill small" href="#contact">
            Conosciamoci <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="about-values">
          <div>
            <h3>Obiettivi al centro</h3>
            <p>Focus sui risultati</p>
          </div>
          <div>
            <h3>Design + codice</h3>
            <p>Un’unica visione</p>
          </div>
          <div>
            <h3>Sempre in evoluzione</h3>
            <p>Idee e strumenti per crescere</p>
          </div>
        </div>
      </div>
    </section>
  );
}
