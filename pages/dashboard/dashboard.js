import React from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../asset/monnayLogo.png";
import Coin from "../../asset/monnayCoin.png";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout, AiOutlineDollar } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
const Dashboard = () => {
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
              <li className="nav-item active">
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
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="#">
                  Dashboard
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
              <div className="mb-20">
                <div className="card">
                  <div className="flex justify-between">
                    <h4 className="cardName">Welcome John James Doe</h4>
                    <p className="cardTime">Last Access: 25-02-2022 16.05</p>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="card">
                  <div className="flex justify-between">
                    <Image src={Coin} width={700} height={200} />
                    <p className="cardPrice">
                      Available balance:
                      <br /> $ 30,000
                    </p>
                    <a href="/dashboard/withdraw" className="cardButton">
                      Withdraw
                    </a>
                    <a href="/dashboard/deposit" className="cardButton1">
                      Deposit
                    </a>
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
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-danger card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">
                          <AiOutlineDollar />
                        </i>
                      </div>
                      <p class="card-category">Pending Withdrawal</p>
                      <h3 class="card-title">$ 0.00</h3>
                    </div>
                    <div class="card-footer">
                      <i class="material-icons">
                        <FcMoneyTransfer />
                      </i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-info card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">
                          <AiOutlineDollar />
                        </i>
                      </div>
                      <p class="card-category">Total Earning</p>
                      <h3 class="card-title">$ 6,000.00</h3>
                    </div>
                    <div class="card-footer">
                      <i class="material-icons">
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
    </>
  );
};
export default Dashboard;
