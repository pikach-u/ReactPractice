import { useState } from "react";

let currentId = 1;

const UserList = () => {
  const [users, setUsers] = useState(["pikachu", "피카츄"]);
  const [name, setName] = useState("");

  const addUser = () => {
    if (name.trim()) {
      setUsers([...users, name]);
      setName("");
    }
  };

  const shuffle = () => {
    setUsers([...users].reverse());
  };

  const deleteUser = (indexToDelete) => {
    setUsers(users.filter((_, index) => index !== indexToDelete));
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
      <button onClick={shuffle}>셔플</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button className="ml-2" onClick={() => deleteUser(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
