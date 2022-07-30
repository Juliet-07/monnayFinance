import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

const Courses = () => {
  return (
    <div className={styles.container}>
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
            <h2 className={styles.planJumbo}>Our Courses</h2>
          </div>
        </div>
        {/* Jumbotron Ends */}
        {/* Courses */}
        <div className={styles.coursesDiv}>
          <div className={styles.coursesCard}>
            <div className={styles.bookDiv}>
              <p style={{ color: "orange" }}>free</p>
              <div style={{ position: "relative", left: "30px" }}>
                <Image
                  src="/free.png"
                  width={183}
                  height={240}
                  alt="free course"
                />
              </div>
            </div>
            {/* <p>beginners training ebook</p> */}
          </div>
        </div>
        {/* Courses */}
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
              Courses opportunities in multiple
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
            <li style={{ fontSize: 16 }}>Vanha Talvitie 11 C,</li>
            <li style={{ fontSize: 16 }}>HELSINKI 00580 Finland</li>
            <br />
            <br />
            <li style={{ fontSize: 18, fontWeight: 700 }}>Email:</li>
            <li style={{ fontSize: 16 }}>contact@monnay.finance</li>
          </ul>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <p className={styles.footerBottomText}>
          COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
        </p>
      </div>
    </div>
  );
};
export default Courses;
