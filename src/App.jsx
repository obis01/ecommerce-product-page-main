import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import styled from "styled-components";
import Modal from "./components/modal/Modal";
import { useAppContext } from "./context/AppContext";

function App() {
  const { showModal } = useAppContext();
  return (
    <>
      <Wrapper>
        <Header />
        <Main />
        {showModal && <Modal />}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 95%;
  max-width: 1110px;
  margin: 0 auto;
`;

export default App;
