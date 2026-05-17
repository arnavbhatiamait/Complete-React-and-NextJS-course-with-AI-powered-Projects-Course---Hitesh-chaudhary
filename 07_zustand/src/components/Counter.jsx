import { useCounterStore } from "../store/counterStore";

import React from 'react'

function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter