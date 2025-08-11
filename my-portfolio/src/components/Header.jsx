import { Button } from "@radix-ui/themes";
import { useEffect } from "react";

const Header = ({ profile }) => {
  useEffect(() => console.log(profile), []);

  return (
    <header className="bg-green-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-pink-100 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          {profile.name}
        </h1>
        <h2
          className="text-2xl text-gray-600 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.title}
        </h2>
        <p
          className="text-lg mb-8 text-gray-500 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {profile.one_liner}
        </p>

        <div>
          <Button>GitHub</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
