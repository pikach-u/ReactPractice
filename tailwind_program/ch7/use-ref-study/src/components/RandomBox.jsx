const getRandomColor = () => {
  const colors = [
    "bg-pink-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-red-400",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const RandomBox = () => {
  const color = getRandomColor();

  return (
    <div
      className={`flex justify-center items-center w-40 h-40 text-white font-bold rounded ${color}`}
    >
      RandomBox
    </div>
  );
};

export default RandomBox;
