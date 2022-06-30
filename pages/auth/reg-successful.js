import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../../public/monnayJumbo.png";
import styles from "../../styles/Home.module.css";
import { TiTick } from "react-icons/ti";

const RegSuccessful = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
        <div
          className={styles.jumbotronReg}
          style={{
            backgroundImage: `url(${Jumbo})`,
            width: "100%",
            height: "650px",
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
                <Link href="/auth/signin">
                  RegSuccessful{" "}
                  <a href="#" className={styles.registrationSuccessfulButton}>
                    Log in
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <p>Image & Text</p>
          <ul className={styles.footerBottomText}>
            <h5>Quick links</h5>
            <Link href="/">
              <li>
                <a href="#">Home</a>
              </li>
            </Link>
            <Link href="/about">
              <li>
                <a href="#">About us</a>
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <a href="#">Contact us</a>
              </li>
            </Link>
            <Link href="/faq">
              <li>
                <a href="#">FAQ</a>
              </li>
            </Link>
          </ul>
          <ul className={styles.footerBottomText}>
            <h5>Address</h5>
            <li>Vanha Talvitie 11 C,</li>
            <li>HELSINKI 00580 Finland</li>
            <br />
            <br />
            <lh>Email:</lh>
            <li>contact@monnay.finance</li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerBottomText}>
            COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
          </p>
        </div>
      </footer>
    </div>
  );
};
export default RegSuccessful;
