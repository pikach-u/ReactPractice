import { Button } from "@radix-ui/themes";
import { useEffect } from "react";
import { FaGithubAlt, FaBlogger, FaLinkedin, FaCat } from "react-icons/fa";

const Header = ({ profile }) => {
  useEffect(() => console.log(profile), []);

  return (
    <header className="bg-yellow-100 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="bg-blue-100 max-w-4xl mx-auto">
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

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button asChild variant="outline">
            <a
              href={profile.links.github_url}
              target="_blank"
              rel="nooper noreferrer"
            >
              <FaGithubAlt className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={profile.links.blog_url}
              target="_blank"
              rel="nooper noreferrer"
            >
              <FaBlogger className="w-4 h-4 mr-2" />
              Blog
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={profile.links.linkedin_url}
              target="_blank"
              rel="nooper noreferrer"
            >
              <FaLinkedin className="w-4 h-4 mr-2" />
              Linkedin
            </a>
          </Button>
          <Button asChild>
            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCat className="w-4 h-4 mr-2" />
              Contact
            </a>
          </Button>
        </div>
        <div className="inline-block px-6 py-3 bg-blue-100 text-blue-700 rounded-full mb-8 border border-blue-200 animate-pluse-slow">
          <span className="font-semibold">{profile.availability}</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            "about",
            "skills",
            "projects",
            "experience",
            "writing",
            "contact",
          ].map((section, index) => (
            <button key={section}>{section}</button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
