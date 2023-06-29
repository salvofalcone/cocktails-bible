// import cocktailLogo from "./assets/cocktail.svg";
import { useState } from "react";

import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import Contacts from "./components/contacts";

import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;
      case "":
        return (
          <>
            <ProductList name="rum" setProductSection={setProductSection} />
            <ProductList name="vodka" setProductSection={setProductSection} />
            <ProductList name="gin" setProductSection={setProductSection} />
          </>
        );
      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        );
    }
  };

  return (
    <div className="App">
      <nav>
        <ul className="Nav__List">
          <li onClick={() => setProductSection("")} className="Nav__List--Item">
            Home
          </li>
          <li
            onClick={() => setProductSection("contacts")}
            className="Nav__List--Item">
            Contact Us
          </li>
        </ul>
      </nav>

      {onRender()}
    </div>
  );
}

export default App;
