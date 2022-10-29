import { useRef } from "react";
import { createPortal } from "react-dom";
import { useAppContext } from "../../context/AppContext";
import { BsTrash } from "react-icons/bs";
import {
  Background,
  AllContainer,
  PopupContainer,
  Content,
  TitleContainer,
  ContentContainer,
} from "./PopupStyle";

const Popup = ({ setShowCart }) => {
  const { clearCart } = useAppContext();
  const popupRef = useRef();
  const closePopupBg = (e) => {
    if (popupRef.current === e.target) {
      setShowCart(false);
    }
  };
  return createPortal(
    <Background ref={popupRef} onClick={closePopupBg}>
      <AllContainer>
        <PopupContainer>
          <TitleContainer>
            <p className="cart">Cart</p>
          </TitleContainer>
          <ContentContainer>
            <Content>
              <p className="empty-text">Your cart is empty.</p>
              <BsTrash onClick={clearCart} />
            </Content>
          </ContentContainer>
        </PopupContainer>
      </AllContainer>
    </Background>,
    document.getElementById("popup-root")
  );
};
export default Popup;
