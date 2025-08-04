const ButtonLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        버튼 A
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        버튼 B
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        버튼 C
      </button>
    </div>
  );
};

export default ButtonLayout;
