import { useRef } from "react";
import { createPortal } from "react-dom";
import { useAppContext } from "../../context/AppContext";
import { BsTrash } from "react-icons/bs";
import { productDesc } from "../../data/links";
import {
  Background,
  AllContainer,
  PopupContainer,
  Content,
  TitleContainer,
  ContentContainer,
  EmptyText,
  CartItem,
  ItemContent,
  ItemThumb,
  Left,
  ItemDescBlock,
  ItemTitle,
  ItemPriceBlock,
  PriceBlock,
  Checkout,
  TotalAmount,
} from "./PopupStyle";
const { title, price } = productDesc;

const Popup = ({ setShowCart }) => {
  const { total, clearCart, thumbnails } = useAppContext();
  const popupRef = useRef();
  const closePopupBg = (e) => {
    if (popupRef.current === e.target) {
      setShowCart(false);
    }
  };
  return createPortal(
    <Background ref={popupRef} onClick={closePopupBg}>
      <AllContainer>
        <PopupContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <TitleContainer>
            <p className="cart">Cart</p>
          </TitleContainer>
          <ContentContainer>
            <Content>
              {total === 0 ? (
                <EmptyText className="empty-text">
                  Your cart is empty.
                </EmptyText>
              ) : (
                <CartItem>
                  <ItemContent>
                    <Left>
                      <ItemThumb src={thumbnails[0]} />
                      <ItemDescBlock>
                        <ItemTitle>{title}</ItemTitle>
                        <ItemPriceBlock>
                          <PriceBlock>
                            ${price.toFixed(2)} x {total}
                            <TotalAmount>
                              ${(price * total).toFixed(2)}
                            </TotalAmount>
                          </PriceBlock>
                        </ItemPriceBlock>
                      </ItemDescBlock>
                    </Left>
                    <BsTrash className="trash-icon" onClick={clearCart} />
                  </ItemContent>
                  <Checkout
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Checkout
                  </Checkout>
                </CartItem>
              )}
            </Content>
          </ContentContainer>
        </PopupContainer>
      </AllContainer>
    </Background>,
    document.getElementById("popup-root")
  );
};
export default Popup;
