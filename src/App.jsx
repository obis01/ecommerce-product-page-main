import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import styled from "styled-components";
import Modal from "./components/modal/Modal";
import Menu from "./components/menu/Menu";
import { useAppContext } from "./context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const { showModal, showMenu } = useAppContext();
  return (
    <>
      <Wrapper>
        <Header />
        <Main />
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showModal && <Modal />}
          {showMenu && <Menu />}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 95%;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 920px) {
    margin-bottom: 90px;
  }

  @media (max-width: 678px) {
    width: 100%;
  }
`;

export default App;
