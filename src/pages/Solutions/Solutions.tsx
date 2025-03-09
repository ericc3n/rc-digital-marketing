import { IoIosArrowDown } from "react-icons/io";
import { useScrollAnimation } from "../../utils/hooks";
import "./Solutions.scss";


export default function Solutions() {
  useScrollAnimation();
  return (
    <div className="solutions-page">
      <header>
        <h1>LE NOSTRE SOLUZIONI</h1>
        <p>Per Masimizzare il tuo fatturato</p>
        <button className="m-space">
          <IoIosArrowDown className="i" />
        </button>
      </header>
    </div>
  )
}
