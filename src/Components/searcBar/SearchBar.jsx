import { useEffect, useState } from "react";
import { GET } from "../../utils/http";

import "./index.css";

const SearchBar = () => {
  const [searchCocktail, setSearchCocktail] = useState("");
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    if (searchCocktail.length >= 3) {
      GET("?s=" + searchCocktail).then((data) => setCocktailList(data.drinks));
    } else {
      setCocktailList([]);
    }
  }, [searchCocktail]);

  const onHandleChange = (e) => {
    setSearchCocktail(e.target.value);
  };

  return (
    <div className="SearchBar__Main">
      <input
        type="text"
        name="searchbar"
        placeholder="Search a cocktail"
        className="SearchBar"
        onChange={onHandleChange}
      />

      <div className="Cocktail__Preview">
        {cocktailList.map((cocktail) => (
          <div className="Cocktail__Preview--ListItem">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrinkThumb}
              className="Cocktail__Preview--Image"
            />
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
