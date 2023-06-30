import { useEffect } from "react";

import "./index.css";

const Filters = ({
  categoriesList,
  setCategoriesList,
  setFilteredList,
}) => {
  {
    useEffect(() => {
      const filteredCategories = categoriesList.filter(
        (category) => category.status === "active"
      );
      setFilteredList(filteredCategories);
    }, []);
  }

  const onHandleClick = (prev) => {
    // console.log(prev);
    // if ((prev = "active")) {
    //   prev = "disabled";
    //   console.log(prev);
    // } else {
    //   prev = "active";
    //   console.log(prev);
    // }
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
