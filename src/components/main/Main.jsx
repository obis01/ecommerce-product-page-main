import { Wrapper } from "./MainStyle";
import Gallery from "../gallery/Gallery";
import Description from "../description/Description";

const Main = () => {
  return (
    <Wrapper>
      <Gallery />
      <Description />
    </Wrapper>
  );
};

export default Main;
