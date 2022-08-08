import React from "react";
import Head from "next/head";
import NavDashboard from "../components/navbarDashboard";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
const Referrals = () => {
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
            <div className="investmentActive" id={styles.contentHeader1}>
              <p className="investmentActiveText">Referrals</p>
            </div>
            <div className="col-md-10 mt-20 mb-56">
              <table className="table-auto md:table-auto">
                <thead className="text-default text-xl text-bold">
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>dozykeys</td>
                    <td>j@gmail.com</td>
                    <td className="text-success">Active</td>
                  </tr>
                  <tr>
                    <td>dozykeys</td>
                    <td>j@gmail.com</td>
                    <td className="text-success">Active</td>
                  </tr>
                  <tr>
                    <td>dozykeys</td>
                    <td>j@gmail.com</td>
                    <td className="text-warning">Inactive</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* footer */}
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
export default Referrals;
