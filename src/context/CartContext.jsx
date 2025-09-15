import { createContext, useContext, useEffect, useReducer, useCallback } from "react";

const CartContext = createContext();

const initialState = {
  items: [], 
  showCart: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return { ...state, items: action.payload || [] };
    case "TOGGLE_CART":
      return { ...state, showCart: !state.showCart };
    case "SET_SHOW":
      return { ...state, showCart: !!action.payload };
    case "ADD": {
      const product = action.payload;
      const itemToAdd = { ...product, quantity: product.quantity ? product.quantity : 1 };
      const exists = state.items.find((i) => i.id === itemToAdd.id);
      const items = exists
        ? state.items.map((i) => (i.id === itemToAdd.id ? { ...i, quantity: i.quantity + itemToAdd.quantity } : i))
        : [...state.items, itemToAdd];
      return { ...state, items };
    }
    case "INCREASE": {
      const id = action.payload;
      return { ...state, items: state.items.map(i => i.id === id ? { ...i, quantity: (i.quantity || 0) + 1 } : i) };
    }
    case "DECREASE": {
      const id = action.payload;
      const items = state.items
        .map(i => i.id === id ? { ...i, quantity: (i.quantity || 0) - 1 } : i)
        .filter(i => i.quantity > 0);
      return { ...state, items };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      throw new Error("Unknown action " + action.type);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) dispatch({ type: "INIT", payload: parsed });
      }
    } catch (e) {
      console.warn("cart init error", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart_v1", JSON.stringify(state.items));
    } catch (e) {
      console.warn("cart persist error", e);
    }
  }, [state.items]);

  useEffect(() => {
    console.log("Cart updated:", state.items);
  }, [state.items]);

  const addToCart = useCallback((product) => dispatch({ type: "ADD", payload: product }), []);
  const increaseQuantity = useCallback((id) => dispatch({ type: "INCREASE", payload: id }), []);
  const decreaseQuantity = useCallback((id) => dispatch({ type: "DECREASE", payload: id }), []);
  const removeFromCart = useCallback((id) => dispatch({ type: "REMOVE", payload: id }), []);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE_CART" }), []);
  const setShowCart = useCallback((val) => dispatch({ type: "SET_SHOW", payload: val }), []);

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        showCart: state.showCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        toggleCart,
        setShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
