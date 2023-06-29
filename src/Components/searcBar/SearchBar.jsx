import { useEffect, useState } from "react";
import { GET } from "../../utils/http";

import "./index.css";

const SearchBar = () => {
  const [searchCocktail, setSearchCocktail] = useState({});

  useEffect(() => {
    GET("?s=" + searchCocktail).then((data) => console.log(data.drinks));
  }, [searchCocktail]);

  const onHandleChange = (e) => {
    setSearchCocktail(e.target.value);
    // console.log(searchCocktail);
  };

  return (
    <div>
      <input
        type="text"
        name="searchbar"
        placeholder="Search a cocktail"
        className="SearchBar"
        onChange={onHandleChange}
      />
    </div>
  );
};

export default SearchBar;
