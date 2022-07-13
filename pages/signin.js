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

// export async function getServerSideProps() {
//   const res = await fetch(BASE_URI + "/auth/register");
// }

const Signin = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [profile, setProfile] = useState(initialValues);
  if (
    typeof input["password"] !== "undefined" &&
    typeof input["confirm_password"] !== "undefined"
  ) {
    if (input["password"] != input["confirm_password"]) {
      isValid = false;

      errors["password"] = "Passwords don't match.";
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const { username, password } = profile;
  const login = () => {
    try {
      fetch(BASE_URI + "/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: profile.username,
          password: profile.password,
        }),
        headers: {
          // Authorization: "Bearer{token}",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user);
          let userDetail = JSON.stringify(user.data);
          localStorage.setItem("Juliet", userDetail);
        });
      router.push("/dashboard");
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
      <Navbar />
      <div className="h-screen w-full">
        <div className={styles.signinContainer}>
          <div className={styles.createDiv}>
            <Image src="/icon.png" alt=" Logo" width={20} height={20} />
            <p className={styles.create}>Log in</p>
          </div>
          {/* form proper */}
          <div className="w-full">
            <form
              onSubmit={handleSubmit(login)}
              className="rounded px-4 pt-6 pb-8 mb-10"
            >
              <div className="mb-4">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="border rounded w-full py-2 px-2 text-gray-700"
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleChange}
                  // {...register("username", { required: true })}
                />
                {errors.username && errors.username.type === "required" && (
                  <p className="text-red-700">Please enter a valid username</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="text-black text-sm font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border rounded w-full py-2 px-2 text-gray-700"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  // {...register("password", { required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-red-700">Field Required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="text-red-700">
                    Please enter a minimum of 6 characters
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between align-middle mt-8">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                  <input type="checkbox" className="mr-2 leading-tight" />
                  <span>Remember me</span>
                </label>
                <a className="font-bold text-xm text-blue-300 mb-6" href="#">
                  Forgot Password?
                </a>
              </div>
              {/* <div className={styles.createButtonDiv}> */}
              <button className={styles.signinButton} type="submit">
                Log in
              </button>
              {/* </div> */}
            </form>
          </div>
          {/* form proper ends */}
        </div>
      </div>
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
            <lh>username:</lh>
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
export default Signin;
