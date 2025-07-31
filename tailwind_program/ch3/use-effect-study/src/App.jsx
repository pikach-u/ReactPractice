import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("1. App 컴포넌트가 렌더링 될때마다.");
  });

  useEffect(() => {
    console.log("2. App 컴포넌트 마운트 될 때 (App 컴포넌트 처음 불러왔을 때)");
  }, []);

  useEffect(() => {
    console.log("3. App 컴포넌트 마운트 될 때 + count 값에 변화가 발생할 때");
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-12">
      <div className="flex items-center gap-2">
        <p className="mr-2">{count}</p>
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
    </div>
  );
};

export default App;
