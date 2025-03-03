import React, { createContext, Dispatch, useContext, useReducer, useState } from "react";
import { FormContextType, FormContextValue, Action } from "./FormContextTypes";
import { MdErrorOutline } from "react-icons/md";
import { sendEmail } from "../../api/sendEmail";
import { IoCheckmarkOutline } from "react-icons/io5";

// Context impementation
const FormContext = createContext<FormContextValue | undefined>(undefined);
const useFormContext = () :FormContextValue => {
  const context = useContext(FormContext);
  if(!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}

// Reducer 
const reducer = (state: FormContextType, action: Action & { initialState?: FormContextType }) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.value,
        },
      };
    case "SET_INPUT_ERROR":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          error: action.error,
        },
      };
    case "RESET":
      return action.initialState || state; // Reset to the provided initial state
    default:
      return state;
  }
}

// The provider
const FormProvider: React.FC<{ 
  children: React.ReactNode, 
  initialState: FormContextType, 
  verificationFunc: (formData: FormContextType, dispatch: Dispatch<Action>) => void 
}> = ({ 
    children, 
    initialState,
    verificationFunc
  }) => {

  const [formData, dispatch] = useReducer((state, action) => reducer(state, { ...action, initialState }), initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent,
    verificateForm: (formData: FormContextType, dispatch: Dispatch<Action>) => void
  ): Promise<Function> => {
    e.preventDefault();
    setIsLoading(true)
    setErrorMsg("");
    setSuccessMsg("");

    const controller = new AbortController();
    const signal = controller.signal; 
  
    try {
      verificateForm(formData, dispatch);
      await sendEmail(formData, signal);
      setSuccessMsg("Email inviata con successo!");
      dispatch({ type: "RESET", initialState });

    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Richiesta annullata");
      } else {
        setErrorMsg(error.message);
      }
    }
    finally {
      setIsLoading(false);
    }

    return () => controller.abort();
  }
  

  return (
    <FormContext.Provider value={{ formData, dispatch }}>
      <form onSubmit={(e: React.FormEvent) => {handleSubmit(e, verificationFunc)}}>
        {children}
        {errorMsg && <p className="error-message"><MdErrorOutline style={{ verticalAlign: 'middle' }} /> {errorMsg}</p>}
        {successMsg && <p className="success-message"><IoCheckmarkOutline style={{ verticalAlign: 'middle' }} /> {successMsg}</p>}
        <button 
          type="submit" 
          className="btn-1" 
          style={isLoading ? { backgroundColor: "#006333", boxShadow: "0 0 10px 5px transparent", cursor: "not-allowed" }: {}}
        >Invia
        </button>
      </form>
    </FormContext.Provider>
  );
}

export { FormProvider, useFormContext }