import React from "react";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="flex-1 text-white bg-white-500">{children}</div>
      </div>
    </>
  );
};

export default Layout;
