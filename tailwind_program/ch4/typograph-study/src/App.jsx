import Article from "./components/Article";
import DarkModeToggle from "./components/DarkModeToggle";
import DarkText from "./components/DarkText";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div
      className="bg-red-100 min-h-screen flex justify-center 
    items-center Nanum-Square"
    >
      <DarkText />
      <DarkModeToggle />
    </div>
  );
};

export default App;
