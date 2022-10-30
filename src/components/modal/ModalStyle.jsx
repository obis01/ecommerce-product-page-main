import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0 0 0 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 678px) {
    display: none;
  }
`;

export const ModalContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const MainImage = styled.img`
  max-width: 550px;
  max-height: 550px;
  border-radius: 10px;
  margin-bottom: 2rem;

  &::selection {
    background-color: transparent;
  }
`;

export const Thumbnail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 0 auto;
  max-width: 445px;
`;

export const ThumbContainer = styled.div`
  border-radius: 10px;
  width: 90px;
  height: 90px;
  background-color: #fff;
`;

export const ThumbItem = styled.img`
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }

  &::selection {
    background-color: transparent;
  }
`;
