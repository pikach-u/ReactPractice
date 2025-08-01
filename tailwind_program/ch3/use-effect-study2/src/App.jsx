import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="bg-red-100 flex flex-col items-center gap-8">
      {isShow && <Counter />}
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "가리기" : "보이기"}
      </button>
    </div>
  );
};

export default App;
