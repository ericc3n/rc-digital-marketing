import "./WebAppSection.scss";

export default function WebAppSection() {
  return (
    <section className="section-mx web-app">
      <h1>Web app</h1>
      <p className="el-space-1">Una web app è un’applicazione che funziona direttamente nel browser, senza bisogno di installazioni. Offre le stesse funzionalità di un software tradizionale, con il vantaggio di essere accessibile ovunque e da qualsiasi dispositivo connesso a Internet.</p>
      <div className="card-layout">
        <img src="/assets/web-app.png" alt="web-app" className="side-img" />
        <ul className="text-content">
          <li>Disponibilità ovunque</li>
          <li>Supporto multiutente</li>
          <li>Aggiornamenti centralizzati</li>
          <li>Automazione dei processi</li>
        </ul>
      </div>
      <div className="card-layout">
        <img src="/assets/support.png" alt="layout" className="side-img" />
        <ul className="text-content">
          <li>Adattabilità alle esigenze aziendaliue</li>
          <li>Compatibilità universale</li>
          <li>Miglior servizio clienti</li>
          <li>Design intuitiva e personalizzabile</li>
        </ul>
      </div>
    </section>
  )
}
