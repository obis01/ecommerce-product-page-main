import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Wrapper,
  ImageContainer,
  MainImage,
  Thumbnail,
  ThumbContainer,
  ThumbItem,
  ModalContainer,
  Background,
} from "./ModalStyle";
import products from "../../assets/product/main/products";
import thumbnails from "../../assets/thumbnails/thumbnails";
import { MdClose } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import iconClose from "../../assets/icon-close.svg";
import { useAppContext } from "../../context/AppContext";

const Modal = () => {
  const [selectedImage, setSelectedImage] = useState(products[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const modalRef = useRef();
  const { closeModal } = useAppContext();

  const closeModalBg = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
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

  return createPortal(
    <Background ref={modalRef} onClick={closeModalBg}>
      <ModalContainer>
        <Wrapper>
          <MdClose className="icon-close" onClick={() => closeModal()} />
          <ImageContainer>
            <BsChevronLeft
              className="icon-arr icon-left-arr"
              onClick={() => prevImage()}
            />
            <MainImage src={selectedImage} alt="shoes" />
            <BsChevronRight
              className="icon-arr icon-right-arr"
              onClick={() => nextImage()}
            />
          </ImageContainer>
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
      </ModalContainer>
    </Background>,
    document.getElementById("modal-root")
  );
};
export default Modal;
