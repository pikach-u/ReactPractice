import "./App.css";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <>
      <UserCard name="pikachu" job="Programmer" />
      <UserCard name="pikachu" job="Student" />
    </>
  );
};

export default App;
