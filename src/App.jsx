import { useState } from "react";

import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import Contacts from "./components/contacts";
import Navbar from "./components/navbar";
import Filters from "./components/filters";

import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");
  const [categoriesList, setCategoriesList] = useState([
    "rum",
    "vodka",
    "gin",
    "tequila",
    "whiskey",
  ]);

  // const [categoriesList, setCategoriesList] = useState([
  //   { name: "rum", checked: true },
  //   { name: "vodka", checked: true },
  //   { name: "gin", checked: true },
  //   { name: "tequila", checked: true },
  //   { name: "whiskey", checked: true },
  // ]);

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;

      case "":
        return (
          <>
            <Filters
              categoriesList={categoriesList}
              setCategoriesList={setCategoriesList}
            />
            {categoriesList
              .filter((category) => category.length > 1)
              .map((category, i) => (
                <ProductList
                  name={category}
                  setProductSection={setProductSection}
                  key={i}
                />
              ))}
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
      <Navbar setProductSection={setProductSection} />
      {onRender()}
    </div>
  );
}

export default App;
