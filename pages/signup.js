import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const BASE_URI = "https://monnayfinance.online/api";

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
  const [showPassword, setShowPassword] = useState(false);
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
  const passwordErrorMessage = (
    <p className="text-red-700 font-sans font-700 mt-3">
      Passwords {`don't`} match!
    </p>
  );
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
      {/* <Navbar /> */}
      {/* <div className={styles.signupContainer}> */}
      <div className="bg-white shadow-md rounded px-6 py-6 pt-6 pb-6 mb-4 flex flex-col mt-10 mx-2 columns-md">
        <div className={styles.createDiv}>
          <Image
            src="/icon.png"
            alt=" Logo"
            width={20}
            height={20}
            className={styles.createDivImg}
          />
          <p className={styles.create}>Create Account</p>
        </div>
        {/* form proper */}
        <form onSubmit={handleSubmit(signup)} className=" mt-3">
          <div className=" mb-4">
            <label className="text-black text-sm" htmlFor="fullname">
              Full name
            </label>
            <input
              className=" border rounded  text-gray-700"
              id="fullname"
              name="fullname"
              type="text"
              value={fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-black text-sm" htmlFor="username">
              Username
            </label>
            <input
              className="border rounded  text-gray-700"
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-black text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded  text-gray-700"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-black text-sm" htmlFor="password">
              Password
            </label>
            <Input
              className="w-full border rounded  text-gray-700"
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
            />
          </div>
          <div className="mb-4">
            <label className="text-black text-sm" htmlFor="grid-confirm">
              Confirm Password
            </label>
            <Input
              className="w-full border rounded  text-gray-700"
              id="grid-password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={handleChange}
              error={passwordError ? true : false}
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
            />
            {passwordError && passwordErrorMessage}
          </div>
          <div className="md:flex md:items-center mb-6">
            <label className="block tracking-wide text-gray-700 text-xs mb-2">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span>
                I agree to all the{" "}
                <Link href="/terms">
                  <a>Terms</a>
                </Link>{" "}
                and{" "}
                <Link href="/terms">
                  <a>Privacy Policy</a>
                </Link>
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
        <div className="flex justify-center align-center mt-2">
          <p>
            Already have an account?{" "}
            <Link href="/signin">
              <a href="#">Log In</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
