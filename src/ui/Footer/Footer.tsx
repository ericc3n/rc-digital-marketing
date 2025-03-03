import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="nav">
        <Link to="/">Home </Link>
        <span>| </span>
        <Link to="/solutions">Soluzioni </Link>
        <span>| </span>
        <Link to="/contacts">Contatti</Link>
      </div>
      <div className="social-contact">
        <FaInstagram className="icon" onClick={() => location.href = "https://www.instagram.com/rc.digital_marketing/"} />
      </div>
      <br />
      <a href="mailto:rc0000webdesign@gmail.com">rc0000webdesign@gmail.com</a>
      <br />
      <a href="tel:+393279514494">+39 327 951 4494</a>
      <p className="div-space">Images | Freepik</p>
    </footer>
  )
}
