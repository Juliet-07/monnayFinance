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

const Contact = () => {
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
            <h2 className={styles.about}>Contact Us</h2>
            <p className={styles.content}>
              We would love to hear from you. Kindly fill the form
              <br />
              below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
        {/* Jumbotron Ends */}
        {/* Contact form */}
        <div className="mt-8">
          <div className="card">
            <h4 className={styles.contactHeader}>Contact Form</h4>
            <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="fullname"
                >
                  Full name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullname"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  E-mail
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                />
              </div>
              <div className={styles.createButtonDiv}>
                <a href="#" className={styles.button}>
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* Contact form */}
        {/* Subscribe */}
        <div className={styles.subscribecontainer}>
          <h3 className={styles.investmentHeader}>
            Subscribe to our <font color="#057d99">Newsletter</font>.
          </h3>
          <p className={styles.trustMessage}>
            Stay up-to-date with our latest trends. Enter your e-mail to
            subscribe.
          </p>
          <div className={styles.subscribeInput}>
            <input
              type="email"
              placeholder="Email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <a href="#" className={styles.button}>
              SUBSCRIBE
            </a>
          </div>
        </div>
        {/* Subscribe Ends */}
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
export default Contact;
