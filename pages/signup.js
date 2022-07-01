import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const BASE_URI = "https://monnayfinance.com/api";

const Signup = () => {
  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    // confirm_password: "",
    btc: "",
    doge: "",
    eth: "",
    usdt: "",
    security_question: "",
    answer: "",
  };
  const router = useRouter();
  const [register, setRegister] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const {
    fullname,
    username,
    email,
    password,
    // confirm_password,
    btc,
    doge,
    eth,
    usdt,
    security_question,
    answer,
  } = register;
  const signup = () => {
    try {
      fetch(BASE_URI + "/auth/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: register.fullname,
          username: register.username,
          email: register.email,
          password: register.password,
          // confirm_password: register.confirm_password,
          btc: register.btc,
          doge: register.doge,
          eth: register.eth,
          usdt: register.usdt,
          security: register.security,
          answer: register.answer,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      router.push("/reg-successful");
    } catch (err) {
      console.log(err.message);
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
      <main className={styles.main}>
        {/* <div className={styles.signupContainer}> */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-50 columns-md">
          <div className={styles.createDiv}>
            <Image src="/icon.png" alt=" Logo" width={20} height={20} />
            <p className={styles.create}>Create Account</p>
          </div>
          {/* form proper */}
          <form className="w-full mt-3">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-full-name"
                >
                  Full name
                </label>
                <input
                  className=" w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-full-name"
                  name="fullname"
                  type="text"
                  value={fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-user-name"
                >
                  Username
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-user-name"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-2 py-2">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
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
                  name="confirm_password"
                  type="password"
                  // value={confirm_password}
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-btc"
                >
                  BTC Wallet Address
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-btc"
                  name="btc"
                  type="text"
                  value={btc}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-doge"
                >
                  ETH Wallet Address
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-eth"
                  name="eth"
                  type="text"
                  value={eth}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-eth"
                >
                  DOGE Wallet Address
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-doge"
                  name="doge"
                  type="text"
                  value={doge}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-usdt"
                >
                  USDT Wallet Address
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-usdt"
                  name="usdt"
                  type="text"
                  value={usdt}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-security"
                >
                  Security Question
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-security"
                  name="security_question"
                  type="text"
                  value={security_question}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="grid-answer"
                >
                  Answer
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 py-3 px-2"
                  id="grid-answer"
                  name="answer"
                  type="text"
                  value={answer}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0 mt-7">
              <p>
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  <input type="checkbox" className="filled-in" />
                  <span>
                    I agree to all the <font color="#057d99">Terms</font> and{" "}
                    <font color="#057d99">Privacy Policy</font>
                  </span>
                </label>
              </p>
            </div>
            <div className={styles.createButtonDiv}>
              <button
                className={styles.signupButton}
                type="button"
                onClick={() => signup()}
              >
                Create account
              </button>
            </div>
          </form>
          {/* form proper ends */}
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <p>Image & Text</p>
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
