import Gallery from "../gallery/Gallery";
import Description from "../description/Description";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Gallery />
      <Description />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-block: 4rem;
`;

export default Main;
