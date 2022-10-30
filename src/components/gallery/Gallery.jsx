import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  Wrapper,
  ImageContainer,
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
  const prevImage = () => {
    const specificImage = products.find((product) => product === selectedImage);
    let newId = products.indexOf(specificImage) - 1;
    if (newId < 0) {
      newId = products.length - 1;
    }
    setSelectedImage(products[newId]);
    setActiveThumbnail(newId);
  };
  const nextImage = () => {
    const specificImage = products.find((product) => product === selectedImage);
    let newId = products.indexOf(specificImage) + 1;
    if (newId > products.length - 1) {
      newId = 0;
    }
    setSelectedImage(products[newId]);
    setActiveThumbnail(newId);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <BsChevronLeft
          className="icon-arr icon-left-arr icon-arr-main"
          onClick={() => prevImage()}
        />
        <MainImage
          src={selectedImage}
          alt="shoes"
          onClick={() => openModal()}
        />
        <BsChevronRight
          className="icon-arr icon-right-arr icon-arr-main"
          onClick={() => nextImage()}
        />
      </ImageContainer>
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
