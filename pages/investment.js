import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Navbar from "../components/navbar";

const Investment = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        {/* Jumbotron */}
        <div
          className={styles.jumbotronAbout}
          style={{
            backgroundImage: `url(${Jumbo})`,
            width: "100%",
            height: "200px",
          }}
        >
          <div className={styles.jumbotronFluid}>
            <h2 className={styles.planJumbo}>Our Investment Plans</h2>
          </div>
        </div>
        {/* Jumbotron Ends */}
        {/* Investment Plans */}
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
              <Link href="/signin">
                <button type="button" className={styles.cardButton}>
                  SELECT PLAN
                </button>
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
              <Link href="/signin">
                <button type="button" className={styles.cardButton}>
                  SELECT PLAN
                </button>
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
              <Link href="/signin">
                <button type="button" className={styles.cardButton}>
                  SELECT PLAN
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Investment Plans End */}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/monnayFooter.png"
              width={180}
              height={50}
              alt="footer image"
            />
            <p style={{ color: "#ffffff", marginTop: 10, textAlign: "left" }}>
              Investment opportunities in multiple
              <br /> markets, one account.
            </p>
          </div>
          <ul className={styles.footerBottomList}>
            <h5 style={{ fontWeight: 700, textAlign: "center" }}>
              Quick links
            </h5>
            <Link href="/">
              <li style={{ fontSize: 16 }}>Home</li>
            </Link>
            <Link href="/about">
              <li style={{ fontSize: 16 }}>About us</li>
            </Link>
            <Link href="/contact">
              <li style={{ fontSize: 16 }}>Contact us</li>
            </Link>
            <Link href="/faq">
              <li style={{ fontSize: 16 }}>FAQ</li>
            </Link>
          </ul>
          <ul className={styles.footerBottomText}>
            <h5 style={{ fontWeight: 700 }}>Address</h5>
            <li style={{ fontSize: 16 }}>Vanha Talvitie 11 C,</li>
            <li style={{ fontSize: 16 }}>HELSINKI 00580 Finland</li>
            <br />
            <br />
            <li style={{ fontSize: 18, fontWeight: 700 }}>Email:</li>
            <li style={{ fontSize: 16 }}>contact@monnay.finance</li>
          </ul>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <p className={styles.footerBottomText}>
          COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
        </p>
      </div>
    </div>
  );
};
export default Investment;
