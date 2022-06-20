import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import Logo from "../../asset/monnayLogo.png";

const BASE_URI = "https://monnayfinance.com/api";

const Signin = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const [profile, setProfile] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const { username, password } = profile;
  const router = useRouter();
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
        .then((json) => console.log(json));
      router.push("/dashboard/dashboard");
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
      {/* Nav section 1 */}
      <div className="navbar-fixed">
        <nav className={styles.addressBar}>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <i className="material-icons left">
                <IoLocationOutline />
              </i>
              Vanha Telhitie 11c{" "}
            </li>
            <li>
              <i className="material-icons left">
                <AiOutlineClockCircle />
              </i>
              Mon - Fri 8am-6pm
            </li>
          </ul>
        </nav>
      </div>
      {/* Nav section 2 */}
      <div className="navbar-fixed">
        <nav className={styles.topBar}>
          <div className="nav-wrapper">
            <Image src={Logo} width={100} height={30} />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link href="/">
                <li>
                  <a href="#" className={styles.navLink}>
                    HOME
                  </a>
                </li>
              </Link>
              <Link href="/about">
                <li>
                  <a href="#" className={styles.navLink}>
                    ABOUT US
                  </a>
                </li>
              </Link>
              <Link href="/investment">
                <li>
                  <a href="#" className={styles.navLink}>
                    INVESTMENTS
                  </a>
                </li>
              </Link>
              <Link href="/faq">
                <li>
                  <a href="#" className={styles.navLink}>
                    FAQ
                  </a>
                </li>
              </Link>
              <Link href="/courses">
                <li>
                  <a href="#" className={styles.navLink}>
                    COURSES
                  </a>
                </li>
              </Link>
              <Link href="/contact">
                <li>
                  <a href="#" className={styles.navLink}>
                    CONTACT
                  </a>
                </li>
              </Link>
              <Link href="/auth/signup">
                <li>
                  <a href="#" className={styles.button}>
                    REGISTER
                  </a>
                </li>
              </Link>
              <Link href="/auth/sigin">
                <li>
                  <button href="#" className="btn disabled">
                    LOG IN
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronFluid}>
            <div className={styles.signinContainer}>
              <div className={styles.createDiv}>
                <Image src="/icon.png" alt=" Logo" width={20} height={20} />
                <p className={styles.create}>Log in</p>
              </div>
              {/* form proper */}
              <div className="w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className=" border rounded w-full py-2 px-2"
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className=" border rounded w-full py-2 px-2"
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <p>
                      <label
                        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-email"
                      >
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span>Remember me</span>
                      </label>
                    </p>
                    <a className="font-bold text-md text-blue-300" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  {/* <div className={styles.createButtonDiv}> */}
                  {/* <Link href="/dashboard/dashboard"> */}
                  <button
                    className={styles.registrationButton}
                    type="button"
                    onClick={() => {
                      login();
                      console.log(login);
                    }}
                  >
                    Log in
                  </button>
                  {/* </Link> */}
                  {/* </div> */}
                </form>
              </div>
              {/* form proper ends */}
            </div>
          </div>
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
export default Signin;
