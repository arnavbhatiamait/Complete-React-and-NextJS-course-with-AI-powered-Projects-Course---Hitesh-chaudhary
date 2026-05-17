import { useCounterStore } from "../store/counterStore";
import React from 'react'

export default function CounterButton() {
    const { increase } = useCounterStore((state) => state.increase);
    const { decrease } = useCounterStore((state) => state.decrease);
    const { reset } = useCounterStore((state) => state.reset);

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
