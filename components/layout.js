import React from "react";
import Sidebar from "./sidebar";
import NavDashboard from "./navbarDashboard";

const Layout = ({ children }) => {
  return (
    <>
      <NavDashboard />

      {/* <header className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        Nextjs sidebar menu
      </header> */}
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="flex-1 text-black bg-white-500">{children}</div>
      </div>
    </>
  );
};

export default Layout;
