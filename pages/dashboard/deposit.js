import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Logo from "../../asset/monnayLogo.png";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";

const Deposit = () => {
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
            <a href="/" className="simple-text logo-normal">
              <Image src={Logo} width={200} height={50} />
            </a>
          </div>
          {/* Sidebar Brand Ends*/}
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/dashboard">
                  <i className="material-icons">
                    <AiOutlineHome />
                  </i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/investments">
                  <i className="material-icons">
                    <BiBarChartSquare />
                  </i>
                  <p>Investment</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/history">
                  <i className="material-icons">
                    <AiOutlineClockCircle />
                  </i>
                  <p>Transaction History</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/referrals">
                  <i className="material-icons">
                    <CgProfile />
                  </i>
                  <p>Referrals</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/settings">
                  <i className="material-icons">
                    <IoSettingsOutline />
                  </i>
                  <p>Settings</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="material-icons">
                    <AiOutlineLogout />
                  </i>
                  <p>Logout</p>
                </a>
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
              <div className={styles.withdraw}>
                <div className={styles.createDiv}>
                  <h6 className={styles.create}>Deposit</h6>
                  <p>Choose the method you want to deposit with below.</p>
                </div>
                {/* form proper */}
                <div className="w-full">
                  <form className=" rounded px-8 pt-6 pb-8 mb-6 mt-10">
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-700 text-sm font-bold"
                          htmlFor="password"
                        >
                          Amount
                        </label>
                        <label
                          className="block text-gray-700 text-sm font-bold"
                          htmlFor="password"
                        >
                          Available Bal: $6,000
                        </label>
                      </div>

                      <input
                        className=" border w-full py-2 px-2 mt-2"
                        id="password"
                        name="password"
                        type="password"
                        // value={password}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full md:w-1/2 px-6 mb-4 md:mb-0">
                        <label
                          className="block text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-state"
                        >
                          Wallet Address
                        </label>
                        <div className="relative">
                          <select
                            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                          >
                            <option>Btc</option>
                            <option>Doge</option>
                            <option>Eth</option>
                            <option>Usdt</option>
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
                      <div className="w-full px-3 mb-4 md:mb-0">
                        <input
                          className="border w-full py-2 px-2 mt-4"
                          id="grid-password"
                          name="confirm_password"
                          type="password"
                          //   value={confirm_password}
                          //   onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                      >
                        Comment:
                      </label>
                      <textarea
                        className="border w-full py-2 px-2 mt-4"
                        id="password"
                        name="password"
                        rows={7}
                        value={password}
                        onChange={handleChange}
                      ></textarea>
                    </div> */}
                    {/* <div className={styles.createButtonDiv}> */}
                    {/* <Link href="/dashboard/dashboard"> */}
                    <button className={styles.registrationButton} type="button">
                      Submit
                    </button>
                    {/* </Link> */}
                    {/* </div> */}
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
export default Deposit;
