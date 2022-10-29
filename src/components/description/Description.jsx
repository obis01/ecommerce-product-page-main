import { Container } from "./DescriptionStyle";
import { productDesc } from "../../data/links";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useAppContext } from "../../context/AppContext";

const Description = () => {
  const {
    addQuantity,
    subtractQuantity,
    quantity,
    setCartQuantity,
    clearQuantity,
  } = useAppContext();
  const { brand, title, desc, price, discount, exPrice } = productDesc;

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCartQuantity(quantity);
    clearQuantity();
  };

  return (
    <div>
      <h3>{brand}</h3>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div>
        <div>
          <h2>${price.toFixed(2)}</h2>
          <p>{discount}</p>
        </div>
        ${exPrice.toFixed(2)}
      </div>
      <form>
        <div>
          <BiMinus onClick={subtractQuantity} />
          <p>{quantity}</p>
          <BiPlus onClick={addQuantity} />
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </form>
    </div>
  );
};
export default Description;
