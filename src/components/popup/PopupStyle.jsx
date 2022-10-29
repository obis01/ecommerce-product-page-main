import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  inset: 0 0 0 0;

  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const AllContainer = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

export const PopupContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(5%, 32%);
  -webkit-box-shadow: 0px 15px 25px 5px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 15px 25px 5px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  min-height: 300px;
  border-radius: 10px;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--clr-neutral-gray-300);
  padding: 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 2rem;
`;
