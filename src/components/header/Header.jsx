import { useState } from "react";
import {
  Nav,
  HamburgerContainer,
  Links,
  User,
  Left,
  Right,
  IconsContainer,
  CartContainer,
  Cart,
  Total,
} from "./HeaderStyle";
import { links } from "../../data/links";
import logo from "../../assets/logo.svg";
import userIcon from "../../assets/image-avatar.png";
import { BsCart3 } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import Popup from "../popup/Popup";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { total, openMenu } = useAppContext();
  return (
    <Nav>
      <Left>
        <HamburgerContainer
          onClick={() => {
            setIsOpen(!isOpen);
            openMenu();
          }}
        >
          <CgMenu className="open-icon" />
          {/* <div className={isOpen ? "icon-one active-one" : "icon-one"}>
            <div className="hamburger hamburger-one"></div>
          </div> */}
        </HamburgerContainer>
        <img className="logo" src={logo} alt="sneakers logo" />
        <Links>
          {links.map((link) => (
            <li key={link.id}>
              <a href="#">{link.name}</a>
            </li>
          ))}
        </Links>
      </Left>
      <Right>
        <IconsContainer>
          <CartContainer onClick={() => setShowCart(!showCart)}>
            <BsCart3 className="cart-icon" />
            {total > 0 && <Total>{total}</Total>}
          </CartContainer>
          <User src={userIcon} alt="user" />
          {showCart && <Popup setShowCart={setShowCart} />}
        </IconsContainer>
      </Right>
    </Nav>
  );
};
export default Header;
