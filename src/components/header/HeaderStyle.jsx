import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 45px 0 55px;
  border-bottom: 1px solid var(--clr-neutral-gray-300);

  @media (max-width: 920px) {
    border-bottom: none;
    padding-block: 20px;
  }

  @media (max-width: 678px) {
    width: 87.2%;
    margin: 0 auto;
  }
`;

export const Links = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
font-size: 0.9375em;

& li:not(:last-child) {
  margin-right: 35px;
}

& li a {
  color: var(--clr-neutral-gray-500);
  text-decoration: none;
  position: relative;
cursor: pointer;

  &:hover {
    color: var(--clr-neutral-black);

    &:after {
      content:'';
      position:absolute;
      left:0;
      right:0;
      bottom:-4.6rem;
      border-bottom: 4px solid var(--clr-primary);
    }
}
  @media (max-width: 920px) {
    display: none;
  }
`;

export const HamburgerContainer = styled.div`
  position: absolute;
  @media (min-width: 921px) {
    display: none;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 920px) {
    /* flex-direction: row; */
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const User = styled.img`
  width: 52px;
  height: 52px;
  cursor: pointer;

  &:hover {
    outline: 2px solid var(--clr-primary);
    border-radius: 50%;
  }

  @media (max-width: 678px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 450px) {
    margin-right: 1.5rem;
  }
`;

export const CartContainer = styled.div`
  cursor: pointer;
`;

export const Cart = styled.img`
  margin-right: 2rem;
  cursor: pointer;
`;

export const Total = styled.p`
  color: #fff;
  background-color: var(--clr-primary);
  padding: 1px 7px;
  font-size: 0.6em;
  border-radius: 10px;
  font-weight: 700;
  position: absolute;
  top: 8px;
  left: 6px;

  @media (max-width: 678px) {
    top: -7px;
    left: 7px;
  }
`;
