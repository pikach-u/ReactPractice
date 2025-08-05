import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "pikachu" },
    { id: 2, name: "피카츄" },
  ]);

  const [name, setName] = useState("");

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
