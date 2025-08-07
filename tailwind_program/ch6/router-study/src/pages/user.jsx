import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const data = await res.json();

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="bg-green-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      {user && (
        <div>
          <h1>🧑‍💼 유저 정보</h1>
          <p>
            <strong>이름:</strong> {user.name}
          </p>
          <p>
            <strong>이메일:</strong> {user.email}
          </p>
          <p>
            <strong>전화번호:</strong> {user.phone}
          </p>
          <p>
            <strong>웹사이트:</strong> {user.website}
          </p>
          <p>
            <strong>회사:</strong> {user.company?.name}
          </p>
          <p>
            <strong>주소:</strong> {user.address?.city}, {user.address?.street}
          </p>
        </div>
      )}
    </div>
  );
};

export default User;
