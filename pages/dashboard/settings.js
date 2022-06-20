import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Settings = () => {
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
      <Layout>
        <div className="wrapper">
          {/* Content */}
          <div className="main-panel">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <a className="navbar-brand" href="#">
                    Settings
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon icon-bar"></span>
                  <span className="navbar-toggler-icon icon-bar"></span>
                  <span className="navbar-toggler-icon icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:;">
                        <i className="material-icons">
                          <AiOutlineHome />
                        </i>
                        <p className="d-lg-none d-md-block">Stats</p>
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">
                          <MdOutlineNotificationsNone />
                        </i>
                        <span className="notification">5</span>
                        <p className="d-lg-none d-md-block">Some Actions</p>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Mike John responded to your email
                        </a>
                        <a className="dropdown-item" href="#">
                          You have 5 new tasks
                        </a>
                        <a className="dropdown-item" href="#">
                          You're now friend with Andrew
                        </a>
                        <a className="dropdown-item" href="#">
                          Another Notification
                        </a>
                        <a className="dropdown-item" href="#">
                          Another One
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="navbarDropdownProfile"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">
                          <CgProfile />
                        </i>
                        <p className="d-lg-none d-md-block">Account</p>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownProfile"
                      >
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          Log out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Navbar Ends */}
            <div className="content">
              <div className="container-fluid">
                <div className="mb-10">
                  <div className="rounded h-20 bg-primary">
                    <h4 className="cardLabel text-left">Personal Details</h4>
                  </div>
                </div>
                <form className="w-full max-w-sm">
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                      >
                        Name:
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-300"
                        id="inline-full-name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="inline-password"
                      >
                        Email:
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-300"
                        id="inline-password"
                        type="email"
                      />
                    </div>
                  </div>
                </form>
                <div className="mb-10">
                  <div className="rounded h-20 bg-primary">
                    <h4 className="cardLabel text-left">Account Details</h4>
                  </div>
                  <div className="flex justify-around align-middle">
                    <form className="w-full max-w-sm">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                          >
                            BTC wallet:
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-300"
                            id="inline-full-name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-password"
                          >
                            ETH wallet:
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-300"
                            id="inline-password"
                            type="text"
                          />
                        </div>
                      </div>
                    </form>
                    <form className="w-full max-w-sm">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                          >
                            BTC wallet:
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-300"
                            id="inline-full-name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-password"
                          >
                            ETH wallet:
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-300"
                            id="inline-password"
                            type="text"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="rounded h-20 bg-primary">
                    <h4 className="cardLabel text-left">Account Security</h4>
                  </div>
                </div>
                <button className={styles.settingsButton} type="button">
                  Save changes
                </button>
              </div>
              {/* footer */}
            </div>
            <footer className="footer">
              {/* <div className="flex justify-center align-center"> */}
              <p className="footer-text">
                COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
              </p>
              {/* </div> */}
            </footer>
          </div>
          {/* Content Ends*/}
        </div>
      </Layout>
    </>
  );
};
export default Settings;
