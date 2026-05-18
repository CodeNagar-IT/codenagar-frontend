// frontend/src/context/CartContext.jsx
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect, useCallback, useMemo } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [initialized, setInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          if (Array.isArray(parsedCart)) {
            setCart(parsedCart);
          }
        }
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
      } finally {
        setInitialized(true);
      }
    };
    loadCart();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (initialized) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    }
  }, [cart, initialized]);

  const addToCart = useCallback((product, quantity = 1) => {
    if (!product || !product._id) {
      console.error("Invalid product:", product);
      return;
    }
    
    setCart(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item => 
          item._id === product._id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    if (!productId) return;
    setCart(prev => prev.filter(item => item._id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (!productId) return;
    
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prev => prev.map(item => 
      item._id === productId ? { ...item, quantity } : item
    ));
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  const getCartCount = useCallback(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const isInCart = useCallback((productId) => {
    return cart.some(item => item._id === productId);
  }, [cart]);

  const getItemQuantity = useCallback((productId) => {
    const item = cart.find(item => item._id === productId);
    return item ? item.quantity : 0;
  }, [cart]);

  // Memoized values to prevent unnecessary re-renders
  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isInCart,
    getItemQuantity,
    cartCount: cart.length,
    totalItems: getCartCount(),
    subtotal: getCartTotal(),
  }), [cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount, isInCart, getItemQuantity]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};