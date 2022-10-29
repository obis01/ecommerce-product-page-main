import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
  border-bottom: 1px solid var(--clr-neutral-gray-300);
  position: relative;
`;

export const Left = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  & li:not(:last-child) {
    margin-right: 1rem;
  }

  & li a {
    color: var(--clr-neutral-gray-500);
    text-decoration: none;
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
`;

export const User = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;

  &:hover {
    outline: 2px solid var(--clr-primary);
    border-radius: 50%;
  }
`;

export const Cart = styled.img`
  margin-right: 2rem;
  cursor: pointer;
`;
