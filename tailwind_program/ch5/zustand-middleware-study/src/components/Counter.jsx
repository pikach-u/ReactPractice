import { useEffect } from "react";
import useCounterStore from "../store/counterStore";

const Counter = () => {
  const { count, increase, decrease } = useCounterStore();

  useEffect(() => {
    const unsub = useCounterStore.subscribe(
      (state) => state.count,
      (count) => {
        console.log("카운트가 변경되었습니다:", count);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div>
      <button onClick={decrease}>-</button>
      <p>현재값: {count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
