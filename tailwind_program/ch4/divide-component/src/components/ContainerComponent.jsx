import { useEffect, useState } from "react";

//1. promise/then
//2. async/await

const ContainerComponent = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>ContainerComponent</div>;
};

export default ContainerComponent;
