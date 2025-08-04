import { useState } from "react";

const ColorButton = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <button
      className={`text-white px-4 py-2 rounded transition-colors ${
        isClick ? "bg-blue-500" : "bg-gray-500"
      }`}
      onClick={() => setIsClick(!isClick)}
    >
      {isClick ? "클릭 해제" : "클릭"}
    </button>
  );
};

export default ColorButton;
