import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-12">
      {isShow && <Counter />}
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "카운터 비활성화" : "활성화"}
      </button>
    </div>
  );
};

export default App;
