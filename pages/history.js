import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import DataTable from "../components/dataTable";
import axios from "axios";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const columns = useMemo(
    () => [],
    [
      {
        Header: "Transaction Type",
        accessor: "type",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Status",
        accessor: "transactionStatus",
      },
    ]
  );
  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        await fetch("https://monnayfinance.com/api/transactions/18", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setTransactions(data);
            console.log("history", data);
            // console.log(" vnmbvm", transactions);
          });
      } catch (err) {
        setTransactions([]);
        console.log(err);
      }
    };
    fetchTransactionData();
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
        {/* Content */}
        <div className="main-panel">
          <div className="content1">
            <div className="investmentActive">
              <p className="investmentActiveText">Transaction History</p>
            </div>
            <div className="col-md-10 mt-20">
              <DataTable columns={columns} data={transactions} />
              {/* <table>
                <thead className="text-default text-xl text-bold bg-white">
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
              </table> */}
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="flex justify-center align-center">
            <p className="footer-text">
              COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
            </p>
          </div>
        </footer>
        {/* Content Ends*/}
      </Layout>
    </>
  );
};
export default History;
