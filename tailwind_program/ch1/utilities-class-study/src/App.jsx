const App = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-50 py-8">
      <div className="bg-purple-200 p-4 w-64 text-center">첫 번째</div>
      <div className="bg-purple-300 p-4 w-64 text-center">두 번째</div>
      <div className="bg-purple-400 p-4 w-64 text-center">세 번째</div>
      <div className="bg-indigo-300 p-4">짧은 박스</div>
      <div className="bg-indigo-400 p-10">긴 박스</div>
    </div>
  );
};

export default App;
