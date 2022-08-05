import React from "react";
import Sidebar from "./sidebar";
import NavDashboard from "./navbarDashboard";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layoutContainer}>
        <NavDashboard />
        {/* <header className=" sticky h-14 flex justify-center items-center">
          <NavDashboard />
        </header> */}
        <div className="flex flex-row justify-start align-center">
          <Sidebar />
          <div className="flex-1 text-black bg-white">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
