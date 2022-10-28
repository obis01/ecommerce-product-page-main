import { Nav, User, Left, Right } from "./HeaderStyle";
import links from "../../data/links";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/icon-cart.svg";
import userIcon from "../../assets/image-avatar.png";

const Header = () => {
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
        <img src={cartIcon} alt="cart" style={{ marginRight: "2rem" }} />
        <User src={userIcon} alt="user" />
      </Right>
    </Nav>
  );
};
export default Header;
