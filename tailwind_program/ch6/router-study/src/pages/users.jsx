const Users = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-orange-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      Users
    </div>
  );
};

export default Users;
