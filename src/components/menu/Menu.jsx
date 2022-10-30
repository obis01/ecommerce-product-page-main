import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Wrapper, Background, Links } from "./MenuStyle";
import { useAppContext } from "../../context/AppContext";
import { links } from "../../data/links";
import { CgClose } from "react-icons/cg";

const Menu = () => {
  const { closeMenu } = useAppContext();
  const menuRef = useRef();

  const closeMenuBg = (e) => {
    if (menuRef.current === e.target) {
      closeMenu();
    }
  };

  return createPortal(
    <Background ref={menuRef} onClick={closeMenuBg}>
      <Wrapper>
        <CgClose className="close-icon" onClick={closeMenu} />
        <Links>
          {links.map((link) => (
            <li key={link.id}>
              <a href="#">{link.name}</a>
            </li>
          ))}
        </Links>
      </Wrapper>
    </Background>,
    document.getElementById("menu-root")
  );
};
export default Menu;
