import { useState } from "react";
import { Nav, User, Left, Right, IconsContainer, Cart } from "./HeaderStyle";
import { links } from "../../data/links";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/icon-cart.svg";
import userIcon from "../../assets/image-avatar.png";
import Popup from "../popup/Popup";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { total } = useAppContext();
  return (
    <Nav>
      <Left>
        <img src={logo} alt="sneakers logo" style={{ marginRight: "2rem" }} />
        {links.map((link) => (
          <li key={link.id}>
            <a href="#">{link.name}</a>
          </li>
        ))}
      </Left>
      <Right>
        <IconsContainer>
          <Cart
            src={cartIcon}
            alt="cart"
            onClick={() => setShowCart(!showCart)}
          />
          {total}
          <User src={userIcon} alt="user" />
          {showCart && <Popup setShowCart={setShowCart} />}
        </IconsContainer>
      </Right>
    </Nav>
  );
};
export default Header;
