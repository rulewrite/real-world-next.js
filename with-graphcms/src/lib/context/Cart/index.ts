import { createContext } from 'react';

const CartContext = createContext({
  items: {},
  setItems: (items: {}) => {},
});

export default CartContext;
