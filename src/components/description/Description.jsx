import {
  Wrapper,
  Container,
  Brand,
  Title,
  Desc,
  Price,
  PriceBlock,
  PriceContainer,
  Discount,
  ExPrice,
  QtBlock,
  Quantity,
  Form,
  AddToCart,
  AddText,
} from "./DescriptionStyle";
import { productDesc } from "../../data/links";
import { GoPlus, GoDash } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
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
    <Wrapper>
      <Container>
        <Brand>{brand}</Brand>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <PriceContainer>
          <PriceBlock>
            <Price>${price.toFixed(2)}</Price>
            <Discount>{discount}</Discount>
          </PriceBlock>
          <ExPrice>${exPrice.toFixed(2)}</ExPrice>
        </PriceContainer>
        <Form>
          <QtBlock>
            <GoDash className="qt-icon" onClick={subtractQuantity} />
            <Quantity>{quantity}</Quantity>
            <GoPlus className="qt-icon" onClick={addQuantity} />
          </QtBlock>
          <AddToCart onClick={handleAddToCart}>
            <BsCart3 />
            <AddText>Add to cart</AddText>
          </AddToCart>
        </Form>
      </Container>
    </Wrapper>
  );
};
export default Description;
