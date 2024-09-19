import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (options, quantity, id) => {
    setCart([...cart, { options, quantity, id }]);
  };

  const removeToCart = (id) => {
    setCart(cart.filter((el) => id !== el.id));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
