import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("1. 화면이 렌더링 될때마다.");
  });

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <p>{count}</p>
      <div className="flex gap-12">
        <button
          className="py-4 px-8 rounded-xl bg-red-300"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="py-4 px-8 rounded-xl bg-blue-300"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
