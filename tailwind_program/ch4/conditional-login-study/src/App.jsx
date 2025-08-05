import { useState } from "react";
import LoginControl from "./components/LoginControl";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) return <div>로딩중</div>;

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <LoginControl />
    </div>
  );
};

export default App;
