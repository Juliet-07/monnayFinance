import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

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
              <a href="auth/signin" className={styles.cardButton}>
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
              <Link href="/auth/signin">
                <a href="#" className={styles.cardButton}>
                  SELECT PLAN
                </a>
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
              <Link href="/auth/signin">
                <a href="#" className={styles.cardButton}>
                  SELECT PLAN
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* Investment Plans End */}
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
export default Investment;
