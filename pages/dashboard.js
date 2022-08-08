import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Chart from "../public/monnay-chart.jpeg";
import Layout from "../components/layout";
import NavDashboard from "../components/navbarDashboard";
import styles from "../styles/Home.module.css";
import { AiOutlineDollar } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import moment from "moment";

// const BASE_URI = "https://monnayfinance.com/api/user/profile/18";

// export async function getServerSideProps() {
//   const res = await fetch(BASE_URI, {
//     headers: {
//       Authorization:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
//       "Content-type": "application/json",
//     },
//   });
//   const details = await res.json();
//   return {
//     props: {
//       details,
//     },
//   };
// }

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [details, setDetails] = useState([]);
  const formatDate = (value) => {
    return moment(value).format("HH:MM A DD, MM, YYYY");
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Juliet"));
    if (user !== null || user !== undefined) {
      setUser(user);
    }
    fetch(`https://monnayfinance.com/api/user/profile/${user.id}`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log("returns", data);
      });
  }, []);
  const { data = [] } = details;
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
        <NavDashboard />
        {/* <div> */}
        {/* Content */}
        <div className="main-panel">
          <div className="content">
            <div className="mb-20">
              <div className="card-header">
                <div className="flex justify-between">
                  <h4 className="cardName">Welcome {user.username}</h4>
                  {/* <h4 className="cardName">Welcome {user.id}</h4> */}
                  <p className="cardTime">
                    Last Access: {formatDate(user.lastlogin)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <div className="card-body">
                <div className="flex align-center justify-between">
                  <Image
                    src="/monnayCoin.png"
                    width={445}
                    height={165}
                    alt="coin"
                  />
                  <div className="details">
                    <p className="cardPrice">
                      <font color="black">Available balance:</font>
                      <br /> $ {data.walletBalance}
                    </p>
                    <Link href="/withdraw">
                      <button className="cardButton">Withdraw</button>
                    </Link>
                    <Link href="/deposit">
                      <button className="cardButton1">Deposit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* card row */}
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="cardStats">
                  <i className="material-icons">
                    <AiOutlineDollar size={50} color="#057D99" />
                  </i>
                  <div className="cardActiveDiv">
                    <p className="cardActiveHeader">Active Investment</p>
                    <p className="cardActive">$ {data.activeInvestment}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="cardStats1">
                  <i className="material-icons">
                    <AiOutlineDollar size={50} color="#FC5F00" />
                  </i>
                  <div className="cardActiveDiv">
                    <p className="cardActiveHeader">Total Withdrawn</p>
                    <p className="cardActive1">$ {data.totalEarning}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="cardStats2">
                  <i className="material-icons">
                    <AiOutlineDollar size={50} color="#F1BC19" />
                  </i>
                  <div className="cardActiveDiv">
                    <p className="cardActiveHeader">Pending Withdrawal</p>
                    <p className="cardActive2">$ {data.pendingWithdrawal}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="cardStats3">
                  <i className="material-icons">
                    <AiOutlineDollar size={50} color="#04C150" />
                  </i>
                  <div className="cardActiveDiv">
                    <p className="cardActiveHeader">Total Earning</p>
                    <p className="cardActive3">$ {data.totalEarning}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card row ends */}
            {/* chart section */}
            <div className="flex flex-row justify-between mt-10">
              <div className="cardStatsRefer">
                <p className="refer">refer and earn</p>
                <p className="refer1">
                  Use the link below to invite your friends
                </p>
                <div className="referLinkDiv">
                  <i className="material-icons">
                    <BsLink45Deg />
                  </i>
                  <p>{data.referralLink}</p>
                  <i className="material-icons">
                    <FiCopy />
                  </i>
                </div>
              </div>
              <div className="imageDiv">
                <Image src={Chart} width={703} height={440} />
              </div>
            </div>
            {/* chart section ends */}

            {/* footer */}
          </div>
          <footer className="footer">
            <div className="flex justify-center align-center">
              <p className="footer-text">
                COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
              </p>
            </div>
          </footer>
        </div>
        {/* Content Ends*/}
        {/* </div> */}
      </Layout>
    </>
  );
};
export default Dashboard;
