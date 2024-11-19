import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.storage === product.storage
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.storage === product.storage
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, storage) => {
    setCartItems(
      cartItems.filter((item) => !(item.id === id && item.storage === storage))
    );
  };

  const updateQuantity = (id, storage, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.storage === storage
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  // const loadCartForUser = () => {
  //   setCartItems(cartItems); // Load user's cart on login
  // };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
