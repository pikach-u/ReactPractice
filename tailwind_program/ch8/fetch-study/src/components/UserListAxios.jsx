import axios from "axios";
import { useEffect, useState } from "react";

const UserListAxios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const res = await fetch("https://jsonplaceholder.typicode.com/users");

        // if (!res.ok) throw new Error("서버 오류 발생");

        // const data = await res.json();
        // setUsers(data);

        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        console.log(res);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>⏳ 사용자 목록 불러오는 중...</p>;
  if (error) return <p>❌ 오류 발생: {error}</p>;

  return (
    <div>
      <h2>👥 사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListAxios;
