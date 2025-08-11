import { useEffect, useState } from "react";

const UserListFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("서버 오류 발생");

        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return <div>UserListFetch</div>;
};

export default UserListFetch;
