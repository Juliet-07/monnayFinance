import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import Logo from "../asset/monnayLogo.png";
import Trade from "../asset/monnayHome.jpg";

const Investment = () => {
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
            <h2 className={styles.about}>Our Investment Plans</h2>
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
              <a href="#" className={styles.cardButton}>
                SELECT PLAN
              </a>
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
              <a href="#" className={styles.cardButton}>
                SELECT PLAN
              </a>
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
              <a href="#" className={styles.cardButton}>
                SELECT PLAN
              </a>
            </div>
          </div>
        </div>
        {/* Investment Plans End */}
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
export default Investment;
