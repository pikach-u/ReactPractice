import useCounterStore from "../store/counterStore";

const Counter = () => {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div>
      <button onClick={decrease}>-</button>
      <p>현재값: {count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
