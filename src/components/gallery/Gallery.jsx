import { useState } from "react";
import {
  Wrapper,
  MainImage,
  Thumbnail,
  ThumbContainer,
  ThumbItem,
} from "./GalleryStyle";
import products from "../../assets/product/main/products";
import thumbnails from "../../assets/thumbnails/thumbnails";
import { useAppContext } from "../../context/AppContext";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(products[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const { openModal } = useAppContext();

  const handleClick = (i) => {
    setActiveThumbnail(i);
  };

  return (
    <Wrapper>
      <MainImage src={selectedImage} alt="shoes" onClick={() => openModal()} />
      <Thumbnail>
        {thumbnails.map((thumbnail, i) => (
          <ThumbContainer
            key={i}
            style={
              activeThumbnail === i
                ? { outline: "5px solid var(--clr-primary)" }
                : null
            }
          >
            <ThumbItem
              key={i}
              src={thumbnail}
              onClick={() => {
                setSelectedImage(products[i]);
                setActiveThumbnail(i);
              }}
              style={
                activeThumbnail === i
                  ? {
                      opacity: 0.5,
                    }
                  : null
              }
            />
          </ThumbContainer>
        ))}
      </Thumbnail>
    </Wrapper>
  );
};
export default Gallery;
