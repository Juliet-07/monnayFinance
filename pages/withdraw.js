import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";

const Withdraw = () => {
  return (
    <>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
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
        <div className="main-panel">
          <div className={styles.investContainer}>
            <div className={styles.investFluid}>
              <div className={styles.withdraw}>
                <div className={styles.createDiv}>
                  <h6 className={styles.createWithdraw}>Withdraw</h6>
                  <p>Choose the account to make your withdrawal.</p>
                </div>
                {/* form proper */}
                <div className="w-full">
                  <form className=" rounded px-10 pt-6 pb-8 mb-10">
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label className="text-black text-sm" htmlFor="amount">
                          Amount
                        </label>
                        <label
                          className=" text-gray-500 text-sm"
                          htmlFor="amount"
                        >
                          Available Balance: $4.00
                        </label>
                      </div>
                      <input
                        className=" border w-full py-2 px-2 mt-2"
                        id="amount"
                        name="amount"
                        type="number"
                        // value={password}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="flex w-full md:w-1/2 px-6 md:mb-0">
                      <label
                        className="block text-black text-sm"
                        htmlFor="grid-state"
                      >
                        Wallet address:
                      </label>
                      <div className="relative w-full">
                        <select className="block" id="grid-state">
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
                    <div className="mb-4">
                      <input
                        className="border w-full py-2 px-2 mt-2"
                        type="text"
                        //   value={confirm_password}
                        //   onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-black text-sm"
                        htmlFor="comment"
                      >
                        Comment:
                      </label>
                      <textarea
                        className="border w-full py-2 px-2 mt-4"
                        id="comment"
                        rows={7}
                        // value={password}
                        // onChange={handleChange}
                      ></textarea>
                    </div>
                    {/* <div className={styles.createButtonDiv}> */}
                    <Link href="/req-successful">
                      <button className={styles.withdrawButton} type="button">
                        Withdraw
                      </button>
                    </Link>
                    {/* </div> */}
                  </form>
                </div>
                {/* form proper ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Withdraw;
