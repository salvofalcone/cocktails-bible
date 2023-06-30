import "./index.css";

const ProductItem = ({ data, setProductSection }) => {
  const onHandleClick = () => setProductSection(data.strDrink);

  return (
    <div className="ProductItem" onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <p className="ProductItem__Title">{data.strDrink}</p>
    </div>
  );
};

export default ProductItem;
