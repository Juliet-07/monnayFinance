import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Sidebar from "./sidebar";
import { AiOutlineDollar, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 my-2 hover:font-bold`}>
      {children}
    </a>
  );
}

export default function NavDashboard() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      {/* <MobileNav open={open} setOpen={setOpen} /> */}
      <div className="w-3/12 flex items-center justify-center">
        <Link href="/">
          <Image src="/monnayLogo.png" width={140} height={40} alt="logo" />
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        {/* <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        > */}
        {/* hamburger button */}
        {/* <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div> */}
        {/* <NavLink to="/">Dashboard</NavLink> */}
        <div className="hidden md:flex">
          {/* <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/investment">INVESTMENTS</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/courses">COURSES</NavLink>
          <NavLink to="/contact">CONTACT</NavLink> */}
          <NavLink to="/">
            <AiOutlineHome />
          </NavLink>
          <NavLink to="/">
            <MdOutlineNotificationsNone />
          </NavLink>
          <NavLink to="/">
            <CgProfile />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
