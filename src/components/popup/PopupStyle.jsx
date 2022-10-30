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
  transform: translate(5%, 53%);
  -webkit-box-shadow: 0px 15px 25px 5px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 15px 25px 5px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 250px;
  min-height: 250px;
  border-radius: 10px;
  background-color: #fff;

  @media (max-width: 920px) {
    transform: translate(0, 32%);
  }

  @media (max-width: 678px) {
    right: 0;
    top: 0;
    transform: translate(0, 75px);
    width: 100%;
    height: 280px;
    z-index: 2;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--clr-neutral-gray-300);
  padding: 1.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;

  @media (max-width: 678px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  width: 360px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemDescBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyText = styled.p`
  font-weight: 700;
  font-size: 1.2em;
  color: var(--clr-neutral-gray-500);
  margin: 0;
`;

export const ItemPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ItemThumb = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`;

export const Checkout = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  background-color: var(--clr-primary);
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ffac6a;
  }
`;

export const PriceBlock = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
`;

export const ItemTitle = styled.p`
  margin: 0;
  letter-spacing: 0.4px;
  margin-bottom: 0.3rem;
`;

export const TotalAmount = styled.span`
  margin: 0;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 1.1em;
`;
