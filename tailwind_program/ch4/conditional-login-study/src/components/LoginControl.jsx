import { useState } from "react";

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>조건부 로그인</h2>
      {isLoggedIn ? (
        <>
          <p>안녕하세요 사용자님!</p>
          <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
        </>
      ) : (
        <>
          <p>로그인이 필요합니다.</p>
          <button onClick={() => setIsLoggedIn(true)}>로그인</button>
        </>
      )}
    </div>
  );
};

export default LoginControl;
