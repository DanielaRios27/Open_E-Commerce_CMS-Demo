import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemName) => {
    setCartItems([...cartItems, itemName]);
  };

  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter((item) => item !== itemName);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};