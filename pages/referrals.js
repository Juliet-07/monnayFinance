// https://www.youtube.com/watch?v=S4MhQ6peq8A
import React from "react";
import Head from "next/head";
import NavDashboard from "../components/navbarDashboard";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

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
          <div className="historyHeader" id={styles.historyHeader}>
            <p className="historyHeaderText" id={styles.historyHeaderText}>
              Referrals
            </p>
          </div>
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-sm border border-gray-200 relative md:left-[318px]">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xl text-bold bg-white">
                  <tr>
                    <th className="24 p-2 whitespace-nowrap">Username</th>
                    <th className="24 p-2 whitespace-nowrap">E-mail</th>
                    <th className="32 p-2 whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2 whitespace-nowrap">Ian</td>
                    <td className="p-2 whitespace-nowrap">
                      i@gmail.com
                    </td>
                    <td className="text-success p-2 whitespace-nowrap">
                      Active
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      Amber
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      a@gmail.com
                    </td>
                    <td className="text-success p-2 whitespace-nowrap">
                      Active
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      Emelda
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      e@gmail.com
                    </td>
                    <td className="text-warning p-2 whitespace-nowrap">
                      Inactive
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div>
            <p>referral commmission box</p>
          </div> */}
          </div>
          {/* footer */}
          {/* <footer className="footer" id={styles.footer}>
          <p className="footer-text" id={styles.footerText}>
            COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
          </p>
        </footer> */}
        </div>
        {/* Content Ends*/}
      </Layout>
    </>
  );
};
export default Referrals;
