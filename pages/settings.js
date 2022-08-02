import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { AiOutlineHome } from "react-icons/ai";
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
        {/* Content */}
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="mb-10">
                <div className="rounded h-20 bg-primary">
                  <h4 className="cardLabel text-left">Personal Details</h4>
                </div>
              </div>
              <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4 text-xl"
                      htmlFor="inline-full-name"
                    >
                      Name:
                    </label>
                  </div>
                  <div className="w-100 md:w-2/3">
                    <input
                      className="border w-full py-2 px-2 mt-2"
                      id="inline-full-name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4 text-xl"
                      htmlFor="inline-password"
                    >
                      Email:
                    </label>
                  </div>
                  <div className="w-100 md:w-2/3">
                    <input
                      className="border w-full py-2 px-2 mt-2"
                      id="inline-password"
                      type="email"
                    />
                  </div>
                </div>
              </form>
              <div className="mb-10">
                <div className="rounded h-20 bg-primary">
                  <h4 className="cardLabel text-left">Account Details</h4>
                </div>
                <div className="flex justify-between align-center mt-10 pl-20 pr-20">
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          BTC wallet:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          ETH wallet:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                  </form>
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          DOGE wallet:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          USDT wallet:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mb-10">
                <div className="rounded h-20 bg-primary">
                  <h4 className="cardLabel text-left">Account Security</h4>
                </div>
                <div className="flex justify-between align-center mt-10 pl-20 pr-20">
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          Current Pasword:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          Security Question:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                  </form>
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          New Password:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-3 text-xl"
                          htmlFor="inline-full-name"
                        >
                          Answer:
                        </label>
                      </div>
                      <div className="w-100 md:w-2/3">
                        <input
                          className="border w-full py-2 px-2 mt-2"
                          id="inline-full-name"
                          type="text"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <button className={styles.settingsButton} type="button">
                Save Changes
              </button>
            </div>
            {/* footer */}
          </div>
          <footer className="footer">
            {/* <div className="flex justify-center align-center"> */}
            <p className="footer-text">
              COPYRIGHT MONNAYFINANCE 2022 - TERMS & CONDITIONS PRIVACY POLICY
            </p>
            {/* </div> */}
          </footer>
        </div>
        {/* Content Ends*/}
      </Layout>
    </>
  );
};
export default Settings;
