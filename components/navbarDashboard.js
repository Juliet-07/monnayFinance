import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-3 my-2 hover:font-bold`}>
      {children}
    </a>
  );
}

export default function NavDashboard() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        // includedLanguages: "en,ms,ta,zh-CN", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    let addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <nav className="flex bg-white px-4 py-4 h-20">
      <div className="w-3/12 flex items-center justify-start">
        <Link href="/dashboard">
          <Image src="/monnayLogo.png" width={140} height={40} alt="logo" />
        </Link>
      </div>
      <div className="flex justify-center items-center relative left-96">
        <div className="hidden md:flex">
          <div id="google_translate_element"></div>
          {/* <NavLink to="#">
            <GiWorld size={30} id="google_translate_element" />
          </NavLink> */}
          <NavLink to="/">
            <MdOutlineNotificationsNone size={30} />
          </NavLink>
          <NavLink to="/">
            <CgProfile size={30} />
          </NavLink>
          <div id="google_translate_element"> </div>
        </div>
      </div>
    </nav>
  );
}
