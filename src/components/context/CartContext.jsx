import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  // ===== Favorites =====
  const [favorites, setFavorites] = useState(() => {
    const savedFav = localStorage.getItem("favorites"); 
    return savedFav ? JSON.parse(savedFav) : []; 
  });

  const addToFav = (item) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); 
  }, [favorites]);

  const removefromfav = (id) => {
    setFavorites((prev) => prev.filter((i) => i.id !== id));
  };
  // ===== Cart =====
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const increesQuantity = (id) => {
    setCartItem((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreesQuantity = (id) => {
    setCartItem((prevItem) =>
      prevItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItem((prev) => [...prev, { ...item, quantity: 1 }]);
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        increesQuantity,
        decreesQuantity,
        removeFromCart,
        addToFav,
        favorites,
        removefromfav
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
