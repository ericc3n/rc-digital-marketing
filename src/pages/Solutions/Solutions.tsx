import { IoIosArrowDown } from "react-icons/io";
import { useScrollAnimation } from "../../utils/hooks";
import "./Solutions.scss";
import { FaGear, FaGlobe, FaHandshake, FaHeadset } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";

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
          <ul className="text-content">
            <li>Disponibilità ovunque</li>
            <li>Supporto multiutente</li>
            <li>Aggiornamenti centralizzati</li>
            <li>Automazione dei processi</li>
          </ul>
          <div className="side-icons">
            {/* raccogliere in componente */}
            <div className="icon"><FaGlobe /></div>
            <div className="icon"><FaGear /></div>
            <div className="icon"><IoChatboxEllipses /></div>
          </div>
        </div>
        <div className="card-layout">
          <div className="side-icons">
            <div className="icon"><FaHeadset /></div>
            <div className="icon"><FaHandshake /></div>
            <div className="icon"><CgWebsite /></div>
          </div>
          <ul className="text-content">
            <li>Adattabilità alle esigenze aziendaliue</li>
            <li>Compatibilità universale</li>
            <li>Miglior servizio clienti</li>
            <li>Design Intuitiva e personalizzabile</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
