import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-orange-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      <h1>유저 목록</h1>

      <ul className="mt-8">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex gap-2 hover:underline hover:text-blue-300 cursor-pointer"
            onClick={() => navigate(`/user/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
