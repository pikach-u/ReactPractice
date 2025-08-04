const FocusInput = () => {
  return (
    <input
      className="
      outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
       rounded px-4 py-2 transition-all
      "
      type="text"
      placeholder="이름을 입력하세요"
    />
  );
};

export default FocusInput;
