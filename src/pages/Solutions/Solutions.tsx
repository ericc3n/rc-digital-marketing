import { IoIosArrowDown } from "react-icons/io";
import { useScrollAnimation } from "../../utils/hooks";
import { useRef } from "react";
import "./Solutions.scss";
import WebAppSection from "./WebAppSection/WebAppSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import ManagementSection from "./ManagementSection/ManagementSection";
import { useNavigate } from "react-router-dom";

export default function Solutions() {
  useScrollAnimation();
  const navigate = useNavigate();

  // Create a ref for the first section
  const firstSectionRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToNext = () => {
    if (firstSectionRef.current) {
      firstSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="solutions-page">
      <header>
        <h1 className="title-page">LE NOSTRE SOLUZIONI</h1>
        <p>Per Massimizzare il tuo fatturato</p>
        <button className="m-space" onClick={handleScrollToNext}>
          <IoIosArrowDown className="i" />
        </button>
      </header>
      <div ref={firstSectionRef} />
      <WebAppSection />
      <PortfolioSection />
      <ManagementSection />
      <div className="closure section-mx section-space">
        <button className="btn-2 div-space" onClick={() => navigate("/contacts")}>Inizia il Tuo Percorso</button>
      </div>
    </div>
  );
}
