import React, { useContext, useState, useEffect } from "react";
import products from "../assets/product/main/products";
import thumbnails from "../assets/thumbnails/thumbnails";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(products[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartQt, setCartQt] = useState([]);
  const [total, setTotal] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const addQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const subtractQuantity = () => {
    setQuantity((quantity) => quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  };

  const clearQuantity = () => {
    setQuantity(1);
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
        openMenu,
        showMenu,
        closeMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
