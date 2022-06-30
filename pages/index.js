import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import Strategy from "../public/monnayStrategy.png";
import styles from "../styles/Home.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* Jumbotron */}
          <div
            className={styles.jumbotron}
            style={{
              backgroundImage: `url(${Jumbo})`,
              width: "100%",
              height: "650px",
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
                <Link href="/auth/signup">
                  <button type="button" className={styles.jumboButton}>
                    GET STARTED
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Jumbotron Ends */}
          {/* Trade */}
          <div className={styles.trade}>
            <div>
              <Image
                src="/monnayHome.jpg"
                width={500}
                height={350}
                className={styles.tradeImage}
                alt="trade"
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
                <br /> with outstanding technology of bitcoin trading and
                bitcoin mining. <br />
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
              We see it as our responsibility to invest for everyones tomorrow.
              <br />
              That means doing the right thing for our clients and for others
              too.
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
                <br /> manage your portfolio to ensure it remains appropriate
                for the ever-changing <br />
                conditions in the global economy and financial markets. We will
                also be <br />
                responsible for making any adjustments if your personal
                situation or objectives change.
                <br />
                <br /> A diversified investment strategy (sometimes called a
                “balanced portfolio” or <br />
                “multi-asset portfolio”) that combines different assets can be
                one of the best <br />
                ways to preserve and enhance wealth over the long term. This
                approach can <br />
                provide exposure to a wide set of investment opportunities and
                reduce losses
                <br /> when market conditions are challenging.
              </text>
            </div>
            {/* <div className={styles.strategyRectangle}></div> */}
            <div
              className={styles.strategyImageContainer}
              style={{
                backgroundImage: `url(${Strategy})`,
                width: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
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
                <Link href="/auth/signin">
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
                <Link href="/auth/signin">
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
                <Link href="/auth/signin">
                  <button type="button" className={styles.cardButton}>
                    SELECT PLAN
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Investment Plans End */}
          {/* Investors */}
          <h3 className={styles.investorHeader}>
            What our <font color="#057d99"> investors</font> have to say
          </h3>
          <div className={styles.investorCardDiv}>
            <div className={styles.investorCard}>
              <p className={styles.investorMessage}>
                Beautiful performance from this company. I am glad to be an
                investor here.
              </p>
              <p className={styles.investorName}>Iain Carmichael</p>
            </div>
            <div className={styles.investorCard}>
              <p className={styles.investorMessage}>
                What a well designed investment structure. It is an
                easy-to-operate system with automated payments.
              </p>
              <p className={styles.investorName}>Paul Littlefair</p>
            </div>
            {/* <div className={styles.investorCard}>
            <p className={styles.investorMessage}>
              Investing in this company has been a wonderful experience. I love
              the swift response from the support team and the fast payouts.
            </p>
            <p className={styles.investorName}>Karna Luke</p>
          </div> */}
            <div className={styles.investorCard}>
              <p className={styles.investorMessage}>
                Thank you Monnay Finance for being so efficient in service and
                proving to be the best investment company. It has always been my
                wish to encounter a company with such performance. Keep it up
              </p>
              <p className={styles.investorName}>Amber Oram</p>
            </div>
            <div></div>
          </div>
          {/* Investors Ends */}
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
                className=" w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-2 px-4 mb-3"
              />
              <button type="button" className={styles.subscribeButton}>
                SUBSCRIBE
              </button>
            </div>
          </div>
          {/* Subscribe Ends */}
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
    </>
  );
};
export default Home;
