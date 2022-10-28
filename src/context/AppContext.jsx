import React, { useContext, useState } from "react";
import products from "../assets/product/main/products";
import thumbnails from "../assets/thumbnails/thumbnails";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [selectedImage, setSelectedImage] = useState(products[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  return (
    <AppContext.Provider
      value={{
        openModal,
        closeModal,
        showModal,
        selectedImage,
        setSelectedImage,
        activeThumbnail,
        setActiveThumbnail,
        products,
        thumbnails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
