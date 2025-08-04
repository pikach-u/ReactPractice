const CardGrid = () => {
  return (
    <ul>
      {Array.from({ length: 66 }).map((_, i) => (
        <li>카드 {i + 1}</li>
      ))}
    </ul>
  );
};

export default CardGrid;
