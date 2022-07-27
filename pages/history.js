import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

const History = () => {
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
            <div className="investmentActive">
              <p className="investmentActiveText">Transaction History</p>
            </div>
            <div className="col-md-12 mt-20">
              <table className="table-auto md:table-auto">
                <thead className="text-default text-xl text-bold">
                  <tr>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Withdrawal</td>
                    <td>$3,000 (USDT)</td>
                    <td>15-05-2022</td>
                    <td className="text-success">Approved</td>
                  </tr>
                  <tr>
                    <td>Deposit</td>
                    <td>$5,000 (BTC)</td>
                    <td>15-05-2022</td>
                    <td className="text-success">Approved</td>
                  </tr>
                  <tr>
                    <td>Withdrawal</td>
                    <td>$3,000 (USDT)</td>
                    <td>15-05-2022</td>
                    <td className="text-warning">Pending</td>
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
export default History;
