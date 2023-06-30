import { useState } from "react";

import "./index.css";

const Filters = ({ categoriesList, setCategoriesList }) => {
  const [checkInputRum, setCheckInputRum] = useState(true);
  const [checkInputVodka, setCheckInputVodka] = useState(true);
  const [checkInputGin, setCheckInputGin] = useState(true);
  const [checkInputWhiskey, setCheckInputWhiskey] = useState(true);
  const [checkInputTequila, setCheckInputTequila] = useState(true);

  const onHandleCheckRum = () => setCheckInputRum((prev) => !prev);
  const onHandleCheckVodka = () => setCheckInputVodka((prev) => !prev);
  const onHandleCheckGin = () => setCheckInputGin((prev) => !prev);
  const onHandleCheckWhiskey = () => setCheckInputWhiskey((prev) => !prev);
  const onHandleCheckTequila = () => setCheckInputTequila((prev) => !prev);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCategoriesList([
      checkInputRum && "rum",
      checkInputVodka && "vodka",
      checkInputGin && "gin",
      checkInputWhiskey && "whiskey",
      checkInputTequila && "tequila",
    ]);
  };

  return (
    <form className="Filters" onSubmit={onHandleSubmit}>
      {/* {categoriesList.map((category) => (
        <div className="Filters__Category" key={category.name}>
          <label htmlFor={category.name}>{category.name}</label>
          <input
            type="checkbox"
            name={category.name}
            checked={category.checked}
            onChange={() => console.log("ciao")}
          />
        </div>
      ))} */}

      <label htmlFor="rum">Rum</label>
      <input
        type="checkbox"
        name="rum"
        checked={checkInputRum}
        onChange={onHandleCheckRum}
      />

      <label htmlFor="vodka">Vodka</label>
      <input
        type="checkbox"
        name="vodka"
        checked={checkInputVodka}
        onChange={onHandleCheckVodka}
      />

      <label htmlFor="gin">Gin</label>
      <input
        type="checkbox"
        name="gin"
        checked={checkInputGin}
        onChange={onHandleCheckGin}
      />

      <label htmlFor="tequila">Tequila</label>
      <input
        type="checkbox"
        name="tequila"
        checked={checkInputTequila}
        onChange={onHandleCheckTequila}
      />

      <label htmlFor="whiskey">Whiskey</label>
      <input
        type="checkbox"
        name="whiskey"
        checked={checkInputWhiskey}
        onChange={onHandleCheckWhiskey}
      />

      <input type="submit" value="Apply" />
    </form>
  );
};

export default Filters;
