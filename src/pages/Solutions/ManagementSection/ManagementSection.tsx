import { GoGraph } from "react-icons/go";
import "./ManagementSection.scss";
import { FiDatabase, FiLayout } from "react-icons/fi";
import { HiOutlineBolt, HiOutlineSparkles } from "react-icons/hi2";
import { FaRegLightbulb } from "react-icons/fa6";

export default function ManagementSection() {
  return (
    <section className="section-space section-mx management">
      <h1 className="hidden">Gestionale</h1>
      <p className="el-space-1 hidden">Un gestionale è un software che organizza e visualizza dati in modo efficiente, operando su dispositivi o reti aziendali senza necessitare di una connessione internet continua.</p>
      <div className="cards hidden">
        <div className="card">
          <div className="icon"><GoGraph /></div>
          <h3>Ottimizazione dei processi</h3>
        </div>
        <div className="card">
          <div className="icon"><HiOutlineBolt /></div>
          <h3>Accesso del team rapido e coordinato</h3>
        </div>
        <div className="card">
          <div className="icon"><FiLayout /></div>
          <h3>Gestione personalizzata</h3>
        </div>
        <div className="card">
          <div className="icon"><FaRegLightbulb /></div>
          <h3>Monitoraggio e controllo</h3>
        </div>
        <div className="card">
          <div className="icon"><FiDatabase /></div>
          <h3>Gestione magazzino e sicurezza dati</h3>
        </div>
        <div className="card">
          <div className="icon"><HiOutlineSparkles /></div>
          <h3>Flessibilità e personalizzazione</h3>
        </div>
      </div>
    </section>
  )
}
