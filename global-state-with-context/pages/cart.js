// eslint-disable-next-line no-unused-vars
import { useContext } from 'react';
import ShoppingCartContext from '../components/context/cartContext';
import data from '../data/items';

const getItem = (id) => {
  return data.find((item) => item.id === id);
};

function Cart() {
  const { items } = useContext(ShoppingCartContext);

  const totalAmount = Object.entries(items)
    .map(([id, amount]) => getItem(id).price * amount)
    .reduce((a, b) => a + b, 0);

  const amounts = Object.entries(items).map(([id, amount]) => {
    return {
      item: getItem(id),
      amount,
    };
  });

  return (
    <div>
      <h1 className="text-xl font-bold"> Total: ${totalAmount} </h1>
      <div>
        {amounts.map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
