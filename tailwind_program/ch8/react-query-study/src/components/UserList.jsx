import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("사용자 정보를 가져오는 데 실패했습니다");
  return res.json();
};

const UserList = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>⏳ 사용자 목록 불러오는 중...</p>;
  if (isError) return <p>❌ 오류 발생: {error.message}</p>;
  return (
    <div>
      <h2>👥 사용자 목록 (React Query)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
