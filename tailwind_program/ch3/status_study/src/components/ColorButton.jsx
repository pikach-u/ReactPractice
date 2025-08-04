import clsx from "clsx";

const ColorButton = ({ isPrimary }) => {
  return (
    <button
      className={clsx(
        "text-white px-4 py-2 rounded transition-colors",
        isPrimary
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-400 hover:bg-gray-500"
      )}
    >
      {isPrimary ? "Primary" : "Secondary"}
    </button>
  );
};

export default ColorButton;
