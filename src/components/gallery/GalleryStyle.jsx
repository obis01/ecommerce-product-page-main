import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 920px) {
    flex-direction: row-reverse;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  @media (max-width: 678px) {
    width: 100%;
    height: 100%;
  }
`;

export const MainImage = styled.img`
  max-width: 445px;
  max-height: 445px;
  border-radius: 10px;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (max-width: 678px) {
    border-radius: 0;
    margin-bottom: 0.5rem;
    width: 100%;
    height: 100%;
    max-width: 675px;
    max-height: 675px;
  }
`;

export const Thumbnail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 445px;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
  }

  @media (max-width: 678px) {
    display: none;
  }
`;

export const ThumbContainer = styled.div`
  border-radius: 10px;
  width: 90px;
  height: 90px;
`;

export const ThumbItem = styled.img`
  cursor: pointer;
  border-radius: 10px;
  width: 90px;
  height: 90px;

  &:hover {
    opacity: 0.8;
  }
`;
