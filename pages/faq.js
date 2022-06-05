import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import Logo from "../asset/monnayLogo.png";

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
            <Image src={Logo} width={100} height={30} />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/" className={styles.navLink}>
                  HOME
                </a>
              </li>
              <li>
                <a href="/about" className={styles.navLink}>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="/investment" className={styles.navLink}>
                  INVESTMENTS
                </a>
              </li>
              <li>
                <a href="/faq" className={styles.navLink}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/courses" className={styles.navLink}>
                  COURSES
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.navLink}>
                  CONTACT
                </a>
              </li>
              <li>
                <a href="/auth/signup" className={styles.button}>
                  REGISTER
                </a>
              </li>
              <li>
                <a href="/auth/sigin" className={styles.buttonOutline}>
                  LOG IN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <main className={styles.main}>
        {/* Jumbotron */}
        <div className={styles.jumbotronAbout}>
          <div className={styles.jumbotronFluid}>
            <h2 className={styles.about}>Frequently Asked Questions</h2>
          </div>
        </div>
        {/* Jumbotron Ends */}
        {/* Card */}
        <div className="flex justify-center">
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
                  the required fields. That's all.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 22 */}
        <div className="flex justify-center">
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}></h5>
              </div>
              <div className="card-body">
                <p className="card-text"></p>
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
        <div className="flex justify-center">
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
        {/* 3 */}
        <div className="flex justify-center">
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>
                  What minimum amount can I withdraw from my account balance?
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">$15</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 mr-4">
            <div className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <h5 className={styles.faqCardTitle}>
                  Is the company legally registered?
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Yes, Monnay Finance is fully registered. You can click{" "}
                  <font color="#057d99">here</font> to view the the registration
                  certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        {/* Card ends */}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerOne}>
          <div className={styles.footerOneStyle}>
            <a>
              <i className="material-icons">
                <FaHandshake />
              </i>
            </a>

            <p>Support teams across the country</p>
          </div>
          <p className={styles.footerOneStyle}>
            Safe and secure online payment
          </p>
        </div>
        <div className={styles.footerTwo}>
          <ul>
            <li>WHO WE ARE</li>
            <li>About</li>
            <li>Team</li>
            <li>Work With Us</li>
          </ul>
          <ul>
            <li>MONNAY FINANCE</li>
            <li>Features</li>
            <li>Payments</li>
            <li></li>
          </ul>
          <ul>
            <li>SUPPORT</li>
            <li>Documentation</li>
            <li>Customizations</li>
            <li>Support Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          MONNAYFINANCE{" "}
          <span className={styles.logo}>
            <Image src="/icon.png" alt=" Logo" width={25} height={25} />
          </span>
        </a>
      </footer>
    </div>
  );
};
export default FAQ;
