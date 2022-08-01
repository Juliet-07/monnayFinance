import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";

const invest_uri = "https://monnayfinance.com/api/investment/";

const Invest = () => {
  const router = useRouter();
  const initialValues = {
    plan: ["basic", "standard", "platinum"],
    amount: "",
  };
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [invest, setInvest] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvest({ ...invest, [name]: value });
  };
  const { plan, amount } = invest;
  const Invest = () => {
    try {
      fetch(invest_uri, {
        method: "POST",
        body: JSON.stringify({
          plan: invest.plan,
          amount: invest.amount,
        }),
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (err) {
      console.log(err);
    }
    alert("Amount in balance is insufficient");
  };
  return (
    <>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
      </Head>

      <div className="wrapper">
        {/* Side bar */}
        <div
          className="sidebar"
          // data-color="#057D99"
          data-color="azure"
          data-background-color="white"
        >
          {/* Sidebar Brand */}
          <div className="logo">
            <a href="#" className="simple-text logo-normal">
              <Image src="/monnayLogo.png" width={200} height={50} alt="logo" />
            </a>
          </div>
          {/* Sidebar Brand Ends*/}
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item">
                <Link href="/dashboard/dashboard">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <AiOutlineHome />
                    </i>
                    <p>Dashboard</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard/investments">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <BiBarChartSquare />
                    </i>
                    <p>Investment</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard/history">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <AiOutlineClockCircle />
                    </i>
                    <p>Transaction History</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard/referrals">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <CgProfile />
                    </i>
                    <p>Referrals</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard/settings">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <IoSettingsOutline />
                    </i>
                    <p>Settings</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <AiOutlineLogout />
                    </i>
                    <p>Logout</p>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Side bar */}
        {/* Content */}
        <div className="main-panel">
          {/* <div className="content"> */}
          {/* <div className="container-fluid"> */}
          <div className={styles.investContainer}>
            <div className={styles.investFluid}>
              <div className={styles.invest}>
                <div className={styles.createDiv}>
                  <h6 className={styles.createWithdraw}>Invest</h6>
                  <p>
                    Kindly select the plan you wish to invest in
                    <br />
                    and enter the amount to invest.
                  </p>
                </div>
                {/* form proper */}
                <div className="w-full">
                  <form
                    className=" rounded px-8 pt-6 pb-8 mb-10"
                    onSubmit={handleSubmit(Invest)}
                  >
                    <div className="w-full px-3 mb-6">
                      <label
                        className="block text-black text-sm mb-2"
                        htmlFor="grid-state"
                      >
                        Plan:
                      </label>
                      <div className="relative w-full">
                        <select
                          className="block "
                          id="grid-state"
                          name="plan"
                          onChange={handleChange}
                        >
                          <option value="basic">Basic</option>
                          <option value="standard">Standard</option>
                          <option value="platinum">Platinum</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-black text-sm mb-2"
                        htmlFor="amount"
                      >
                        Amount
                      </label>
                      <input
                        className=" border w-full py-2 px-2 mt-2"
                        id="amount"
                        name="amount"
                        type="number"
                        value={amount}
                        onChange={handleChange}
                      />
                    </div>
                    <button className={styles.investButton} type="submit">
                      Invest
                    </button>
                  </form>
                </div>
                {/* form proper ends */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* Content Ends*/}
      </div>
    </>
  );
};
export default Invest;
