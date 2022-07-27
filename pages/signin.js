import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Link from "next/link";

const BASE_URI = "https://monnayfinance.com/api";

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const { username, password } = profile;
  const [error, setError] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("Juliet")) {
    }
  }, []);
  const login = () => {
    setError(false);
    try {
      fetch(BASE_URI + "/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: profile.username,
          password: profile.password,
        }),
        headers: {
          // Authorization: "Bearer Token",
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
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      {/* <div className="h-screen w-full bg-pink-700"> */}
      <div className={styles.signinContainer}>
        <div className={styles.createDiv}>
          <Image src="/icon.png" alt=" Logo" width={20} height={20} />
          <p className={styles.create}>Log in</p>
        </div>
        {/* form proper */}
        {/* <div className="w-full"> */}
        <form onSubmit={handleSubmit(login)} className="py-4 px-4 pt-6 pb-8">
          <div className="mb-4">
            <label className="text-black text-sm font-bold" htmlFor="username">
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
            <label className="text-black text-sm font-bold" htmlFor="password">
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
          <div className="flex items-center justify-between align-center mt-8">
            <label className="flex justify-center  text-gray-700 text-xm">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a className="text-xm mb-2" href="#">
              Forgot Password?
            </a>
          </div>
          {/* <div className={styles.createButtonDiv}> */}
          <button className={styles.signinButton} type="submit">
            Log in
          </button>
          <div className={`${!error ? "hidden" : ""}`}>
            <p className="text-red-700">INCORRECT USERNAME OR PASSWORD</p>
          </div>
          {/* </div> */}
        </form>
        {/* </div> */}
        {/* form proper ends */}
        <div className="flex justify-center align-center mt-5">
          <p>Don't have an account? </p>
          <Link href="/signup">
            <a>Register</a>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Signin;
