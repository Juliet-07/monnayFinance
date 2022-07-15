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
      {/* <div className="h-screen w-full bg-pink-700"> */}
      {/* <div className={styles.signinContainer}> */}
      <div className={styles.createDiv}>
        <Image src="/icon.png" alt=" Logo" width={20} height={20} />
        <p className={styles.create}>Log in</p>
      </div>
      {/* form proper */}
      {/* <div className="w-full"> */}
      <form onSubmit={handleSubmit(login)} className="py-4 px-4 pt-6 pb-8">
        <input
          name="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <button className={styles.signinButton} type="submit">
          Log in
        </button>
      </form>
      {/* </div> */}
      {/* form proper ends */}
      {/* </div> */}
    </div>
  );
};
export default Signin;
