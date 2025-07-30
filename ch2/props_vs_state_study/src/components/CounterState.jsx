import { useState } from "react";

const CounterState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>State 기반 카운터</h2>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>1 증가</button>
      <button onClick={() => setCount(count - 1)}>1 감소</button>
    </div>
  );
};

export default CounterState;
