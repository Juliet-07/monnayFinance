import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import { TiTick } from "react-icons/ti";
import Navbar from "../components/navbar";

const RegSuccessful = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* <Navbar /> */}
      <div
        className={styles.jumbotronReg}
        style={{
          position: "relative",
          backgroundImage: `url(${Jumbo})`,
          width: "100%",
          height: "850px",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.jumbotronFluidReg}>
          <div className={styles.registrationContainer}>
            <div className={styles.createDiv}>
              <Image src="/icon.png" alt=" Logo" width={30} height={30} />
            </div>
            <div className={styles.tickBorder}>
              <TiTick className={styles.tick} />
            </div>
            <div>
              <h5 className={styles.registrationHeader}>
                Registration Successful
              </h5>
              <p className={styles.registrationText}>
                Welcome! Your account has been created successfully.
                <br />
                Click on the login button to access your account.{" "}
              </p>
              <Link href="/signin">
                <button
                  type="submit"
                  className={styles.registrationSuccessfulButton}
                >
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegSuccessful;
