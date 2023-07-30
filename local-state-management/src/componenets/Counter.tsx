import { useState } from 'react';

const Counter = ({ initialCounter = 0 }) => {
  const [count, setCount] = useState(initialCounter);

  return (
    <div>
      <b>Count is: {count}</b>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement -
      </button>
    </div>
  );
};

export default Counter;
