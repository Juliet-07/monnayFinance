import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Jumbotron = ({ heading, message }) => {
  return (
    <>
      <div
        className=" relative w-full h-[560px] mb-12 bg-fixed bg-center bg-cover custom-img"
        id= {styles.jumbotron}
      >
        <div className={styles.jumbotronFluid} />
        <div className={styles.jumbotronProps}>
          <h2 className={styles.properties}>{heading}</h2>
          <p className={styles.content}>{message}</p>
          <Link href="/signup">
            <button className={styles.jumboButton}>GET STARTED</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Jumbotron;
