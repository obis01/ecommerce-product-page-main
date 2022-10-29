import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImage = styled.img`
  max-width: 445px;
  max-height: 445px;
  border-radius: 10px;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 445px;
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
