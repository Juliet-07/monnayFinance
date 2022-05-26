import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import Logo from "../asset/monnayLogo.png";
import Trade from "../asset/monnayHome.jpg";

const Home = () => {
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
                <a href="#" className={styles.button}>
                  REGISTER
                </a>
              </li>
              <li>
                <a href="#" className={styles.buttonOutline}>
                  LOG IN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <main className={styles.main}>
        {/* Jumbotron */}
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronFluid}>
            <h2 className={styles.properties}>
              Dedicated to your
              <br />
              financial growth
            </h2>
            <p className={styles.content}>
              We create equal opportunities for all investors to
              <br /> thrive in the crypto and forex markets
            </p>
            <a href="#" className={styles.jumboButton}>
              GET STARTED
            </a>
          </div>
        </div>
        {/* Jumbotron Ends */}
        {/* Trade */}
        <div className={styles.trade}>
          <div>
            <Image
              src={Trade}
              width={450}
              height={300}
              className={styles.tradeImage}
            />
          </div>
          <div style={{ margin: 50 }}>
            <h3 className={styles.tradeText}>
              You have the <font color="#057d99">best hands</font>
              <br />
              handling your funds.
            </h3>
            <p className={styles.tradeMessage}>
              We are dedicated in the cryptocurrency industry,
              <br /> with outstanding technology of bitcoin trading and bitcoin
              mining. <br />
              Since we came into existence, our role is to offer <br />
              each person the chance to attend the bitcoin related business{" "}
              <br />
              and earn profit easily with our powerful investment sytem.
            </p>
          </div>
        </div>
        {/* Trade Ends */}
        {/* Trust */}
        <div className={styles.trustContainer}>
          <h3 className={styles.trustText}>
            Why should you <font color="#057d99">trust us</font>?
          </h3>
          <p className={styles.trustMessage}>
            We see it as our responsibility to invest for everyone's tomorrow.
            <br />
            That means doing the right thing for our clients and for others too.
          </p>
          <div className={styles.trustShowBox}>
            <div className={styles.box}>
              <div className={styles.boxIconContainer}>
                <i className={styles.boxIcon}>
                  <FaHandshake />
                </i>
              </div>
              <h4 className={styles.boxText}>COLLABORATION</h4>
              <p className={styles.boxMessage}>
                It's through responsible entrepreneurship that we achieve the
                best results for our clients. Our people are trusted to pursue
                value. They know when to change course to preserve it too.
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxIconContainer}>
                <i className={styles.boxIcon}>
                  <BiBarChartSquare />
                </i>
              </div>
              <h4 className={styles.boxText}>RESPONSIBILITY</h4>
              <p className={styles.boxMessage}>
                Responsibility demands courage. We are not afraid to ask
                difficult questions or make changes that need to be made. We
                stand up for what's right, accepting that this can be
                <br />
                challenging sometimes.
              </p>
            </div>
          </div>
        </div>
        {/* Trust Ends */}
        {/* Strategy */}
        <div className={styles.strategyContainer}>
          <div className={styles.strategyTextContainer}>
            <h4 className={styles.strategyText}>Our Strategy</h4>
            <text className={styles.strategyMessage}>
              Our commitment to be a leader in responsible business (RB) stems
              from our <br />
              purpose in society. It is core to our business. Thinking, acting
              and investing <br />
              responsibly not only shapes what we do but how we do it. We will
              actively
              <br /> manage your portfolio to ensure it remains appropriate for
              the ever-changing <br />
              conditions in the global economy and financial markets. We will
              also be <br />
              responsible for making any adjustments if your personal situation
              or objectives change.
              <br />
              <br /> A diversified investment strategy (sometimes called a
              “balanced portfolio” or <br />
              “multi-asset portfolio”) that combines different assets can be one
              of the best <br />
              ways to preserve and enhance wealth over the long term. This
              approach can <br />
              provide exposure to a wide set of investment opportunities and
              reduce losses
              <br /> when market conditions are challenging.
            </text>
          </div>
          {/* <div className={styles.strategyRectangle}></div> */}
          <div className={styles.strategyImageContainer}></div>
        </div>
        {/* Strategy Ends */}
        {/* Investment Plans */}
        <h3 className={styles.investmentHeader}>
          Our <font color="#057d99">Investment Plans</font>
        </h3>
        <div className={styles.investmentContainer}>
          <div className={styles.card}>
            <h3>Basic</h3>
            <h5>2% ROI Daily</h5>
            <ul className="m-5 p-5 text-center">
              <li>
                <i className="material-icons">
                  <FaHandshake />
                </i>
                Profit withdrawal: <b>Active daily</b>
              </li>
              <li>
                Capital withdrawal: <b>After investment duration</b>
              </li>
              <li>
                Minimum investment: <b>$100</b>
              </li>
              <li>
                Maximum investment: <b>$4,999</b>
              </li>
              <li>
                Daily profit range: <b>$2 - $99.98</b>
              </li>
              <li>
                Referral bonus: <b>5% 3% 1%</b>
              </li>
            </ul>
          </div>
          <div className={styles.plans}>
            <h3>Standard</h3>
            <h5>3.5% ROI Daily</h5>
          </div>
          <div className={styles.plans}>
            <h3>Premium</h3>
            <h5>5% ROI Daily</h5>
          </div>
        </div>
        {/* Investment Plans End */}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerOne}>
          <p className={styles.footerOneStyle}>
          <i className="material-icons">
            <FaHandshake />
          </i>
            Support teams across the country
          </p>
          <p className={styles.footerOneStyle}>
            Safe and secure online payment
          </p>
        </div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
export default Home;
