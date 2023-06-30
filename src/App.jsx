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
    { id: 1, name: "rum", status: "active" },
    { id: 2, name: "vodka", status: "active" },
    { id: 3, name: "gin", status: "active" },
    { id: 4, name: "tequila", status: "active" },
    { id: 5, name: "whiskey", status: "disabled" },
    { id: 6, name: "campari", status: "disabled" },
  ]);

  const [filteredList, setFilteredList] = useState(categoriesList);

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
