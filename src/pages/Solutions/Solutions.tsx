import { IoIosArrowDown } from "react-icons/io";
import { useScrollAnimation } from "../../utils/hooks";
import "./Solutions.scss";
import WebAppSection from "./WebAppSection/WebAppSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";

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
      <WebAppSection />
      <PortfolioSection />
    </div>
  )
}
