import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  max-width: 445px;

  @media (max-width: 920px) {
    max-width: 565px;
  }

  @media (max-width: 678px) {
    width: 87.2%;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Brand = styled.h3`
  text-transform: uppercase;
  color: var(--clr-primary);
  font-size: 0.8125em;
  letter-spacing: 1.8px;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-size: clamp(
    1.75rem,
    1.397887323943662rem + 1.5023474178403755vw,
    2.75rem
  );
  line-height: 1;
  margin-bottom: 2rem;

  @media (max-width: 678px) {
    margin-bottom: 1rem;
  }
`;

export const Desc = styled.p`
  color: var(--clr-neutral-gray-500);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 0.9375rem;
  font-size: clamp(
    0.9375rem,
    0.9154929577464789rem + 0.09389671361502347vw,
    1rem
  );
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 920px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.h2`
  font-size: 1.875em;
  font-weight: 700;
  margin-right: 1rem;
`;

export const Discount = styled.p`
  color: var(--clr-primary);
  font-weight: 700;
  background-color: var(--clr-white);
  border-radius: 5px;
  padding: 0.1rem 0.6rem;
`;

export const ExPrice = styled.p`
  color: var(--clr-neutral-gray-300);
  text-decoration: line-through;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (max-width: 920px) {
    margin-bottom: 0;
  }
`;

export const QtBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  background-color: var(--clr-neutral-gray-100);
  width: 35%;
  max-width: 150px;
  border-radius: 10px;

  @media (max-width: 678px) {
    width: 100%;
    max-width: unset;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 678px) {
    flex-direction: column;
  }
`;

export const AddToCart = styled(motion.button)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  background-color: var(--clr-primary);
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 10px 16px 0px rgba(255, 125, 26, 0.5);
  box-shadow: 0px 10px 16px 0px rgba(255, 125, 26, 0.5);

  &:hover {
    background-color: #ffac6a;
  }

  @media (max-width: 678px) {
    width: 100%;
    max-width: unset;
    padding: 1rem 0;
  }
`;

export const AddText = styled.p`
  margin-left: 1rem;
  font-weight: 700;
`;

export const Quantity = styled.p`
  font-weight: 700;
  padding: 1rem;
`;
