import { FaBullseye, FaHandBackFist, FaHandshake, FaMedapps } from "react-icons/fa6";
import "./Landing.scss";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../../utils/hooks";
import { PiPresentationBold } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";

export default function Landing() {
  const navigate = useNavigate();

  useScrollAnimation();

  return (
    <div className='landing-page'>
      <main className="section-mx div-space">
        <div className="content">
          <h1 className="title-page">Porta il Tuo Business al Livello Successivo</h1>
          <p className="m-space glow-txt">Soluzioni digitali su misura per far crescere la tua azienda</p>
          <video autoPlay loop muted playsInline className="m-space mobile-laptop-clip">
            <source src="/assets/laptop-video.mov" />
          </video>
          <p>
          Credi che sia impossibile? Scopri come abbiamo già aiutato attività come la tua a raggiungere questo obiettivo.
          </p> 
          <button className="btn-1 div-space" onClick={() => navigate('/solutions')}>Scopri di più</button>
        </div>
        <video autoPlay loop muted playsInline className="large-laptop-clip">
            <source src="/assets/laptop-video.mov" />
        </video>
      </main>
      <h1 className="section-mx section-space hidden an-left">Le nostre soluzioni</h1>
      <section className="magic-cards section-mx hidden">
        <div className="card">
          <FaMedapps id="web-app-i" className="icon" />
          <h2>Web App</h2>
          <div className="display-none-card">
            <p>Dai vita ad una realtà di interazione con il tuo cliente automatizzata</p>
          </div>
        </div>
        <div className="card">
          <PiPresentationBold id="website-i" className="icon" />
          <h2>Portfolio</h2>
          <div className="display-none-card">
            <p>Presenta la tua attività online in modo verstatile ed efficace</p>
          </div>
        </div>
        <div className="card">
          <MdManageAccounts id="improvement-i" className="icon" />
          <h2>Gestionale</h2>
          <div className="display-none-card">
            <p>Gestisci tutti i dati della tua azienda direttamente dal tuo PC</p>
          </div>
        </div>
      </section>
      <section className="faq section-mx section-space">
        <h1 className="hidden an-left">Domande Frequenti</h1>
        <p className="question-open div-space hidden">Hai dubbi sul digitale per la tua azienda?</p>
        <div className="answer hidden">
            <p>Il digitale offre infinite possibilità di crescita. Ecco alcuni vantaggi:</p>
            <div className="simple-layout">
                <h3>1</h3>
                <p>Raggiungi clienti in tutto il mondo</p>
            </div>
            <div className="simple-layout">
                <h3>2</h3>
                <p>Vendi online 24/7, anche mentre dormi</p>
            </div>
            <div className="simple-layout">
                <h3>3</h3>
                <p>Rimani operativo anche nei periodi di chiusura</p>
            </div>
            <div className="simple-layout">
                <h3>4</h3>
                <p>Concludi trattative a distanza</p>
            </div>
        </div>
      </section>
      <section className="faq section-mx div-space">
        <p className="question-open hidden">Dopo quanto tempo vedrai i primi risultati?</p>
        <p className="answer hidden">I primi risultati possono arrivare già nelle prime settimane, a seconda delle strategie adottate.</p>
      </section>
      <section className="faq section-mx div-space">
        <p className="question-open hidden">Il digitale è un investimento costoso?</p>
        <p className="answer hidden">Personalizziamo ogni progetto in base alle tue esigenze e al tuo budget.</p>
      </section>
      <section className="why section-mx section-space">
        <h1 className="hidden an-left">Perché scegliere noi?</h1>
        <div className="goals hidden an-bottom">
            <div className="goal">
                <div className="main-pic">
                  <FaHandBackFist className="icon" />
                </div>
                <div className="text-content">
                    <h2>Approccio Strategico</h2>
                    <p>Non ci limitiamo a creare siti web: realizziamo strategie digitali per il tuo successo</p>
                </div>
            </div>
            <div className="goal">
                <div className="main-pic">
                  <FaBullseye className="icon" />
                </div>
                <div className="text-content">
                    <h2>Obiettivi Chiari</h2>
                    <p>Puntiamo a risultati misurabili e concreti per la tua azienda</p>
                </div>
            </div>
            <div className="goal">
                <div className="main-pic">
                  <FaHandshake className="icon" />
                </div>
                <div className="text-content">
                    <h2>Un Partner, non un Fornitore</h2>
                    <p>Lavoriamo con te per costruire il tuo successo nel digitale</p>
                </div>
            </div>
        </div>
      </section>
      <section className="closure section-mx section-space">
        <h1 className="hidden an-left">Sei pronto a salire di livello?</h1>
        <div className="choses section-space hidden">
            <div className="bad-scenario">
                <p>Ignora questa occasione</p>
            </div>
            <div className="separator">Oppure</div>
            <div className="good-scenario hidden">
                <p><span className="evidence">Inizia ora</span> a far crescere il tuo business con noi</p>
            </div>
        </div>
        <button className="btn-2 an-bottom" onClick={() => navigate('/contacts')}>Contattaci</button>
      </section>
    </div>
  )
}
