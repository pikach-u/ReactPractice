const CounterProps = ({ count }) => {
  return (
    <div className="card">
      <h2>Props 기반 카운터</h2>
      <p>카운트: {count}</p>
    </div>
  );
};

export default CounterProps;
