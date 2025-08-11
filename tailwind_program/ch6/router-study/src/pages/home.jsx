import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { user } = useOutletContext();

  return (
    <div className="bg-red-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      Home
      {user && <p>Hello, {user}</p>}
    </div>
  );
};

export default Home;
