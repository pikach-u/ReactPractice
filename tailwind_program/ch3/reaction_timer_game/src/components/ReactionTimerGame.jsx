import { useEffect } from "react";

const ReactionTimerGame = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("setTimeout");
    }, 2000);
    setInterval(() => {
      console.log("setInterval");
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gab-8 p-8 bg-white shadow-xl">
      <h1 className="text-2xl font-bold">⏱️ 10초 반응 게임</h1>
    </div>
  );
};

export default ReactionTimerGame;
