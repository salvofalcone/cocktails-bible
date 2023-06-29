import { useEffect, useState } from "react";
import { GET } from "../../utils/http";

import "./index.css";

const SearchBar = () => {
  const [searchCocktail, setSearchCocktail] = useState("");
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    if (searchCocktail !== "") {
      GET("?s=" + searchCocktail).then((data) => setCocktailList(data.drinks));
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
          <p className="Cocktail__Preview--ListItem">{cocktail.strDrink}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
