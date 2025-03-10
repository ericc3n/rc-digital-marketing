import "./Contacts.scss";
import { useScrollAnimation } from "../../utils/hooks";
import { FaEnvelope, FaInstagram } from "react-icons/fa6";
import { FormProvider } from "../../context/FormContext/FormContext";
import { FormContextType, Action } from "../../context/FormContext/FormContextTypes";
import NameInput from "../../components/Input/NameInput";
import EmailInput from "../../components/Input/EmailInput";
import MessageInput from "../../components/Input/MessageInput";
import { Dispatch } from "react";

const initialState: FormContextType = {
  name: { value: "", error: false },
  email: { value: "", error: false },
  message: { value: "", error: false }
}

// Regex
const nameRegex = /^[\p{L}]+$/u
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i

export default function Contacts() {
  // Form verification
  const handleSubmit = (formData: FormContextType, dispatch: Dispatch<Action>) => {
    const { name, email, message } = formData;
    let errorMessage: string = "";

    if(name.value.length < 3) {
      errorMessage = "Nome troppo corto"; 
      dispatch({ type: "SET_INPUT_ERROR", field: "name", error: true });
    } 
    else if(!nameRegex.test(name.value)) {
      errorMessage = "Invalid name";
      dispatch({ type: "SET_INPUT_ERROR", field: "name", error: true });
    }
    else if(name.value.length > 50) {
      errorMessage = "Nome troppo lungo";
      dispatch({ type: "SET_INPUT_ERROR", field: "name", error: true });
    }

    if(!emailRegex.test(email.value)) {
      errorMessage = "Formato email invalido";
      dispatch({ type: "SET_INPUT_ERROR", field: "email", error: true });
    } 
    else if(email.value.length > 50) {
      errorMessage = "Email troppo lunga"
      dispatch({ type: "SET_INPUT_ERROR", field: "email", error: true });
    }
    
    if(message.value.length < 4) {
      errorMessage = "Messaggio troppo corto";
      dispatch({ type: "SET_INPUT_ERROR", field: "message", error: true });
    }
    else if(message.value.length > 500) {
      errorMessage = "Messaggio troppo lungo";
      dispatch({ type: "SET_INPUT_ERROR", field: "message", error: true });
    }

    if(errorMessage) throw new Error(errorMessage);
  }

  // Effect hooks
  useScrollAnimation();

  return (
    <div className="contacts-page section-mx">
      <main>
        <FormProvider initialState={initialState} verificationFunc={handleSubmit}>
          <h2>Parlaci direttamente</h2>
          <NameInput />
          <EmailInput />
          <MessageInput />
        </FormProvider>
      </main>
      <section className="otherMethods">
        <h1 className="hidden">Oppure...</h1>
        <div className="cards">
            <div className="card hidden an-bottom" data-platform="email">
                <FaEnvelope className="i envelope" />
                <a href="mailto:rc0000webdesign@gmail.com">rc0000webdesign@gmail.com</a>
            </div>
            <div className="card hidden an-bottom" data-platform="instagram">
                <FaInstagram className="i instagram" />
                <a href="https://www.instagram.com/rc.digital_marketing/">@rc.digital_marketing</a>
            </div>
        </div>
      </section>
    </div>
  )
}
