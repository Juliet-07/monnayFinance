// import React, { useState } from "react";
// import Link from "next/link";
// // import Image from "next/image";
// // import { Logo, NavItem } from ".";
// import NavItem from "./navitem";
// const MENU_LIST = [
//   { text: "Home", href: "/" },
//   { text: "About", href: "/about" },
//   { text: "Faq", href: "/faq" },
//   { text: "Contact", href: "/contact" },
// ];
// const Navbar = () => {
//   const [navActive, setNavActive] = useState(null);
//   const [activeIdx, setActiveIdx] = useState(-1);
//   return (
//     <header className="sticky z-30 top-0 bg-white">
//       <nav className={`nav${navActive ? "active" : ""}`}>
//         <Link href={"/"}>
//           <a onClick={() => setActiveIdx(-1)}>
//             <h1 className="text-xl font-semibold">MonnayFinance</h1>
//           </a>
//         </Link>
//         <div
//           className={`menu_icon${navActive ? "active" : "inactive"}`}
//           onClick={() => setNavActive(!navActive)}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <div className={`nav_menu${navActive ? "active" : ""} `}>
//           {MENU_LIST.map((menu, idx) => (
//             <div
//               onClick={() => {
//                 setActiveIdx(idx);
//                 setNavActive(false);
//               }}
//               key={menu.href}
//             >
//               <NavItem {...menu} active={idx === activeIdx} />
//             </div>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };
// export default Navbar;

import React, { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold text-black" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4 text-black"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4 text-black"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />`
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
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
        </div>

        <div className="hidden md:flex">
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
      </div>
    </nav>
  );
}
