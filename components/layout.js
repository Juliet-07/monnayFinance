import React from "react";
import Sidebar from "./sidebar";
import SideNavbar from "./SideNavbar";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row md:flex min-h-screen relative">
      {/* <Sidebar /> */}
      <SideNavbar />
      <div className="flex flex-col w-full h-full ">{children}</div>
    </div>
  );
};

export default Layout;
