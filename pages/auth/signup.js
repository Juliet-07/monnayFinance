import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import Logo from "../../asset/monnayLogo.png";

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
            <Image src={Logo} width={100} height={30} />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/" className={styles.navLink}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  INVESTMENTS
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  COURSES
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  CONTACT
                </a>
              </li>
              <li>
                <button className="btn disabled">REGISTER</button>
              </li>
              <li>
                <a href="/auth/signin" className={styles.buttonOutline}>
                  LOG IN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronFluid}>
            <div className={styles.signupContainer}>
              <div className={styles.createDiv}>
                <Image src="/icon.png" alt=" Logo" width={20} height={20} />
                <p className={styles.create}>Create Account</p>
              </div>
              {/* form proper */}
              <form className="w-full max-w-lg mt-3">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold"
                      for="grid-full-name"
                    >
                      Full name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold"
                      for="grid-user-name"
                    >
                      Username
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-user-name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold"
                      for="grid-password"
                    >
                      Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-password"
                      type="password"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold"
                      for="grid-confirm"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-state"
                    >
                      Type of Coin
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                      >
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>USDT</option>
                        <option>DOGE</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-email"
                    >
                      Wallet Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold"
                      for="grid-security"
                    >
                      Security Question
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-security"
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold"
                      for="grid-answer"
                    >
                      Answer
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-answer"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0 mt-7">
                  <p>
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-email"
                    >
                      <input type="checkbox" className="filled-in" />
                      <span>
                        I agree to all the <font color="#057d99">Terms</font>{" "}
                        and <font color="#057d99">Privacy Policy</font>
                      </span>
                    </label>
                  </p>
                </div>
                <div className={styles.createButtonDiv}>
                  <a href="#" className={styles.button}>
                    Create account
                  </a>
                </div>
              </form>
              {/* form proper ends */}
            </div>
          </div>
        </div>
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
export default Signup;
