import { useEffect } from "react";

import "./index.css";

const Filters = ({ categoriesList, setCategoriesList, setFilteredList }) => {
  {
    useEffect(() => {
      const filteredCategories = categoriesList.filter(
        (category) => category.status === "active"
      );
      setFilteredList(filteredCategories);
    }, []);
  }



  const onHandleClick = (currentId) => {
    const updatedCategoriesList = categoriesList.map((category) =>
      category.id === currentId
        ? { ...category, status: category.status === "active" ? "disabled" : "active" }
        : category
    );
    setCategoriesList(updatedCategoriesList);


    const filteredCategories = updatedCategoriesList.filter(
      (category) => category.status === "active"
    );
    setFilteredList(filteredCategories);
  };


  return (
    <div className="Filters">
      {categoriesList.map((category) => (
        <div
          className={category.status}
          key={category.name}
          onClick={() => onHandleClick(category.id)}>
          <p className={category.name}>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Filters;
