import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { VscQuote } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <div className={styles.container}>
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
            <h2 className={styles.about}>About Us</h2>
          </div>
        </div>
        {/* Jumbotron Ends */}
        {/* Description */}
        <div className={styles.description}>
          <div className={styles.whoAreWeDiv}>
            <div className={styles.whoAreWe}>
              <h4 className={styles.whoAreWeHeader}>Who Are We?</h4>
              <hr
                style={{
                  width: "70%",
                  position: "relative",
                  top: "10px",
                  left: "33px",
                }}
              />
              <p className={styles.whoAreWeMessage}>
                We are an investment company,
                <br className={styles.brTag} /> offering and trading
                crypto-based
                <br />
                assets and other financial instruments
                <br className={styles.brTag} /> for investors.
              </p>
            </div>
            <div className={styles.whoAreWe}>
              <h4 className={styles.whoAreWeHeader}>What do we do?</h4>
              <hr
                style={{
                  width: "70%",
                  position: "relative",
                  top: "10px",
                  left: "33px",
                }}
              />
              <p className={styles.whoAreWeMessage}>
                We allocate investors funds to financial,
                <br className={styles.brTag} /> instruments in trading and
                manage these
                <br className={styles.brTag} /> trades to bring profits for
                investors.
              </p>
            </div>
            <div className={styles.meetCEO}>
              <h4 className={styles.whoAreWeHeader}>Meet our CEO</h4>
              <hr
                style={{
                  width: "70%",
                  position: "relative",
                  top: "10px",
                  left: "33px",
                }}
              />
              <div className={styles.ceoPicture}>
                <Image
                  src="/ceo.jpeg"
                  width={90}
                  height={90}
                  alt="ceoPicture"
                  className={styles.img}
                />
              </div>
              <p className={styles.ceoMessage}>
                Pritchard Potts currently sits on the Board of Monnay Finance
                Limited as Managing Director/Chief Executive Officer.
                <br className={styles.brTag} />
                He holds an MBA, with distinction, from The Kellogg School of
                Management, and a Masters of Engineering Management from The
                McCormick School of Engineering and
                <br className={styles.brTag} />
                Applied Science, at Northwestern
                <br className={styles.brTag} />
                University in the USA. He also holds a
                <br className={styles.brTag} /> Bachelor of Commerce (Hons) with
                a major <br className={styles.brTag} />
                in Accounting and Finance, from the{" "}
                <br className={styles.brTag} />
                University of Auckland.
                <br />
                <br /> Pritchard has over 20 years experience in
                <br className={styles.brTag} /> the Crypto and Investment
                Industry and
                <br className={styles.brTag} /> has received several awards of
                excellence
                <br className={styles.brTag} /> from diverse Companies and
                brokers.
              </p>
              <ul className={styles.ceoButtonDiv}>
                <li>
                  <a
                    href="https://app.companiesoffice.govt.nz/co/8372576"
                    className={styles.ceoButton}
                  >
                    View Company Certificate
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.ceoButton}>
                    View CEO Awards
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.ourStrategy}>
            <h3 className={styles.whoAreWeHeader}>Our Strategy</h3>
            <hr
              style={{
                width: "80%",
                position: "relative",
                top: "10px",
                left: "33px",
              }}
            />
            <p className={styles.ourStrategyMessage}>
              Our commitment to be a leader in responsible business (RB) stems
              from our purpose in society. It is core to our business. Thinking,
              acting and investing responsibly not only shapes what we do but
              how we do it. We will actively manage your portfolio to ensure it
              remains appropriate for the ever-changing conditions in the global
              economy and financial markets. We will also be responsible for
              making any adjustments if your personal situation or objectives
              change.
              <br />
              <br /> A diversified investment strategy (sometimes called a
              “balanced portfolio” or “multi-asset portfolio”) that combines
              different assets can be one of the best ways to preserve and
              enhance wealth over the long term. This approach can provide
              exposure to a wide set of investment opportunities and reduce
              losses when market conditions are challenging.
            </p>
          </div>
        </div>
        {/* Description Ends */}
        {/* Investors */}
        <div className={styles.investorDivAbout}>
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
              <p className={styles.investorName}>Iain Carmichael</p>
            </div>
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
      </div>
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
    </>
  );
};
export default About;
