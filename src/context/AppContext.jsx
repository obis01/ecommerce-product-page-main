import React, { useContext, useState, useEffect } from "react";
import products from "../assets/product/main/products";
import thumbnails from "../assets/thumbnails/thumbnails";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(products[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartQt, setCartQt] = useState([]);
  const [total, setTotal] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const addQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const subtractQuantity = () => {
    setQuantity((quantity) => quantity - 1);
    if (quantity === 0) {
      setQuantity(0);
    }
  };

  const clearQuantity = () => {
    setQuantity(0);
  };

  const setCartQuantity = (quantity) => {
    setCartQt([...cartQt, quantity]);
  };

  const totalItems = (cartQt) => {
    return cartQt.reduce((prev, curr) => prev + curr, 0);
  };

  useEffect(() => {
    let total = totalItems(cartQt);
    setTotal(total);
  }, [cartQt]);

  const clearCart = () => {
    setCartQt([]);
  };

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
        addQuantity,
        subtractQuantity,
        clearQuantity,
        quantity,
        setCartQuantity,
        cartQt,
        clearCart,
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
