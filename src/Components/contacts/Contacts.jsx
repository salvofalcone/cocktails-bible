import { useState } from "react";
import "./index.css";

const Contacts = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [credentialsCond, setCredentialsCond] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    // TODO Cambiare la sezione sottostante per l'invio di una vera richiesta di informazioni dal cliente
    console.log(
      `Richiesta informazioni da ${nameInput} ${surnameInput}, all'indirizzo ${emailInput}`
    );
  };

  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNameInput(e.target.value);
        break;
      case "surname":
        setSurnameInput(e.target.value);
        break;
      case "email":
        setEmailInput(e.target.value);
        break;
      case "password":
        setPassInput(e.target.value);
        break;
    }
  };

  return (
    <form className="Contacts" onSubmit={onHandleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Insert your name"
        value={nameInput}
        onChange={onHandleChange}
        required
      />

      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        name="surname"
        placeholder="Insert your surname"
        value={surnameInput}
        onChange={onHandleChange}
        required
      />

      <label htmlFor="email">Mail</label>
      <input
        type="email"
        name="email"
        placeholder="address@email.com"
        value={emailInput}
        onChange={onHandleChange}
        required
      />

      <input type="submit" value="invia" className="Contacts__submit" />
    </form>
  );
};

export default Contacts;
