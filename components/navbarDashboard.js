import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 my-2 hover:font-bold`}>
      {children}
    </a>
  );
}

// function MobileNav({ open, setOpen }) {
//   return (
//     <div
//       className={`absolute top-0 left-0 w-screen h-screen bg-white transform ${
//         open ? "-translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
//     >
//       <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
//         {" "}
//       </div>
//       <div className="flex flex-col ml-4">
//         <Link href="/">
//           <p
//             className="uppercase text-xl font-medium my-4 px-4 mx-4 text-black"
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             Home
//           </p>
//         </Link>
//         <Link href="/about">
//           <p
//             className="uppercase text-xl font-medium my-4 px-4 mx-4 text-black"
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             About Us
//           </p>
//         </Link>
//         <Link href="/investment">
//           <p
//             className="uppercase text-xl font-medium my-4 px-4 mx-4 text-black"
//             href="#"
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             Investments
//           </p>
//         </Link>
//         <Link href="/faq">
//           <p
//             className="uppercase text-xl font-medium my-4 px-4 mx-4 text-black"
//             href="#"
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             Faq
//           </p>
//         </Link>
//         <Link href="/courses">
//           <p
//             className="uppercase text-xl font-medium my-4 px-4 mx-4 text-black"
//             href="#"
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             Courses
//           </p>
//         </Link>
//         <Link href="/contact">
//           <p
//             className="uppercase text-xl font-medium my-4 px-4 mx-4 text-black"
//             href="#"
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             Contact
//           </p>
//         </Link>
//         <Link href="/signup">
//           <button
//             type="button"
//             className={styles.buttonNavSlide}
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             REGISTER
//           </button>
//         </Link>
//         <Link href="/signin">
//           <button
//             type="button"
//             className={styles.buttonOutlineNavSlide}
//             onClick={() =>
//               setTimeout(() => {
//                 setOpen(!open);
//               }, 100)
//             }
//           >
//             LOG IN
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

export default function NavDashboard() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      {/* <MobileNav open={open} setOpen={setOpen} /> */}
      <div className="w-3/12 flex items-center justify-center">
        <Link href="/">
          <Image src="/monnayLogo.png" width={150} height={40} alt="logo" />
        </Link>
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
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/investment">INVESTMENTS</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/courses">COURSES</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
}