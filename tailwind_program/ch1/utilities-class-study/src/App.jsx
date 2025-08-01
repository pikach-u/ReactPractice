const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center gap-8">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800">제목입니다</h2>
        <p className="mt-2 text-gray-600 text-sm">
          안녕하세요 여기에 간단한 설명이 들어갑니다. 그림자와 간격을
          조절해보세요.
        </p>
      </div>
    </div>
  );
};

export default App;
