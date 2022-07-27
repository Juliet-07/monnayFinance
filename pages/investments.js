import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Investment = () => {
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
        {/* Content */}
        <div className="main-panel">
          <div className="content">
            <div className="investmentHeader">
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
              <div className="investmentActive">
                <p className="investmentActiveText">Active Investments</p>
              </div>
            </div>
            <div className="col-md-12">
              <table className="table-auto md:table-auto">
                <thead className="text-default text-xl text-bold">
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
                  <tr>
                    <td>Basic</td>
                    <td>$300</td>
                    <td>1 day</td>
                    <td>$306</td>
                  </tr>
                  <tr>
                    <td>Premium</td>
                    <td>$30,000</td>
                    <td>3 days</td>
                    <td>$31,500</td>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>$12,000</td>
                    <td>1 day</td>
                    <td>$12,420</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-20">
              <div className="investmentActive">
                <p className="investmentActiveText">Recent Investments</p>
              </div>
            </div>
            <div className="col-md-12">
              <table className="table-auto md:table-auto">
                <thead className="text-default text-xl text-bold">
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>End Date</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Basic</td>
                    <td>$300</td>
                    <td>1 day</td>
                    {/* <td>$306</td> */}
                  </tr>
                  <tr>
                    <td>Premium</td>
                    <td>$30,000</td>
                    <td>3 days</td>
                    {/* <td>$31,500</td> */}
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>$12,000</td>
                    <td>1 day</td>
                    {/* <td>$12,420</td> */}
                  </tr>
                </tbody>
              </table>
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
      </Layout>
    </>
  );
};
export default Investment;
