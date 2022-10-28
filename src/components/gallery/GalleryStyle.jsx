import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImage = styled.img`
  max-width: 800px;
  max-height: 800px;
  border-radius: 10px;
  margin-bottom: 2rem;
  cursor: pointer;
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
`;

export const ThumbItem = styled.img`
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }
`;
