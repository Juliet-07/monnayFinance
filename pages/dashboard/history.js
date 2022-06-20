import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";

const History = () => {
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
                    History
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
                  <div className="rounded h-20 bg-primary">
                    <h4 className="cardLabel">Transaction History</h4>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="text-default text-sm">
                            <th>Transaction Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Withdrawal</td>
                              <td>$3,000 (USDT)</td>
                              <td>15-05-2022</td>
                              <td class="text-success">Approved</td>
                            </tr>
                            <tr>
                              <td>Deposit</td>
                              <td>$5,000 (BTC)</td>
                              <td>15-05-2022</td>
                              <td class="text-success">Approved</td>
                            </tr>
                            <tr>
                              <td>Withdrawal</td>
                              <td>$3,000 (USDT)</td>
                              <td>15-05-2022</td>
                              <td class="text-warning">Pending</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
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
export default History;
