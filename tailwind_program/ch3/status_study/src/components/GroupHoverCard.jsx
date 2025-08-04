const GroupHoverCard = () => {
  return (
    <div className="group p-6 rounded-lg bg-white border shadow-md hover:shadow-2xl transition-shadow">
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500">
        제목
      </h3>
      <p className="text-gray-600">설명을 여기에 입력하세요.</p>
      <div className="mt-4 text-gray-400 group-hover:text-blue-400">
        ⭐ 즐겨찾기
      </div>
    </div>
  );
};

export default GroupHoverCard;
