import React, { createContext, Dispatch, useContext, useReducer, useState } from "react";
import { FormContextType, FormContextValue, Action } from "./FormContextTypes";
import { MdErrorOutline } from "react-icons/md";

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
const reducer = (state: FormContextType, action: Action) => {
  switch(action.type) {
    case("SET_INPUT_VALUE"):
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.value
        }
      }
    case "SET_INPUT_ERROR":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          error: action.error
        }
      }
    default:
      return state
  }
}

// The provider
const FormProvider: React.FC<{ 
  children: React.ReactNode, 
  initalState: FormContextType, 
  verificationFunc: (formData: FormContextType, dispatch: Dispatch<Action>) => void 
}> = ({ 
    children, 
    initalState,
    verificationFunc
  }) => {

  const [formData, dispatch] = useReducer(reducer, initalState);
  const [errorMsg, setErrorMsg] = useState<string>("")

  // Send form to the mail api
  const handleSubmit = (e: React.FormEvent, verificateForm: (formData: FormContextType, dispatch: Dispatch<Action>) => void): void => {
    e.preventDefault();
    try {
      verificateForm(formData, dispatch)
      console.log("form inviato con successo");
    } catch(Error: any) {
      setErrorMsg(Error.message);
    }
  }

  return (
    <FormContext.Provider value={{ formData, dispatch }}>
      <form onSubmit={(e: React.FormEvent) => {handleSubmit(e, verificationFunc)}}>
        {children}
        {errorMsg && <p className="error-message"><MdErrorOutline style={{ verticalAlign: 'middle' }} /> {errorMsg}</p>}
        <button type="submit" className="btn-1">Invia</button>
      </form>
    </FormContext.Provider>
  );
}

export { FormProvider, useFormContext }