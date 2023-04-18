import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        Add amount
      </button>
      <button onClick={resetAll}>Reset all</button>
    </div>
  );
};

export default Counter;
