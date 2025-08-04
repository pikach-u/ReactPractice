const FullStateButton = () => {
  return (
    <button
      disabled={true}
      className="bg-purple-500 text-white px-6 py-2 rounded
      hover:bg-purple-600
      focus:ring-2 focus:ring-purple-300
      active:scale-95
      disabled:bg-gray-400 disabled:cursor-not-allowed
      transition-all"
    >
      클릭해보세요!
    </button>
  );
};

export default FullStateButton;
