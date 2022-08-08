import React from "react";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row justify-start">
      <Sidebar />
      <div className="flex flex-col w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
