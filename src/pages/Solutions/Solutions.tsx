import { IoIosArrowDown } from "react-icons/io";
import { useScrollAnimation } from "../../utils/hooks";
import "./Solutions.scss";

export default function Solutions() {
  useScrollAnimation();
  return (
    <div className="solutions-page">
      <header>
        <h1 className="title-page">LE NOSTRE SOLUZIONI</h1>
        <p>Per Masimizzare il tuo fatturato</p>
        <button className="m-space">
          <IoIosArrowDown className="i" />
        </button>
      </header>
      <section className="section-mx">
        <h1>Web app</h1>
        <p className="el-space-1">Una web app è un’applicazione che funziona direttamente nel browser, senza bisogno di installazioni. Offre le stesse funzionalità di un software tradizionale, con il vantaggio di essere accessibile ovunque e da qualsiasi dispositivo connesso a Internet.</p>
        <div className="card-layout">
          <img src="/assets/web-app.jpg" alt="web-app" className="side-img" />
          <ul className="text-content">
            <li>Disponibilità ovunque</li>
            <li>Supporto multiutente</li>
            <li>Aggiornamenti centralizzati</li>
            <li>Automazione dei processi</li>
          </ul>
        </div>
        <div className="card-layout">
          <img src="/assets/layout.jpg" alt="layout" className="side-img" />
          <ul className="text-content">
            <li>Adattabilità alle esigenze aziendaliue</li>
            <li>Compatibilità universale</li>
            <li>Miglior servizio clienti</li>
            <li>Design intuitiva e personalizzabile</li>
          </ul>
        </div>
      </section>
      <section className="section-mx section-space">
        <h1>Portfolio</h1>
        <p>Un portfolio è una raccolta organizzata di tutte le informazioni essenziali della tua attività (contatti, recensioni, servizi, ecc), in un sito web.</p>
      </section>
    </div>
  )
}
