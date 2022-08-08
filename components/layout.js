import React from "react";
import Sidebar from "./sidebar";
import NavDashboard from "./navbarDashboard";
import styles from "../styles/Home.module.css";
import Navbar from "./check";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row justify-start">
      <Sidebar />
      <div className="flex flex-col w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
