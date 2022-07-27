import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import NavDashboard from "./navbarDashboard";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: AiOutlineHome,
    link: "/dashboard",
  },
  {
    id: 2,
    label: "Investments",
    icon: BiBarChartSquare,
    link: "/investments",
  },
  {
    id: 3,
    label: "Transaction History",
    icon: AiOutlineClockCircle,
    link: "/history",
  },
  {
    id: 4,
    label: "Referrals",
    icon: CgProfile,
    link: "/referrals",
  },
  {
    id: 5,
    label: "Settings",
    icon: IoSettingsOutline,
    link: "/settings",
  },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [showSidebar, setShowSidebar] = useState("-left-64");

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-70"]: !toggleCollapse,
      ["w-35"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames("p-3 bg-primary absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer, hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-primary"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              {/* <Image src="/icon.png" width={100} height={100} /> */}
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <AiOutlineMenu size={30} />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24 sticky">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem", color: "black" }}>
                      <Icon size={20} />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames("text-lg font-medium text-black")}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="/">
        <div className={`${getNavItemClasses({})} px-3 py-4`}>
          <div style={{ width: "2.5rem" }}>
            <AiOutlineLogout size={20} />
          </div>
          {!toggleCollapse && (
            <a
              className={classNames("text-lg font-medium text-black")}
              href="#"
            >
              Logout
            </a>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
