import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    name: "pikachu",
    job: "Programmer",
    imageSrc: "1.jpg",
  },
  {
    name: "커비",
    job: "우주비행사",
    imageSrc: "2.jpg",
  },
  {
    name: "가나디",
    job: "작가",
    imageSrc: "3.jpg",
  },
];

const App = () => {
  return (
    <>
      {userData.map((value, index) => (
        <UserCard name={value.name} job={value.job} imageSrc={value.imageSrc} />
      ))}
    </>
  );
};

export default App;
