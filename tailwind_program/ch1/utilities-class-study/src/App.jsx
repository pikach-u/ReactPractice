const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col md:flex-row-reverse items-center md:items-start gap-6 p-8">
      <div className="w-1/3 p-4 bg-blue-100 rounded">카드 1</div>
      <div className="w-1/3 p-4 bg-green-100 rounded">카드 2</div>
      <div className="w-1/3 p-4 bg-yellow-100 rounded">카드 3</div>
    </div>
  );
};

export default App;
