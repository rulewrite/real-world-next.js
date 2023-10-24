import { createContext } from 'react';

interface Cart {
  [productId: string]: number;
}

const CartContext = createContext<{
  items: Cart;
  setItems: (items: Cart) => void;
}>({
  items: {},
  setItems: (items: Cart) => {},
});

export default CartContext;
