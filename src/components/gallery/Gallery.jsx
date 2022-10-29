import { useState } from "react";
import {
  Wrapper,
  MainImage,
  Thumbnail,
  ThumbContainer,
  ThumbItem,
} from "./GalleryStyle";
import { useAppContext } from "../../context/AppContext";

const Gallery = () => {
  const {
    openModal,
    selectedImage,
    setSelectedImage,
    activeThumbnail,
    setActiveThumbnail,
    products,
    thumbnails,
  } = useAppContext();

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
                ? { outline: "2px solid var(--clr-primary)" }
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
