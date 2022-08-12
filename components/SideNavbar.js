import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { useRouter } from "next/router";
import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineLogout,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiBarChartSquare } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

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
    label: "History",
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
  {
    id: 6,
    label: "Logout",
    icon: AiOutlineLogout,
    link: "/",
  },
];

function SideNavbar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const router = useRouter();
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer, hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-primary"]: activeMenu.id === menu.id,
      }
    );
  };
  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <AiOutlineMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
            size={30}
            // onClick={handleSidebarToggle}
          />
        </Disclosure.Button>
        <div className="p-2 h-full bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            {/* <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Virtual Dashboard
            </h1> */}
            <Link href="/dashboard">
              <Image src="/monnayLogo.png" width={100} height={50} alt="logo" />
            </Link>
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
                            className={classNames(
                              "text-lg font-medium text-black"
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
        </div>
      </Disclosure>
    </div>
  );
}
export default SideNavbar;
