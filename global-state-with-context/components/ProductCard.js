import { useContext } from 'react';
import ShoppingCartContext from './context/cartContext';

// eslint-disable-next-line no-unused-vars
function ProductCard({ id, name, price, picture }) {
  const { setItems, items } = useContext(ShoppingCartContext);
  const amount = id in items ? items[id] : 0;

  const addToCart = (isAdd) => {
    const currentAmount = items[id] ?? 0;
    if (isAdd) {
      setItems({
        ...items,
        [id]: currentAmount + 1,
      });

      return;
    }

    if (currentAmount === 0) {
      return;
    }

    setItems({
      ...items,
      [id]: currentAmount - 1,
    });
  };

  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <div className="relative 100% h-40 m-auto">
        <img src={picture} alt={name} className="object-cover" />
      </div>
      <div className="flex justify-between mt-4">
        <div className="font-bold text-l"> {name} </div>
        <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
      </div>
      <div className="flex justify-between mt-4 w-2/4 m-auto">
        <button
          className="pl-2 pr-2 bg-red-400 text-white rounded-md"
          disabled={amount === 0}
          onClick={() => addToCart(false)}
        >
          -
        </button>
        <div>{amount}</div>
        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => addToCart(true)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
