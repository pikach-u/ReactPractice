import { useState } from "react";

const WelcomeMessage = ({ userName }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "숨기기" : "보이기"}
      </button>
      {isVisible && <h2>{userName}님, 환영합니다!</h2>}
    </>
  );
};

export default WelcomeMessage;
