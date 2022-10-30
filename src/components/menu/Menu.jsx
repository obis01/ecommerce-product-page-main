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

  const dropIn = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
    },
  };

  return createPortal(
    <Background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={menuRef}
      onClick={closeMenuBg}
    >
      <Wrapper variants={dropIn} initial="hidden" animate="visible" exit="exit">
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
