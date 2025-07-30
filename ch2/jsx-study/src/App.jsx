import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    id: 1,
    name: "pikachu",
    job: "Programmer",
    imageSrc: "1.jpg",
  },
  {
    id: 2,
    name: "커비",
    job: "우주비행사",
    imageSrc: "2.jpg",
  },
  {
    id: 3,
    name: "가나디",
    job: "작가",
    imageSrc: "3.jpg",
  },
];

const App = () => {
  return (
    <>
      {userData.map((value, index) => (
        <UserCard
          key={value.id}
          name={value.name}
          job={value.job}
          imageSrc={value.imageSrc}
        />
      ))}
    </>
  );
};

export default App;
