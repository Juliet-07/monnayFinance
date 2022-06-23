import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

const Signup = () => {
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
                  <button href="#" className="btn disabled">
                    REGISTER
                  </button>
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
        <div className={styles.jumbotronReg}>
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
export default Signup;
