import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const addUser = async (name) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("사용자 추가 실패");
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
    staleTime: 1000 * 60 * 5,
    retry: 2,
    enabled: true,
  });

  const {} = useMutation();

  useEffect(() => {
    const focusEvent = () => {
      console.log("focus");
    };

    const onlineEvent = () => {
      console.log("online");
    };

    window.addEventListener("focus", focusEvent);

    window.addEventListener("online", onlineEvent);

    return () => {
      window.removeEventListener("focus", focusEvent);
      window.removeEventListener("online", onlineEvent);
    };
  }, []);

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
