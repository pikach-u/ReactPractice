import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
  return res.json();
};

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
  const [newUser, setNewUser] = useState("");

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

  const {
    mutate,
    isPending,
    isSuccess,
    isError: isMutateError,
    error: mutateError,
  } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      alert(`유저 ${newUser} 생성 완료`);
    },
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.trim()) mutate(newUser);
  };

  if (isLoading) return <p>⏳ 사용자 목록 불러오는 중...</p>;
  if (isError) return <p>❌ 오류 발생: {error.message}</p>;
  return (
    <div>
      <h2>👥 사용자 목록 (React Query)</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="새 사용자 이름"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "추가중.." : "사용자 추가"}
        </button>
      </form>
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
