import { useEffect } from "react";
import "./Solutions.scss"
import Nav from "../../ui/Nav/Nav";
import Footer from "../../ui/Footer/Footer";

export default function Solutions() {
    useEffect(() => {
      // Animation
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
      });
  
      const hiddenEls = document.querySelectorAll(".hidden");
      hiddenEls.forEach(el => observer.observe(el));

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);
  return (
    <div className="solutions-page">
      <Nav />
      <main>
          <h1>LE NOSTRE SOLUZIONI</h1>
          <p>Per massimizzare al 100% il tuo fatturato</p>
      </main>
      <div className="services section-mx">
          <div className="service web-app">
              <img src="/assets/web-app.jpg" alt="web-app" className="hidden an-bottom" />
              <div className="description">
                  <h2 className="hidden an-right">Web App</h2>
                  <p className="hidden">La potenzialità delle web app è quella di creare un'<span className="glow-txt">attività autonoma online</span>, la quale è la chiave per lanciare la tua attività verso nuovi orizzonti.</p>
                  <p className="hidden">Questo obiettivo è raggiunto dopo un <span className="glow-txt">intenso lavoro</span> iniziale susseguito da manutenzioni e aggiornamenti.
                  </p>
                  <p className="hidden">Non tutte le attività possono godere dei benefici delle web app.</p>
              </div>
          </div>
          <div className="service website">
              <img src="/assets/website.jpg" alt="website" className="hidden an-bottom" />     
              <div className="description">
                  <h2 className="hidden an-left">Sito Web</h2>
                  <p className="hidden">Lo scopo di un sito web è <span className="glow-txt">presentare</span> la propria attività al cliente.</p>
                  <p className="hidden">Avere un sito web eccellente permette di guadagnare la <span className="glow-txt">fiducia</span> del visitatore lasciando una prima <span className="glow-txt">impressione positiva</span>.</p>
                  <p className="quotes hidden"><i className="fa-solid fa-quote-left"></i>La differenza tra un sito web eccellente e un sito web decente risiede nella capacità di trasmettere emozioni e sentimenti attraverso una semplice pagina.</p>
              </div>
          </div>
          {/* <div className="service ads">
              <img src="/assets/ads.jpg" alt="ads" className="hidden an-bottom" />     
              <div className="description">
                  <h2 className="hidden an-right">Pubblicità</h2>
                  <p className="hidden">La pubblicità è uno strumento molto potente che offre, a chi la usa correttamente, l'opportunità di <span className="glow-txt">presentare</span> efficacemente la propria attività.</p>
                  <p className="hidden">Ne conseguono 2 importanti vantaggi:</p>
                  <ol className="label-layout">
                      <li className="hidden an-right">L’attività acquisisce rinomanza, la quale comunica un senso di fiducia</li>
                      <li className="el-space-1 hidden an-right">L’attività si presenta a nuovi clienti, i quali erano all’oscuro della vostra esistenza!</li>
                  </ol>
              </div>
          </div>
          <div className="service social-media">
              <img src="/assets/social-media.jpg" alt="social-media" className="hidden an-bottom" />     
              <div className="description">
                  <h2 className="an-left">Social media</h2>
                  <p className="hidden">I social media, nonostante tutto l’odio nei loro confronti, offrono <span className="glow-txt">benefici</span> paragonabili a quelli della pubblicità.
                  </p>
                  <p className="hidden">La differenza fondamentale tra i due si basa su tre aspetti chiave:</p>
                  <div className="cards">
                      <div className="card hidden an-left">
                          <div className="title">
                              <i className="fa-solid fa-hourglass-half"></i>
                              <h3>Tempo</h3>
                          </div>
                          <p>Le pubblicità generano risultati rapidamente; i social media richiedono invece diversi mesi per portare risultati significativi.</p>
                      </div>
                      <div className="card hidden an-left">
                          <div className="title">
                              <i className="fa-solid fa-briefcase"></i>
                              <h3>Impegno</h3>
                          </div>
                          <p>Mentre le pubblicità, dopo essere state create, richiedono poco intervento, i social media necessitano di un impegno costante.</p>
                      </div>
                      <div className="card hidden an-left">
                          <div className="title">
                              <i className="fa-solid fa-dollar-sign"></i>
                              <h3>Costo</h3>
                          </div>
                          <p>Le pubblicità richiedono budget consistenti, mentre i social media sono gratuiti.</p>
                      </div>
                  </div>
              </div>
          </div> */}
          <div className="service grow">
              <img src="/assets/grow.jpg" alt="grow" className="hidden an-bottom" />     
              <div className="description">
                  <h2 className="hidden an-right">Revisioni</h2>
                  <p className="hidden">L’obiettivo di questo servizio è di <span className="glow-txt">migliorare</span> la presenza online della tua attività:
                  </p>
                  <ul className="label-layout">
                      <li className="hidden an-riht">Migliorando l’aspetto dei tuoi post (se hai i social media)</li>
                      <li className="hidden an-riht">Migliorando la copia dei tuoi contenuti (la copia sono l’insieme delle parole scritte)</li>
                      <li className="hidden an-riht">Migliorando la SEO dei tuoi siti web (la SEO è la probabilità che il tuo sito esca tra i primi risultati)</li>
                  </ul>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}
