import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { AiFillBackward } from "react-icons/ai";
import { icons } from "react-icons";

const BASE_URI = "https://monnayfinance.online/api";

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
  const [showPassword, setShowPassword] = useState(false);
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
  useEffect(() => {});
  const handleClickShowPassword = () => {
    setShowPassword(showPassword ? false : true);
    // setShowPassword((showPassword) => !showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* <AiFillBackward size={30}/> */}
      {/* <Navbar /> */}
      {/* <div className="h-screen w-full bg-pink-700"> */}
      <div
        // className={styles.signinContainer}
        style={{
          backgroundImage: `url(${Jumbo})`,
          width: "100%",
          height: "910px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.signinFluid}>
          <div className={styles.signin}>
            <div className={styles.createDiv}>
              <Image src="/icon.png" alt=" Logo" width={20} height={20} />
              <p className={styles.create}>Log in</p>
            </div>
            {/* form proper */}
            {/* <div className="w-full"> */}
            <form
              onSubmit={handleSubmit(login)}
              className="py-4 px-4 pt-6 pb-8"
            >
              <div className="mb-4">
                <label className="text-black text-sm" htmlFor="username">
                  Username
                </label>
                <input
                  className="border rounded w-full text-gray-700"
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleChange}
                  required
                  // {...register("username", { required: true })}
                />
                {errors.username && errors.username.type === "required" && (
                  <p className="text-red-700">Please enter a valid username</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-black text-sm" htmlFor="password">
                  Password
                </label>
                <Input
                  className="border rounded w-full px-2 text-gray-700"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleChange}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
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
              <p>
                {`Don't`} have an account?{" "}
                <Link href="/signup">
                  <a href="#">Register</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Signin;
