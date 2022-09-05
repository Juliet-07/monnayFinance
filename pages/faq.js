import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
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
          <h2 className={styles.planJumbo}>Frequently Asked Questions</h2>
        </div>
      </div>
      {/* Jumbotron Ends */}
      {/* FAQ BOX */}
      <div className="faqDiv" id={styles.faqDiv}>
        <div className={styles.faqDiv1}>
          {/* 1 */}
          <div className={styles.faqCard}>
            <div className={styles.faqCardHeader}>
              <p className={styles.faqCardTitle}>What is Monnay finance?</p>
            </div>
            <div>
              <p className={styles.faqCardBodyText}>
                Our company provides a full investment service focused on the
                bitcoin and cryptocurrency market. We are among the best
                platforms to invest and grow your bitcoin and other
                cryptocurrency.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className={styles.faqCard11}>
            <div className={styles.faqCardHeader}>
              <p className={styles.faqCardTitle}>How do I make a deposit?</p>
            </div>
            <div>
              <p className={styles.faqCardBodyText}>
                To deposit funds in your trading account is quick and simple.
                For your convenience you may choose one of the several available
                deposit methods. To make a successful deposit, please follow the
                step below;
                <ol>
                  <li>Login to your account</li>
                  <li>Click on the DEPOSIT button in the DASHBOARD section</li>
                  <li>
                    Choose the deposit option and follow the steps to complete
                    your transaction.
                  </li>
                </ol>
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className={styles.faqCard12}>
            <div className={styles.faqCardHeader2}>
              <p className={styles.faqCardTitle2}>
                What minimum amount can I withdraw from my account balance?
              </p>
            </div>
            <div>
              <p className={styles.faqCardBodyText}>$15</p>
            </div>
          </div>
        </div>
        <div className={styles.faqDiv2}>
          {/* 1 */}
          <div className={styles.faqCard}>
            <div className={styles.faqCardHeader}>
              <p className={styles.faqCardTitle}>How do I create an account?</p>
            </div>
            <div>
              <p className={styles.faqCardBodyText}>
                Registration process is very easy and will take a few moments to
                complete. Simply click the REGISTER button and fill in all the
                required fields. That is all.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className={styles.faqCard}>
            <div className={styles.faqCardHeader}>
              <p className={styles.faqCardTitle}>How do I make withdrawal?</p>
            </div>
            <div>
              <p className={styles.faqCardBodyText}>
                To make a withdrawal request click the WITHDRAW button at the
                top center of your spectraxfinance.com account dashboard and
                input the required details to withdraw.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className={styles.faqCard21}>
            <div className={styles.faqCardHeader} id={styles.faqCardHeader2}>
              <p className={styles.faqCardTitle} id={styles.faqCardTitle}>
                How long does it take to process my withdrawal?
              </p>
            </div>
            <div>
              <p className={styles.faqCardBodyText}>
                Once we receieve your withdrawal request we process immediately
                and send to your wallet.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className={styles.faqCard22}>
            <div className={styles.faqCardHeader}>
              <p className={styles.faqCardTitle}>
                Is the company legally registered?
              </p>
            </div>
            <div>
              <p className={styles.faqCardBodyText}>
                Yes, Monnay Finance is fully registered. You can click{" "}
                <a href="https://app.companiesoffice.govt.nz/co/8372576">
                  here
                </a>{" "}
                to view the registration certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ BOX ENDS */}

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
export default FAQ;
