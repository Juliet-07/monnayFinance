import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

const BASE_URI = "https://monnayfinance.com/api";

const Signup = () => {
  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [details, setDetails] = useState(initialValues);
  const [passwordError, setPasswordError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const { fullname, username, email, password, confirmPassword } = details;
  const signup = () => {
    if (password === confirmPassword) {
      try {
        fetch(BASE_URI + "/auth/register", {
          method: "POST",
          body: JSON.stringify({
            fullname: details.fullname,
            username: details.username,
            email: details.email,
            password: details.password,
            confirmPassword: details.confirmPassword,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((json) => console.log(json));
        alert("Registration Complete");
        router.push("/reg-successful");
      } catch (err) {
        console.log(err.message);
        setPasswordError(false);
      }
    } else {
      setPasswordError(true);
    }
  };
  useEffect(() => {});

  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      {/* <div className={styles.signupContainer}> */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2  columns-md">
        <div className={styles.createDiv}>
          <Image src="/icon.png" alt=" Logo" width={20} height={20} />
          <p className={styles.create}>Create Account</p>
        </div>
        {/* form proper */}
        <form onSubmit={handleSubmit(signup)} className="w-full mt-3">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
              <label
                className="text-black text-sm font-bold"
                htmlFor="fullname"
              >
                Full name
              </label>
              <input
                className=" w-full bg-gray-200 text-gray-700 py-3 px-2"
                id="fullname"
                name="fullname"
                type="text"
                value={fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className="text-black text-sm font-bold"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-2 py-2">
              <label className="text-black text-sm font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label
                className="text-black text-sm font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label
                className="text-black text-sm font-bold"
                htmlFor="grid-confirm"
              >
                Confirm Password
              </label>
              <input
                className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                id="grid-password"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={handleChange}
                onError={passwordError ? true : false}
              />
              {passwordError && (
                <p className="text-red-700 font-sans font-700">
                  Passwords don't match!
                </p>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span>
                I agree to all the <font color="#057d99">Terms</font> and{" "}
                <font color="#057d99">Privacy Policy</font>
              </span>
            </label>
          </div>
          <div className={styles.createButtonDiv}>
            <button className={styles.signupButton} type="submit">
              Create account
            </button>
          </div>
        </form>
        {/* form proper ends */}
      </div>
      {/* </div> */}
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/monnayFooter.png"
              width={100}
              height={30}
              alt="footer image"
            />
            <p style={{ color: "#ffffff", marginTop: 10, textAlign: "center" }}>
              Investment opportunities in multiple
              <br /> markets, one account.
            </p>
          </div>
          <ul className={styles.footerBottomText}>
            <h5>Quick links</h5>
            <Link href="/">
              <li>
                <a href="#">Home</a>
              </li>
            </Link>
            <Link href="/about">
              <li>
                <a href="#">About us</a>
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <a href="#">Contact us</a>
              </li>
            </Link>
            <Link href="/faq">
              <li>
                <a href="#">FAQ</a>
              </li>
            </Link>
          </ul>
          <ul className={styles.footerBottomText}>
            <h5>Address</h5>
            <li>Vanha Talvitie 11 C,</li>
            <li>HELSINKI 00580 Finland</li>
            <br />
            <br />
            <lh>Email:</lh>
            <li>contact@monnay.finance</li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerBottomText}>
            COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Signup;
