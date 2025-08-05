import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState(["pikachu", "피카츄"]);
  const [name, setName] = useState("");

  const addUser = () => {
    if (name.trim()) {
      setUsers([...users, name]);
      setName("");
    }
  };
  return (
    <div>
      <h2>사용자 목록</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <button onClick={addUser}>추가</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
