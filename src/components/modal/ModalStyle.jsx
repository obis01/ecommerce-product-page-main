import styled from "styled-components";

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
`;

export const ModalContainer = styled.div`
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
  max-width: 800px;
  max-height: 800px;
  border-radius: 10px;
`;

export const Thumbnail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const ThumbContainer = styled.div`
  border-radius: 10px;
  width: 176px;
  height: 176px;
  background-color: #fff;
`;

export const ThumbItem = styled.img`
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }
`;
