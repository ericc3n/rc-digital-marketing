import { FormContextType } from "../context/FormContext/FormContextTypes";

const sendEmail = async (formData: FormContextType, signal?: AbortSignal): Promise<void> => {
  try {
    const response = await fetch("https://formspree.io/f/movjgyvo--sdfsdfs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email.value,
        name: formData.name.value,
        message: formData.message.value
      }),
      signal
    });

    if (response.ok) {
      console.log("Email inviata con successo");
    } else {
      const err = await response.json();
      throw err;
    }
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.log("Richiesta annullata dall'utente.");
    } else {
      throw new Error("Impossibile effettuare la richiesta");
    }
  }
}

export { sendEmail }