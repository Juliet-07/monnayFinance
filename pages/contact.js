import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
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
          <h2 className={styles.about}>Contact Us</h2>
          <p className={styles.content} id={styles.message}>
            We would love to hear from you. Kindly fill the form below and we
            will get back to you within 24 hours.
          </p>
        </div>
      </div>
      {/* Jumbotron Ends */}
      {/* Contact form */}
      <div className="mt-10 w-100 flex justify-center align-middle">
        <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4 w-96">
          <h4 className={styles.contactHeader}>Contact Form</h4>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullname"
            >
              Full name
            </label>
            <input
              className="border rounded py-1 px-2"
              id="fullname"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="border rounded py-1 px-2"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Message
            </label>
            <textarea
              className="border rounded py-1 px-2"
              id="email"
              type="email"
              rows={7}
            />
          </div>
          <div className={styles.createButtonDiv}>
            <button type="button" href="#" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Contact form */}
      {/* Subscribe */}
      <div className={styles.subscribeContainer}>
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
            <p style={{ color: "#ffffff", marginTop: 10, textAlign: "center" }}>
              Investment opportunities in multiple
              <br /> markets, one account.
            </p>
          </div>
          <ul className={styles.footerBottomText}>
            <h5>Quick links</h5>
            <Link href="/">
              <li>
                <a href="#" style={{ fontSize: 16 }}>
                  Home
                </a>
              </li>
            </Link>
            <Link href="/about">
              <li>
                <a href="#" style={{ fontSize: 16 }}>
                  About us
                </a>
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <a href="#" style={{ fontSize: 16 }}>
                  Contact us
                </a>
              </li>
            </Link>
            <Link href="/faq">
              <li>
                <a href="#" style={{ fontSize: 16 }}>
                  FAQ
                </a>
              </li>
            </Link>
          </ul>
          <ul className={styles.footerBottomText}>
            <h5>Address</h5>
            <li style={{ fontSize: 16 }}>Vanha Talvitie 11 C,</li>
            <li style={{ fontSize: 16 }}>HELSINKI 00580 Finland</li>
            <br />
            <br />
            <li style={{ fontSize: 18 }}>Email:</li>
            <li style={{ fontSize: 16 }}>contact@monnay.finance</li>
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
export default Contact;
