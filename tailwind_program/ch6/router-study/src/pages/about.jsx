import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();
  const isHome = searchParams.get("isHome");

  useEffect(() => {
    console.log(isHome);
    console.log(typeof isHome);
  }, [isHome]);

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      About
      {isHome && <p>너는 Home에서 이동했다.</p>}
    </div>
  );
};

export default About;
