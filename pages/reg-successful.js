import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import { TiTick } from "react-icons/ti";
import Navbar from "../components/navbar";

const RegSuccessful = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <div
        className={styles.jumbotronReg}
        style={{
          position: "relative",
          backgroundImage: `url(${Jumbo})`,
          width: "100%",
          height: "650px",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.jumbotronFluidReg}>
          <div className={styles.registrationContainer}>
            <div className={styles.createDiv}>
              <Image src="/icon.png" alt=" Logo" width={30} height={30} />
            </div>
            <div className={styles.tickBorder}>
              <TiTick className={styles.tick} />
            </div>
            <div>
              <h5 className={styles.registrationHeader}>
                Registration Successful
              </h5>
              <p className={styles.registrationText}>
                Welcome! Your account has been created successfully.
                <br />
                Click on the login button to access your account.{" "}
              </p>
              <Link href="/signin">
                <button
                  type="submit"
                  className={styles.registrationSuccessfulButton}
                >
                  Log in
                </button>
              </Link>
              <Link href="/">
                <p className={styles.home}>
                  Go back <font color="#057d99">HOME</font>
                </p>
              </Link>
            </div>
          </div>
        </div>
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
            <li style={{ fontSize: 16 }}>22 Albert Street,</li>
            <li style={{ fontSize: 16 }}>AUCKLAND 1010, New Zealand</li>
            <br />
            <br />
            <li style={{ fontSize: 18, fontWeight: 700 }}>Email:</li>
            <li style={{ fontSize: 16 }}>contact@monnayfinance.com</li>
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
export default RegSuccessful;
