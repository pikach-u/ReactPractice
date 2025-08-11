import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("사용자 정보를 가져오는 데 실패했습니다");
  return res.json();
};

const UserList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const {} = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  useEffect(() => console.log("data", data), [data]);
  useEffect(() => console.log("isLoading", isLoading), [isLoading]);
  useEffect(() => console.log("isError", isError), [isError]);
  useEffect(() => console.log("error", error), [error]);

  return <div>UserList</div>;
};

export default UserList;
