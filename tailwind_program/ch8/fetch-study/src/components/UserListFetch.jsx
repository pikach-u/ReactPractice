import { useEffect, useState } from "react";

const UserListFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/usersssss"
        );
        if (!res.ok) throw new Error("서버 오류 발생");

        const data = await res.json();
        setUsers(data);
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
  if (error) return;

  return <div>UserListFetch</div>;
};

export default UserListFetch;
