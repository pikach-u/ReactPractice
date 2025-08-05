import { useState } from "react";
import C from "./C";
import D from "./D";

const A = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  return (
    <div className="bg-red-400 m-12 p-12">
      A <C count={count} /> <D increase={increase} />
    </div>
  );
};

export default A;
