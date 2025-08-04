const FocusInput = () => {
  return (
    <input
      className="focus:border-4 focus:outline-none border-green-300"
      type="text"
      placeholder="이름을 입력하세요"
    />
  );
};

export default FocusInput;
