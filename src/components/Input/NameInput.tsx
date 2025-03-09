import { useFormContext } from "../../context/FormContext/FormContext";

export default function NameInput() {
  const { formData, dispatch } = useFormContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "SET_INPUT_VALUE", field: "name", value: e.target.value });
  }
  const handleFocus = (): void => {
    dispatch({ type: "SET_INPUT_ERROR", field: "name", error: false });
  }

  return (
    <div className="input">
      <label htmlFor="name">Nome</label>
      <input 
        type="text" 
        id="name" 
        autoComplete="off" 
        required 
        value={formData?.name.value} 
        onChange={handleChange} 
        onFocus={handleFocus}
        style={formData.name.error ? { borderBottomColor: "red" } : {}}
      />
    </div>
  );
}
