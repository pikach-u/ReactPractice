const VisibilityToggle = () => {
  return (
    <div className="p-6 space-y-4">
      <p className="block md:hidden text-red-600 font-bold">
        📱 모바일에서만 보입니다.
      </p>
      <p className="hidden md:block text-green-600 font-bold">
        🖥️ 태블릿 이상에서만 보입니다.
      </p>
    </div>
  );
};

export default VisibilityToggle;
