import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { AiOutlineDollar, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";

// const BASE_URI = `https://monnayfinance.com/api/user/profile/${user.id}`;
const BASE_URI = "https://monnayfinance.com/api/user/profile";

export async function getServerSideProps() {
  const res = await fetch(BASE_URI, {
    headers: new Headers({
      Authorization: "Bearer token",
      "Content-type": "application/json; charset=UTF-8",
    }),
  });
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const Dashboard = ({ data }) => {
  console.log(data);

  const [user, setUser] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Juliet"));
    if (user !== null || user !== undefined) {
      setUser(user);
    }
  }, []);
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
                    Dashboard
                  </a>
                </div>

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
                    <li className="nav-item dropdown">
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
                          You are now friends with Andrew
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
                <div className="mb-20 pt-6 mt-3">
                  <div className="card">
                    <div className="flex justify-between">
                      <h4 className="cardName">Welcome {user.username}</h4>
                      {/* <h4 className="cardName">Welcome {user.name}</h4> */}
                      <p className="cardTime">Last Access: {user.lastlogin}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-20">
                  <div className="card">
                    <div className="flex justify-between">
                      <Image
                        src="/monnayCoin.png"
                        width={700}
                        height={200}
                        alt="coin"
                      />
                      <p className="cardPrice">
                        Available balance:
                        <br /> $ 30,000
                      </p>
                      <Link href="/dashboard/withdraw">
                        <a href="#" className="cardButton">
                          Withdraw
                        </a>
                      </Link>
                      <Link href="/dashboard/deposit">
                        <a href="#" className="cardButton1">
                          Deposit
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* card row */}
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header card-header-warning card-header-icon">
                        <div className="card-icon">
                          <i className="material-icons">
                            <AiOutlineDollar />
                          </i>
                        </div>
                        <p className="card-category">Active Investment</p>
                        <h3 className="card-title">$ 2,000.00</h3>
                      </div>
                      <div className="card-footer">
                        <i className="material-icons">
                          <FcMoneyTransfer />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header card-header-success card-header-icon">
                        <div className="card-icon">
                          <i className="material-icons">
                            <AiOutlineDollar />
                          </i>
                        </div>
                        <p className="card-category">Total Withdrawn</p>
                        <h3 className="card-title">$ 3,000.00</h3>
                      </div>
                      <div className="card-footer">
                        <i className="material-icons">
                          <FcMoneyTransfer />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header card-header-danger card-header-icon">
                        <div className="card-icon">
                          <i className="material-icons">
                            <AiOutlineDollar />
                          </i>
                        </div>
                        <p className="card-category">Pending Withdrawal</p>
                        <h3 className="card-title">$ 0.00</h3>
                      </div>
                      <div className="card-footer">
                        <i className="material-icons">
                          <FcMoneyTransfer />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header card-header-info card-header-icon">
                        <div className="card-icon">
                          <i className="material-icons">
                            <AiOutlineDollar />
                          </i>
                        </div>
                        <p className="card-category">Total Earning</p>
                        <h3 className="card-title">$ 6,000.00</h3>
                      </div>
                      <div className="card-footer">
                        <i className="material-icons">
                          <FcMoneyTransfer />
                        </i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/* card row ends */}
                {/* chart section */}
                <div className="flex justify-between align-center">
                  <div className="card w-50">
                    <p className="refer">refer and earn</p>
                    <p className="refer1">
                      Use the link below to invite your friends
                    </p>
                    <input placeholder="link for referral" />
                  </div>

                  {/* <Image src={Chart} width={300} height={300} /> */}
                </div>
                {/* chart section ends */}
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
export default Dashboard;
