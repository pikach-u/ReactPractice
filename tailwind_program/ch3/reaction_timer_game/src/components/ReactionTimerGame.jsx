import { useEffect, useState } from "react";

const ReactionTimerGame = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setTimeout(() => {
      console.log("10초 지남");
    }, 10000);

    return () => clearTimeout(timer);
  }, [isRunning]);

  return (
    <div className="flex flex-col justify-center items-center gab-8 p-8 bg-white shadow-xl">
      <h1 className="text-2xl font-bold">⏱️ 10초 반응 게임</h1>

      {!isRunning && (
        <button
          className="bg-blue=500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          onClick={handleStart}
        >
          시작
        </button>
      )}
    </div>
  );
};

export default ReactionTimerGame;
