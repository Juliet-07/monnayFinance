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
                <a href="#" className={styles.navLink}>
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
              Nibh in purus volutpat nibh sit leo, phasellus consectetur tortor.
              <br />
              Est molestie facilisi fermentum eu dignissim volutpat vitae. Sed
              ac nunc <br /> non nibh. Urna sed in neque lacus netus ut varius.
              Iaculis molestie morbi <br />
              pharetra, pretium ut ipsum. Risus, et pellentesque vitae vitae
              arcu rhoncus <br />
              laoreet odio. Nibh in purus volutpat nibh sit leo, phasellus
              consectetur tortor.
              <br /> Est molestie facilisi fermentum eu dignissim volutpat
              vitae. Sed ac nunc <br />
              non nibh. Urna sed in neque lacus netus ut varius. Iaculis
              molestie morbi
              <br />
              pharetra, pretium ut ipsum. Risus, et pellentesque vitae vitae
              arcu rhoncus <br />
              laoreet odio.
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
                stand up for what's right, accepting that this can be<br/>
                challenging sometimes.
              </p>
            </div>
          </div>
        </div>
        {/* Trust Ends */}
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
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
