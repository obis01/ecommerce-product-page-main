import { useState } from "react";
import { Nav, User, Left, Right, Popup } from "./HeaderStyle";
import links from "../../data/links";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/icon-cart.svg";
import userIcon from "../../assets/image-avatar.png";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
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
        <img
          src={cartIcon}
          alt="cart"
          style={{ marginRight: "2rem", cursor: "pointer" }}
          onClick={() => setShowCart(true)}
        />
        <User src={userIcon} alt="user" onClick={() => setShowCart(true)} />
        {showCart && (
          <Popup>
            <p>Cart</p>
            <hr />
            <p>Your cart is empty</p>
          </Popup>
        )}
      </Right>
    </Nav>
  );
};
export default Header;
