import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import moment from "moment";
// import DataTable from "../components/dataTable";

const History = () => {
  const [user, setUser] = useState("");
  const [transactions, setTransactions] = useState([]);
  const formatDate = (value) => {
    return moment(value).format("HH:MM A DD, MM, YYYY");
  };
  const getStatus = (status) => {
    let statusClass;
    switch (status) {
      case "approved":
        statusClass = "text-success";
        break;

      case "failed":
        statusClass = "text-danger";
        break;

      default: //pending
        statusClass = "text-warning";
        break;
    }
    return statusClass;
  };
  useEffect(() => {
    const fetchTransactionData = async () => {
      const user = JSON.parse(localStorage.getItem("Juliet"));
      if (user !== null || user !== undefined) {
        setUser(user);
      }
      try {
        await fetch(`https://monnayfinance.com/api/transactions/${user.id}`, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            const response = [...[], ...data?.data];
            console.log({ response });

            setTransactions(response);
            console.log({ transactions });
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
            <div className="col-md-10 mt-20 mb-56">
              {/* <DataTable columns={columns} data={transactions} /> */}
              <table>
                <thead className="text-default text-xl text-bold bg-white">
                  <tr>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length > 0 &&
                    transactions.map((item, index) => (
                      <tr key={index}>
                        <td>{item?.type}</td>
                        <td>${item?.amount}</td>
                        <td>{formatDate(item?.date)}</td>
                        <td className={getStatus(item?.transactionStatus)}>
                          {item?.transactionStatus}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
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
