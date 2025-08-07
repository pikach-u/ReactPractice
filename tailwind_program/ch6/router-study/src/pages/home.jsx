import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      Home
      <Link className="bg-blue-300 px-4 py-2 rounded" to="/about">
        About 페이지 이동
      </Link>
    </div>
  );
};

export default Home;
