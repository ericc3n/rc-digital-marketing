import { useFormContext } from "../../../context/FormContext/FormContext";

export default function EmailInput() {
  const { formData, dispatch } = useFormContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "SET_INPUT_VALUE", field: "email", value: e.target.value });
  }
  const handleFocus = (): void => {
    dispatch({ type: "SET_INPUT_ERROR", field: "email", error: false });
  }

  return (
    <div className="input">
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email" 
        autoComplete="off" 
        required 
        value={formData?.email.value} 
        onChange={handleChange} 
        onFocus={handleFocus}
        style={formData.email.error ? { borderBottomColor: "red" } : {}}
      />
    </div>
  );
}
