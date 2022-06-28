import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* Nav section 1 */}
      <div className="navbar-fixed">
        <nav className={styles.addressBar}>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <i className="material-icons left">
                <IoLocationOutline />
              </i>
              Vanha Telhitie 11c{" "}
            </li>
            <li>
              <i className="material-icons left">
                <AiOutlineClockCircle />
              </i>
              Mon - Fri 8am-6pm
            </li>
          </ul>
        </nav>
      </div>
      {/* Nav section 2 */}
      <div className="navbar-fixed">
        <nav className={styles.topBar}>
          <div className="nav-wrapper">
            <Image src="/monnayLogo.png" width={100} height={30} alt="logo" />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link href="/">
                <li>
                  <a href="#" className={styles.navLink}>
                    HOME
                  </a>
                </li>
              </Link>
              <Link href="/about">
                <li>
                  <a href="#" className={styles.navLink}>
                    ABOUT US
                  </a>
                </li>
              </Link>
              <Link href="/investment">
                <li>
                  <a href="#" className={styles.navLink}>
                    INVESTMENTS
                  </a>
                </li>
              </Link>
              <Link href="/faq">
                <li>
                  <a href="#" className={styles.navLink}>
                    FAQ
                  </a>
                </li>
              </Link>
              <Link href="/courses">
                <li>
                  <a href="#" className={styles.navLink}>
                    COURSES
                  </a>
                </li>
              </Link>
              <Link href="/contact">
                <li>
                  <a href="#" className={styles.navLink}>
                    CONTACT
                  </a>
                </li>
              </Link>
              <Link href="/auth/signup">
                <li>
                  <a href="#" className={styles.button}>
                    REGISTER
                  </a>
                </li>
              </Link>
              <Link href="/auth/signin">
                <li>
                  <a href="#" className={styles.buttonOutline}>
                    LOG IN
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <main className={styles.main}>
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
            <h2 className={styles.about}>Frequently Asked Questions</h2>
          </div>
        </div>
        {/* Jumbotron Ends */}
        {/* Card */}
        <div className="flex justify-center faq">
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>What is Monnay finance?</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our company provides a full investment service focused on the
                  bitcoin and cryptocurrency market. We are among the best
                  platforms to invest and grow your bitcoin and other
                  cryptocurrency
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>
                  How do I create an account?
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Registration process is very easy and will take a few moments
                  to complete. Simply click the REGISTER button and fill in all
                  the required fields. That is all.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 22 */}
        <div className="flex justify-center faq">
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>
                  How do I make a deposit?
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  To deposit funds in your trading account is quick and simple.
                  For your convenience you may choose one of the several
                  available deposit methods. To make a successful deposit,
                  please follow the step below;
                  <ol>
                    <li>Login to your account</li>
                    <li>
                      Click on the DEPOSIT button in the DASHBOARD section
                    </li>
                    <li>
                      Choose the deposit option and follow the steps to complete
                      your transaction.
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>
                  How do I make withdrawal?
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  To make a withdrawal request click the WITHDRAW button at the
                  top center of your spectraxfinance.com account dashboard and
                  input the required details to withdraw.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 22 */}
        {/* 2 */}
        <div className="flex justify-center faq">
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>
                  What minimum amount can I withdraw from my account balance?
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">$15</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>
                  How long does it take to process my withdrawal?
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Once we receieve your withdrawal request we process
                  immediately and send to your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        {/* Card ends */}
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
export default FAQ;
