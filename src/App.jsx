import { useState } from "react";

import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import Contacts from "./components/contacts";
import Navbar from "./components/navbar";
import Filters from "./components/filters";

import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  // ! MAIN CATEGORIES
  /*
  - non deve variare
  - mi basta aggiungere un nuovo oggetto all'array per avere un nuovo filtro e un nuovo carosello di cocktails*/
  const [categoriesList, setCategoriesList] = useState([
    { id: 1, name: "rum", status: "active" },
    { id: 2, name: "vodka", status: "active" },
    { id: 3, name: "gin", status: "active" },
    { id: 4, name: "tequila", status: "active" },
    { id: 5, name: "whiskey", status: "disabled" },
    { id: 6, name: "campari", status: "disabled" },
  ]);

  //TODO
  /*
  - questa è la lista che più mutare
  - il render finale della home dipenderà da questa
  - lo stato deve cambiare al click su uno dei filtri*/
  const [filteredList, setFilteredList] = useState(categoriesList);

  const onRender = () => {
    
    //! DA RIMUOVERE
    console.log("categorie")
    console.log(categoriesList);
    
    console.log("filtrate")
    console.log(filteredList);
    //! ================================

    switch (productSection) {
      case "contacts":
        return <Contacts />;

      case "":
        return (
          <>
            <Filters
              categoriesList={categoriesList}
              setCategoriesList={setCategoriesList}
              setFilteredList={setFilteredList}
            />

            {filteredList.map((category) => (
              <ProductList
                name={category.name}
                setProductSection={setProductSection}
                key={category.id}
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
