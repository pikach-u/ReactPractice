import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("1. Counter 컴포넌트가 렌더링 될때마다");
  });

  useEffect(() => {
    console.log(
      "2. Counter 컴포넌트 마운트 될 때 (Counter 컴포넌트를 처음 불러왔을 때)"
    );
  }, []);

  useEffect(() => {
    console.log("3. count 값에 변화가 발생할 때");

    return () => {
      console.log("4. Counter 컴포넌트가 언마운트 될 때 (삭제될 때)");
    };
  }, [count]);

  return (
    <div className="flex items-center gap-2">
      <p className="mr-2">Count: {count}</p>
      <button
        className="py-1 px-2 rounded bg-red-300"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        className="py-1 px-2 rounded bg-blue-300"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
