import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiFillForward,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: AiOutlineHome,
    link: "/dashboard/dashboard",
  },
  {
    id: 2,
    label: "Investments",
    icon: BiBarChartSquare,
    link: "/dashboard/investments",
  },
  {
    id: 3,
    label: "Transaction History",
    icon: AiOutlineClockCircle,
    link: "/dashboard/history",
  },
  {
    id: 4,
    label: "Referrals",
    icon: CgProfile,
    link: "/dashboard/referrals",
  },
  {
    id: 5,
    label: "Settings",
    icon: IoSettingsOutline,
    link: "/dashboard/settings",
  },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded-full bg-primary absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
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
              Logo
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <AiFillForward size={25} />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menuItems.id}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-lg font-medium text-default"
                        )}
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

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <AiOutlineLogout />
        </div>
        {!toggleCollapse && (
          <span
            className={classNames("text-lg font-medium text-default")}
            href="/"
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
