import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  padding-left: 6%;

  @media (min-width: 679px) {
    padding-left: 2.5%;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0 0 0 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const Links = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
list-style: none;
font-size: 1.125em;
font-weight: 700;
z-index: 5;
margin-top: 30px;
/* margin-left: 15%; */
line-height: 2.7;

& li a {
  color: #000;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;
