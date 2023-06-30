import { useEffect } from "react";

import "./index.css";

const Filters = ({ categoriesList, setCategoriesList }) => {
  {
    useEffect(() => {
      const filteredCategories = categoriesList.filter(
        (category) => category.status === "active"
      );
      setCategoriesList(filteredCategories);
    }, []);
  }

  const onHandleClick = (prev) => {
    if ((prev = "active")) {
      prev = "disable";
      setCategoriesList()
    } else {
      prev = "active";
      console.log(prev);
    }
  };

  return (
    <div className="Filters">
      {categoriesList.map((category) => (
        <div
          className={category.status}
          key={category.name}
          onClick={() => onHandleClick(category.status)}>
          <p className={category.name}>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Filters;
