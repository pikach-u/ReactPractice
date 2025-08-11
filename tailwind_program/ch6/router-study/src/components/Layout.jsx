import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Layout = () => {
  const [user, setUser] = useState("");

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet context={{ user }} />
    </>
  );
};

export default Layout;
