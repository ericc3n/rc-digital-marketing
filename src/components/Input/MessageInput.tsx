import { useFormContext } from "../../context/FormContext/FormContext";

export default function MessageInput() {
  const { formData, dispatch } = useFormContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch({ type: "SET_INPUT_VALUE", field: "message", value: e.target.value });
  }
  const handleFocus = (): void => {
    dispatch({ type: "SET_INPUT_ERROR", field: "message", error: false });
  }

  return (
    <div className="input">
      <label htmlFor="message">Messaggio</label>
      <textarea 
        id="message" 
        autoComplete="off" 
        required 
        value={formData?.message.value} 
        onChange={handleChange} 
        onFocus={handleFocus}
        style={formData.message.error ? { borderBottomColor: "red" } : {}}
      />
    </div>
  );
}
