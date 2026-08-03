import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    const savedFav = localStorage.getItem('favorites')
    return savedFav ? JSON.parse(savedFav) : []
  });

  const addToFav = (item) => {

    setFavorites((prev) => {
      if(prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item]
    });
  };

  const removeFromFav = (id) => {

    setFavorites((prev) => prev.filter((i) => i.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  });

  const increaseQuantity = (id) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreaseQuantity = (id) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ))
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, addToFav, removeFromFav, favorites}}>
      {children}
    </CartContext.Provider>
  );
}

