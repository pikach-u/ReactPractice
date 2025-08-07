import { Outlet } from "react-router-dom";
import AnotherHeader from "./AnotherHeader";

const AnotherLayout = () => {
  return (
    <>
      <AnotherHeader />
      <Outlet />
    </>
  );
};

export default AnotherLayout;
