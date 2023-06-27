import { useState, useEffect } from "react";

import "./index.css";

import { GET } from "../../utils/http";

const ProductSection = ({ productSection }) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    GET("?=" + productSection)
    .then((data) => setProductData(data.drinks[0]));
  }, []);

  return (
    <div className="ProductSection">
      <img src={productData.strDrinkThumb} alt={productData.strDrink} />

      <div className="ProductSection__text">
        <div className="ProductSection__text--heading">
          <h1>{productData.strDrink}</h1>
          <p>{productData.strAlcoholic}</p>
        </div>
        <p>V</p>
      </div>

      <ul className="ProductionSection__ingredients">
        <li>{productData.strIngredient1}</li>
        <li>{productData.strIngredient2}</li>
        <li>{productData.strIngredient3}</li>
        <li>{productData.strIngredient4}</li>
      </ul>

      <p>{productData.strInstructions}</p>
    </div>
  );
};

export default ProductSection;
