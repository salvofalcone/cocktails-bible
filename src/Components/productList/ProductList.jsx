import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

import ProductItem from "../productItem";

import "./index.css";

const ProductList = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setListData(data.drinks));
  }, []);

  return (
    <div className="ProductList">
      <h2 className="ProductList__Title">{name}</h2>
      <div className="ProductList__list">
        <Swiper
          spaceBetween={1}
          slidesPerView={6}
          navigation
          className="swiper-container">
          {listData.map((drink) => (
            <SwiperSlide key={drink.idDrink}>
              <ProductItem data={drink} setProductSection={setProductSection} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductList;
