import { useState, useEffect } from "react";

import "./index.css";

import { GET } from "../../utils/http";

const ProductSection = ({ productSection, setProductSection}) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    GET("?s=" + productSection).then((data) => setProductData(data.drinks[0]));
  }, []);

  const onHandleClick = () => setProductSection("");

  return (
    <div className="ProductSection">
      <img src={productData.strDrinkThumb} alt={productData.strDrink} />

      <div className="ProductSection__text">
        <h1 className="ProductSection__text--title">{productData.strDrink}</h1>
        <p className="ProductSection__text--desc">{productData.strAlcoholic}</p>
      </div>

      <ul className="ProductionSection__ingredients">
        <li className="ProductSection__ingredients--listItem">
          {productData.strIngredient1}
        </li>
        <li className="ProductSection__ingredients--listItem">
          {productData.strIngredient2}
        </li>
        <li className="ProductSection__ingredients--listItem">
          {productData.strIngredient3}
        </li>
        {/* <li className="ProductSection__ingredients--listItem">{productData.strIngredient4}</li> */}
      </ul>

      <p className="ProductSection__mixing">{productData.strInstructions}</p>

      <button className="ProductSection__closebtn" onClick={onHandleClick}>
        x
      </button>
    </div>
  );
};

export default ProductSection;
