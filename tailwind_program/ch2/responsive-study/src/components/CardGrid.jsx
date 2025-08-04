const CardGrid = () => {
  return (
    <ul className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.from({ length: 66 }).map((_, i) => (
        <li
          key={i}
          className="bg-yellow-100 p-6 rounded shadow-2xl text-center"
        >
          카드 {i + 1}
        </li>
      ))}
    </ul>
  );
};

export default CardGrid;
