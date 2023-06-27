import { useState } from "react";
import "./App.css";

import ProductSection from "./components/productSection";

function App() {
  const [productSection, setPoductSection] = useState("margarita");

  return (
    <div className="App">
      <ProductSection productSection={productSection} />
    </div>
  );
}

export default App;
