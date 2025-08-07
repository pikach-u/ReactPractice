import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("5초 뒤 Home페이지로 이동합니다.");

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      About
      <Link className="bg-red-300 px-4 py-2 rounded" to="/">
        Home페이지 이동
      </Link>
    </div>
  );
};

export default About;
