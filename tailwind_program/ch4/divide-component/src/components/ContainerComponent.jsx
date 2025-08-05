import { useEffect, useState } from "react";
import UserList from "./UserList";

// 1. promise/then
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => setUsers(data));
// 2. async/await

const ContainerComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => console.log(users), [users]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return <UserList users={users} />;
};

export default ContainerComponent;
