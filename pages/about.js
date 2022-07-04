import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
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
          <div className={styles.whoAreWe}>
            <h4 className={styles.whoAreWeHeader}>Who Are We?</h4>
            <hr />
            <p className={styles.whoAreWeMessage}>
              We are an investment company,
              <br /> offering and trading crypto-based
              <br />
              assets and other financial instruments
              <br /> for investors.
            </p>
          </div>
          <div className={styles.whoAreWe}>
            <h4 className={styles.whoAreWeHeader}>What do we do?</h4>
            <hr />
            <p className={styles.whoAreWeMessage}>
              We allocate investors funds to financial,
              <br /> instruments in trading and manage these
              <br /> trades to bring profits for investors.
            </p>
          </div>
          <div className={styles.whoAreWe}>
            <h4 className={styles.whoAreWeHeader}>Meet our CEO</h4>
            <hr />
            <p className={styles.ceoMessage}>
              Pritchard Potts currently sits on the Board of
              <br />
              Monnay Finance Limited as Managing Director/Chief Executive
              Officer.
              <br />
              He holds an MBA, with distinction, from The Kellogg
              <br /> School of Management, and a Masters of
              <br /> Engineering Management from The
              <br /> McCormick School of Engineering and
              <br /> Applied Science, at Northwestern
              <br /> University in the USA. He also holds a<br /> Bachelor of
              Commerce (Hons) with a major <br />
              in Accounting and Finance, from the <br />
              University of Auckland.
              <br />
              <br /> Pritchard has over 20 years experience in
              <br /> the Crypto and Investment Industry and
              <br /> has received several awards of excellence
              <br /> from diverse Companies and brokers.
            </p>
            <ul>
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
        {/* Description Ends */}
        {/* ourStrategy */}
        <div className={styles.ourStrategy}>
          <h3 className={styles.ourStrategyHeader}>Our Strategy</h3>
          <hr />
          <p className={styles.ourStrategyMessage}>
            Our commitment to be a leader in responsible business (RB) stems
            from our purpose in society. It is core to our business. Thinking,
            acting and investing responsibly not only shapes what we do but how
            we do it. We will actively manage your portfolio to ensure it
            remains appropriate for the ever-changing conditions in the global
            economy and financial markets. We will also be responsible for
            making any adjustments if your personal situation or objectives
            change.
            <br />
            <br /> A diversified investment strategy (sometimes called a
            “balanced portfolio” or “multi-asset portfolio”) that combines
            different assets can be one of the best ways to preserve and enhance
            wealth over the long term. This approach can provide exposure to a
            wide set of investment opportunities and reduce losses when market
            conditions are challenging.
          </p>
        </div>
        {/* ourStrategy Ends */}
        {/* Investors */}
        <h3 className={styles.investorHeader}>
          What our <font color="#057d99"> investors</font> have to say.
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
              width={150}
              height={50}
              alt="footer image"
            />
            <p style={{ color: "#ffffff", marginTop: 10, textAlign: "center" }}>
              Investment opportunities in multiple
              <br /> markets, one account.
            </p>
          </div>
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
export default About;
