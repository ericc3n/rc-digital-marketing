import { FaGlobeEurope } from "react-icons/fa";
import { FaHandshake, FaMedal, FaUsers } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import "./PortfolioSection.scss";

export default function PortfolioSection() {
  return (
    <section className="section-mx section-space portfolio">
      <h1 className="hidden">Portfolio</h1>
      <p className="el-space-1 hidden">Un portfolio è una raccolta organizzata di tutte le informazioni essenziali della tua attività (contatti, recensioni, servizi, ecc), in un sito web.</p>
      <div className="grid-layout hidden">
        <div className="card two-grid-rows">
          <FaUsers className="i" />
          <h3>Espansione del pubblico</h3>
          <p>Puoi attrarre clienti non solo nella tua zona, ma anche a livello nazionale o internazionale</p>
        </div>
        <div className="card">
          <FaGlobeEurope className="i" />
          <h3>Accessibile ovunque</h3>
          <p>Un portfolio online è accessibile in qualsiasi momento e da qualsiasi dispositivo</p>
        </div>
        <div className="card">
          <FaHandshake className="i" />
          <h3>Dimostrazione di competenze</h3>
          <p>Un portfolio ben strutturato mostra aumenta la fiducia dei clienti</p>
        </div>
        <div className="card">
          <IoTimer className="i" />
          <h3>Funziona come una vetrina attiva 24/7</h3>
          <p>Potenziali clienti possono trovarti e contattarti 24/7</p>
        </div>
        <div className="card">
          <FaMedal className="i" />
          <h3>Aumento della credibilità</h3>
          <p>Includere recensioni e progetti di successo rafforza la tua reputazione e aiuta a convincere nuovi clienti</p>
        </div>
      </div>
    </section>
  )
}
