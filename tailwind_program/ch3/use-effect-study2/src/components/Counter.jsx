import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter가 생성되었습니다");

    return () => {
      console.log("Counter가 제거되었습니다");
    };
  }, [count]);

  return (
    <div className="flex justify-center gap-4">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
