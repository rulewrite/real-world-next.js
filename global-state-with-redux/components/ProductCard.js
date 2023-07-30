import { useDispatch } from 'react-redux';
import { useGlobalItems } from '../redux/store';

// eslint-disable-next-line no-unused-vars
function ProductCard({ id, name, price, picture }) {
  const dispatch = useDispatch();
  const items = useGlobalItems();
  const amount = items?.[id] ?? 0;

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
          onClick={() => {
            dispatch({
              type: 'DECREMENT',
              id,
            });
          }}
        >
          -
        </button>
        <div>{amount}</div>
        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => {
            dispatch({
              type: 'INCREMENT',
              id,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
