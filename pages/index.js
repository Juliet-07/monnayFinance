import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Strategy from "../public/monnayStrategy.png";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import { VscQuote } from "react-icons/vsc";

const Home = () => {
  return (
    <>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <Jumbotron
          heading="Dedicated to your financial growth"
          message="We create equal opportunities for all investors to thrive in the crypto and forex markets"
        />
        {/* <div
          className={styles.jumbotron}
          style={{
            backgroundImage: `url(${Jumbo})`,
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={styles.jumbotronFluid}>
            <div className={styles.jumbotronProps}>
              <h2 className={styles.properties}>
                Dedicated to your
                <br />
                financial growth
              </h2>
              <p className={styles.content}>
                We create equal opportunities for all investors to
                <br /> thrive in the crypto and forex markets
              </p>
              <Link href="/signup">
                <button className={styles.jumboButton}>
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        {/* Jumbotron Ends */}
        {/* Trade */}
        <div className={styles.trade}>
          <div className={styles.tradeImageDiv}>
            <Image
              src="/monnayHome.jpg"
              width={500}
              height={350}
              className={styles.tradeImage}
              alt="trade"
            />
          </div>
          <div style={{ margin: 50 }} className={styles.tradeTextContainer}>
            <h3 className={styles.tradeText}>
              You have the <font color="#057d99"> best hands </font>
              <br className={styles.brTag} />
              handling your funds.
            </h3>
            <p className={styles.tradeMessage}>
              We are dedicated in the cryptocurrency industry, with outstanding
              technology of bitcoin trading and bitcoin mining.{" "}
              <br className={styles.brTag} />
              Since we came into existence, our role is to offer each person the
              chance to attend the bitcoin related business{" "}
              <br id={styles.brTag} />
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
          <p className={styles.trustMessage} id={styles.message}>
            We see it as our responsibility to invest for everyones tomorrow.
            <br className={styles.brTag} />
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
                It is through responsible entrepreneurship that we achieve the
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
                stand up for what is right, accepting that this can be
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
            <p className={styles.strategyMessage}>
              Our commitment to be a leader in responsible business (RB) stems
              from our <br className={styles.brTag} />
              purpose in society. It is core to our business. Thinking, acting
              and investing <br className={styles.brTag} />
              responsibly not only shapes what we do but how we do it. We will
              actively
              <br className={styles.brTag} /> manage your portfolio to ensure it
              remains appropriate for the ever-changing{" "}
              <br className={styles.brTag} />
              conditions in the global economy and financial markets. We will
              also be <br className={styles.brTag} />
              responsible for making any adjustments if your personal situation
              or objectives change.
              <br />
              <br /> A diversified investment strategy (sometimes called a
              “balanced portfolio” or <br className={styles.brTag} />
              “multi-asset portfolio”) that combines different assets can be one
              of the best <br className={styles.brTag} />
              ways to preserve and enhance wealth over the long term. This
              approach can <br className={styles.brTag} />
              provide exposure to a wide set of investment opportunities and
              reduce losses
              <br className={styles.brTag} /> when market conditions are
              challenging.
            </p>
          </div>
          <Image src={Strategy} width={900} height={704} alt="strategy" />
        </div>
        {/* Strategy Ends */}
        {/* Investment Plans */}
        <div style={{ marginTop: "50px" }}>
          <h3 className={styles.investmentHeader}>
            Our <font color="#057d99">Investment Plans</font>
          </h3>
        </div>

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
              <Link href="/signin">
                <button type="button" className={styles.cardButton}>
                  SELECT PLAN
                </button>
              </Link>
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
              <Link href="/signin">
                <button type="button" className={styles.cardButton}>
                  SELECT PLAN
                </button>
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
              <Link href="/signin">
                <button type="button" className={styles.cardButton}>
                  SELECT PLAN
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Investment Plans End */}
        {/* Investors */}
        <div className={styles.investorDiv}>
          <div className={styles.investorHeaderDiv}>
            <hr className={styles.investorHr} />
            <h3 className={styles.investorHeader}>
              What our <font color="#057d99"> investors</font> have to say.
            </h3>
            <hr className={styles.investorHr} />
          </div>
          <div className={styles.investorCardDiv}>
            <div className={styles.investorCard}>
              <VscQuote size={55} className={styles.investorIcon} />
              <p className={styles.investorMessage}>
                Beautiful performance from this company.
                <br /> I am glad to be an investor here.
              </p>
              <div id={styles.investorName}>
                <p className={styles.investorName}>Iain Carmichael</p>
              </div>
            </div>
            {/* <div className={styles.investorCard}>
              <VscQuote size={55} className={styles.investorIcon} />
              <p className={styles.investorMessage}>
                What a well designed investment structure.
                <br /> It is an easy-to-operate system with automated payments.
              </p>
              <p className={styles.investorName}>Paul Littlefair</p>
            </div> */}
            <div className={styles.investorCard}>
              <VscQuote size={55} className={styles.investorIcon} />
              <p className={styles.investorMessage3}>
                Thank you Monnay Finance for being so efficient{" "}
                <br className={styles.brTagI} />
                in service and proving to be the best investment company.
                <br className={styles.brTagI} /> It has always been my wish to
                encounter a company with such performance. Keep it up
              </p>
              <p className={styles.investorName}>Amber Oram</p>
            </div>
            <div></div>
          </div>
        </div>
        {/* Investors Ends */}
        {/* Subscribe */}
        <div className={styles.subscribeContainer}>
          <h3 className={styles.subscribeHeader}>
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
              className=" w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-2 px-4 mb-3"
            />
            <button type="button" className={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </div>
        </div>
        {/* Subscribe Ends */}
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
    </>
  );
};
export default Home;
