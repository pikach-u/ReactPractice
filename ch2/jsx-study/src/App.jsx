import "./App.css";
import UserCard from "./components/UserCard";

const App = () => {
  const name = "pikachu";
  return (
    <>
      <div className="card">
        <img src="./avatar.webp" alt="avatar" />
        <h2>{name}</h2>
        <h2>Programmer</h2>
      </div>
      <UserCard />
    </>
  );
};

export default App;
