const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center gap-10">
      <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-semibold py-2 px-4 rounded">
        파란 버튼
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-500 text-gray-800 font-medium py-2 px-4 rounded-lg border">
        회색 버튼
      </button>
    </div>
  );
};

export default App;
