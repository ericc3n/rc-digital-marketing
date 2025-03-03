import { FaBullseye, FaGlobe, FaHandBackFist, FaHandshake, FaRocket, FaStar } from "react-icons/fa6";
import Nav from "../../ui/Nav/Nav";
import Footer from "../../ui/Footer/Footer";
import "./Landing.scss";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../../utils/hooks";

export default function Landing() {
  const navigate = useNavigate();

  useScrollAnimation();

  return (
    <div className='landing-page'>
      <Nav />
      <main className="section-mx div-space">
        <div className="content">
          <h1>AUMENTA DEL 30% IL TUO FATTURATO IN UN ANNO</h1>
          <p className="div-space">CREDI SIA IMPOSSIBILE?</p>
          <video autoPlay loop muted playsInline className="m-space mobile-laptop-clip">
            <source src="/assets/laptop-video.mov" />
          </video>
          <p>
            Scopri come abbiamo già aiutato attività come la tua a raggiungere questo obiettivo
          </p> 
          <button className="btn-1 m-space" onClick={() => navigate('/solutions')}>Scopri</button>
        </div>
        <video autoPlay loop muted playsInline className="large-laptop-clip">
            <source src="/assets/laptop-video.mov" />
        </video>
      </main>
      <section className="comunication">
        <p className="section-mx section-space">Il 70% delle aziende leader utilizza le nostre soluzioni per crescere più velocemente</p>
      </section>
      <h1 className="section-mx section-space hidden an-left">Le nostre soluzioni</h1>
      <section className="magic-cards section-mx hidden">
      <div className="card">
          <FaRocket id="web-app-i" className="icon" />
          <h2>WebApp</h2>
          <div className="display-none-card">
            <p>Trasforma la tua idea in un Web App di successo e amplia la tua offerta</p>
          </div>
        </div>
        <div className="card">
          <FaGlobe id="website-i" className="icon" />
          <h2>SitoWeb</h2>
          <div className="display-none-card">
            <p>Domina il mercato online con un sito che coverte visistatori in clienti</p>
          </div>
        </div>
        <div className="card">
          <FaStar id="improvement-i" className="icon" />
          <h2>Revisioni</h2>
          <div className="display-none-card">
            <p>Ottimizza la tua presenza online e supera la concorrenza con strategia</p>
          </div>
        </div>
      </section>
      <section className="faq section-mx section-space">
        <h1 className="hidden an-left">Domande Frequenti</h1>
        <p className="question-open div-space hidden">Hai dubbi sul potenziale del digitale per la tua azienda?</p>
        <div className="answer hidden">
            <p>Il mondo digitale ti offre varie possibilità per aumentare il tuo fatturato</p>
            <div className="simple-layout">
                <h3>1</h3>
                <p>Ti consente di vendere prodotti mentre stai dormendo </p>
            </div>
            <div className="simple-layout">
                <h3>2</h3>
                <p>Ti consente di vendere prodotti mentre stai dormendo </p>
            </div>
            <div className="simple-layout">
                <h3>3</h3>
                <p>Ti consente di vendere prodotti mentre stai dormendo </p>
            </div>
            <div className="simple-layout">
                <h3>4</h3>
                <p>Ti permette di concludere trattative ovunque nel mondo</p>
            </div>
        </div>
        </section>
        <section className="faq section-mx div-space">
            <p className="question-open hidden">Dopo quanto tempo vedrai i primi risultati?</p>
            <p className="answer hidden">Minimo 2 settimane, massimo 3 mesi, tutto dipendete dalle tue esigenze!</p>
        </section>
        <section className="faq section-mx div-space">
            <p className="question-open hidden">Hai il timore che lavorare con noi ti costi una fortuna?</p>
            <p className="answer hidden">Basta comunicarcelo in modo tale da poter trovare un accordo favorevole alle tue esigenze</p>
        </section>
        <section className="why section-mx section-space">
          <h1 className="hidden an-left">Perché scegliere Noi</h1>
          <div className="goals hidden an-bottom">
              <div className="goal">
                  <div className="main-pic">
                    <FaHandBackFist className="icon" />
                  </div>
                  <div className="text-content">
                      <h2>Approccio Solido</h2>
                      <p>Non ci limitiamo a creare siti web, gestire campagne pubblicitarie o curare i tuoi social media. Il nostro approccio va oltre. </p>
                  </div>
              </div>
              <div className="goal">

                  <div className="main-pic">
                    <FaBullseye className="icon" />
                  </div>
                  <div className="text-content">
                      <h2>Scopo Finale</h2>
                      <p>Ogni servizio che offriamo è pensato per raggiungere un unico, fondamentale obiettivo: aumentare i tuoi guadagni.</p>
                  </div>
              </div>
              <div className="goal">
                  <div className="main-pic">
                    <FaHandshake className="icon" />
                  </div>
                  <div className="text-content">
                      <h2>Non un Semplice Cliente</h2>
                      <p>Non si tratta solo di visibilità online: lavoriamo affinché ogni azione digitale porti risultati concreti, misurabili e duraturi per la tua azienda.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="closure section-mx section-space">
        <h1 className="hidden an-left">TI RIMANGONO SOLO 2 SCELTE</h1>
        <div className="choses section-space hidden">
            <div className="bad-scenario">
                <p>Rimanere scettico e lasciarti scappare questa occasione</p>
            </div>
            <div className="separator">Oppure</div>
            <div className="good-scenario hidden">
                <p><span className="evidence">Affidati</span> alla nostra esperienza per crescere la tua azienda</p>
            </div>
        </div>
        <button className="btn-1 hidden an-bottom" onClick={() => navigate('/contacts')}>Inizia il Tuo Percorso</button>
      </section>
      <Footer />
    </div>
  )
}
