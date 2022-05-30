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
                <a href="/auth/signup" className={styles.button}>
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
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">
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
export default Home;
