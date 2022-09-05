import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import NavDashboard from "./components/navbarDashboard";
import Layout from "./components/layout";
import styles from "../styles/Home.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import moment from "moment";

const Investment = () => {
  const [user, setUser] = useState("");
  const [investment, setInvestment] = useState([]);
  const formatDate = (value) => {
    return moment(value).format("HH:MM A DD, MM, YYYY");
  };
  useEffect(() => {
    const fetchInvestmentData = async () => {
      const user = JSON.parse(localStorage.getItem("Juliet"));
      if (user !== null || user !== undefined) {
        setUser(user);
      }
      try {
        await fetch(
          `https://monnayfinance.com/api/investments/${user.id}/active`,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const response = [...[], ...data?.data];
            console.log({ response });

            setInvestment(response);
            console.log({ investment });
          });
      } catch (err) {
        setInvestment([]);
        console.log(err);
      }
    };
    fetchInvestmentData();
  }, []);
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
      <Layout>
        <NavDashboard />
        {/* Content */}
        <div className="main-panel">
          <div className="content">
            <div className="investmentHeader" id={styles.contentHeader}>
              <p className="investmentHeaderText">Investment Plans</p>
            </div>
            <div className="col-md-12 mt-20">
              <div className={styles.investmentContainer}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>
                    <h2 className={styles.basic}>Basic</h2>
                    <p className={styles.basicTitle}>2% ROI Daily</p>
                    <hr />
                  </div>
                  <div className={styles.listContainer}>
                    <ul>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Profit withdrawal: <b>Active daily</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Capital withdrawal: <b>After investment duration</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Minimum investment: <b>$100</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Maximum investment: <b>$4,999</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Daily profit range: <b>$2 - $99.98</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Referral bonus: <b>5% 3% 1%</b>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.buttonDiv}>
                    <Link href="/invest">
                      <button className={styles.cardButton}>INVEST</button>
                    </Link>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>
                    <h2 className={styles.basic}>Standard</h2>
                    <p className={styles.basicTitle}>3.5% ROI Daily</p>
                    <hr />
                  </div>
                  <div className={styles.listContainer}>
                    <ul>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Profit withdrawal: <b>Active daily</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Capital withdrawal: <b>After investment duration</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Minimum investment: <b>$5000</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Maximum investment: <b>$24,999</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Daily profit range: <b>$175-$874.96</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Referral bonus: <b>5% 3% 1%</b>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.buttonDiv}>
                    <Link href="/invest">
                      <button className={styles.cardButton}>INVEST</button>
                    </Link>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>
                    <h2 className={styles.basic}>Platinum</h2>
                    <p className={styles.basicTitle}>5% ROI Daily for 3 days</p>
                    <hr />
                  </div>
                  <div className={styles.listContainer}>
                    <ul>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Profit withdrawal: <b>Active daily</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Capital withdrawal: <b>After investment duration</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Minimum investment: <b>$25,000</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Maximum investment: <b>Unlimited</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Daily profit range: <b>+$1,250</b>
                      </li>
                      <li className={styles.cardList}>
                        <i className="material-icons">
                          <AiFillCheckCircle />
                        </i>
                        Referral bonus: <b>5% 3% 1%</b>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.buttonDiv}>
                    <Link href="/invest">
                      <button className={styles.cardButton}>INVEST</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <div className="investmentActive" id={styles.contentHeader}>
                <p className="investmentActiveText">Active Investments</p>
              </div>
            </div>
            <div className="col-md-10 mb-10">
              <table className="table-auto md:table-auto">
                <thead className="text-default text-xl text-bold bg-white">
                  <tr>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Duration</th>
                    <th>Est. Return</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {investment.map((item, index) => (
                    <tr key={index}>
                      <td>{item?.investmentPlan}</td>
                      <td>${item?.investmentAmount}</td>
                      <td>{item?.investmentDays} day</td>
                      <td>${item?.estimatedReturn}</td>
                      <td>{formatDate(item?.startDate)}</td>
                      <td>{formatDate(item?.endDate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mb-20">
              <div className="investmentActive" id={styles.contentHeader}>
                <p className="investmentActiveText">Recent Investments</p>
              </div>
            </div>
            <div className="col-md-10 mb-20">
              <table className="table-auto md:table-auto">
                <thead className="text-default text-xl text-bold bg-white">
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>End Date</th>
                </thead>
                <tbody>
                  {investment.map((item, index) => (
                    <tr key={index}>
                      <td>{item?.investmentPlan}</td>
                      <td>${item?.investmentAmount}</td>
                      <td>{formatDate(item?.endDate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <footer className="footer">
            <p className="footer-text">
              COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
            </p>
          </footer>
        </div>
        {/* Content Ends*/}
      </Layout>
    </>
  );
};
export default Investment;
