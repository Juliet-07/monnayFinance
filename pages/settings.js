import React from "react";
import Head from "next/head";
import Layout from "./components/layout";
import NavDashboard from "./components/navbarDashboard";
import styles from "../styles/Home.module.css";
import { AiOutlineCamera } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Settings = () => {
  return (
    <>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
      </Head>
      <Layout>
        <NavDashboard />
        {/* Content */}
        <div className="main-panel">
          <div className="container">
            <div className="mb-10">
              <div className="profileSettings" id={styles.contentHeader}>
                <p className="profileSettingsText">Personal Details</p>
              </div>
            </div>
            <div className="flex">
              <form className="mt-4">
                <div className="md:flex md:items-center mb-6">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4 text-xl"
                    htmlFor="full-name"
                  >
                    Name:
                  </label>
                  <input
                    className="w-full border rounded px-4 text-gray-700"
                    id="full-name"
                    type="text"
                  />
                </div>
                <div className="md:flex md:items-center mb-6">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4 text-xl"
                    htmlFor="password"
                  >
                    Email:
                  </label>

                  <input
                    className="w-full border rounded px-4 text-gray-700"
                    id="password"
                    type="email"
                  />
                </div>
              </form>
              {/* picture */}
              <div className="profilePictureDiv">
                <p className="edit">Edit Display Photo</p>
                <div className="picture">
                  <AiOutlineCamera size={56} />
                </div>
                <button className="uploadPicture">Upload</button>
                <p className="size">Max size: 12MB</p>
              </div>
            </div>
            <div className="mb-10">
              <div className="profileSettings" id={styles.contentHeader}>
                <p className="profileSettingsText">Account Details</p>
              </div>
              <div className="flex justify-between align-center mt-10 pl-20 pr-20">
                <form className="mt-4">
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="btc"
                    >
                      BTC wallet:
                    </label>

                    <input
                      className="border rounded w-full px-4 text-gray-700"
                      id="btc"
                      type="text"
                    />
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="eth"
                    >
                      ETH wallet:
                    </label>

                    <input
                      className="border w-full rounded px-4"
                      id="eth"
                      type="text"
                    />
                  </div>
                </form>
                <form className="mt-4">
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="doge"
                    >
                      DOGE wallet:
                    </label>

                    <input
                      className="border w-full rounded px-4"
                      id="doge"
                      type="text"
                    />
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="usdt"
                    >
                      USDT wallet:
                    </label>

                    <input
                      className="border w-full rounded px-4"
                      id="usdt"
                      type="text"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="mb-10">
              <div className="profileSettings" id={styles.contentHeader}>
                <p className="profileSettingsText">Account Security</p>
              </div>
              <div className="flex justify-between align-center mt-10 pl-20 pr-20">
                <form className="mt-4">
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="currentPassword"
                    >
                      Current Pasword:
                    </label>

                    <input
                      className="border w-full rounded px-4"
                      id="currentPassword"
                      type="text"
                    />
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="question"
                    >
                      Security Question:
                    </label>

                    <input
                      className="border w-full rounded px-4"
                      id="question"
                      type="text"
                    />
                  </div>
                </form>
                <form className="mt-4">
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="newPassword"
                    >
                      New Password:
                    </label>

                    <input
                      className="border w-full rounded px-4"
                      id="newPassword"
                      type="text"
                    />
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                      htmlFor="answer"
                    >
                      Answer:
                    </label>

                    <input
                      className="border w-full rounded px-4"
                      id="answer"
                      type="text"
                    />
                  </div>
                </form>
              </div>
            </div>
            <button className={styles.settingsButton} type="button">
              Save Changes
            </button>
          </div>
          {/* footer */}
          <footer className="footer">
            <p className="footer-text">
              COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
            </p>
          </footer>
        </div>
        {/* Content Ends*/}
      </Layout>
    </>
  );
};
export default Settings;
