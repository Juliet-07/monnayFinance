import React, { useState, useEffect } from "react";
import Head from "next/head";
import Jumbo from "../public/monnayJumbo.png";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";

const withdraw_uri = "https://monnayfinance.com/api/withdrawal";

const Withdraw = () => {
  const router = useRouter();
  const initialValues = {
    amount: "",
    wallet: ["btc", "doge", "eth", "usdt"],
    comment: "",
    address: "",
  };
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState("");
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Juliet"));
    if (user !== null || user !== undefined) {
      setUser(user);
    }
    fetch(`https://monnayfinance.com/api/user/profile/${user.id}`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log("returns", data);
      });
  }, []);
  const { data = [] } = details;
  const [withdraw, setWithdraw] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWithdraw({ ...withdraw, [name]: value });
  };
  const { amount, wallet, comment, address } = withdraw;
  const withdrawal = () => {
    try {
      if (
        fetch(withdraw_uri, {
          method: "POST",
          body: JSON.stringify({
            amount: withdraw.amount,
            wallet: withdraw.wallet,
            comment: withdraw.comment,
            address: withdraw.address,
          }),
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
            "Content-type": "application/json;charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((json) => console.log(json))
      )
        alert("Amount in balace is insufficient");
      router.push("/withdrawConfirm");
    } catch (err) {
      console.log(err);
    }
  };
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

      <div className="wrapper">
        <div className="main-panel">
          <div
            className={styles.investContainer}
            style={{
              backgroundImage: `url(${Jumbo})`,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={styles.investFluid}>
              <div className={styles.withdraw}>
                <div className={styles.createDiv}>
                  <h6 className={styles.createWithdraw}>Withdraw</h6>
                  <p className={styles.withdrawText}>
                    Choose the account to make your withdrawal.
                  </p>
                </div>
                {/* form proper */}
                <div className="w-full">
                  <form
                    onSubmit={handleSubmit(withdrawal)}
                    className=" rounded px-8 pb-8 mb-10"
                  >
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label className="text-black text-sm" htmlFor="amount">
                          Amount
                        </label>
                        <label
                          className=" text-gray-500 text-sm"
                          htmlFor="amount"
                        >
                          Available Balance: ${data.walletBalance}
                        </label>
                      </div>
                      <input
                        className=" border w-full py-2 px-2 mt-2"
                        id="amount"
                        name="amount"
                        type="number"
                        value={amount}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex w-full md:w-1/2 px-6 md:mb-0">
                      <label
                        className="block text-black text-sm"
                        htmlFor="grid-state"
                      >
                        Wallet address:
                      </label>
                      <div className="relative w-full">
                        <select
                          className="block"
                          id="grid-state"
                          name="wallet"
                          onChange={handleChange}
                        >
                          <option value="btc">Btc</option>
                          <option value="doge">Doge</option>
                          <option value="eth">Eth</option>
                          <option value="usdt">Usdt</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        name="address"
                        className="border w-full py-2 px-2 mt-2"
                        type="text"
                        value={address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-black text-sm"
                        htmlFor="comment"
                      >
                        Comment:
                      </label>
                      <textarea
                        name="comment"
                        className="border w-full py-2 px-2"
                        id="comment"
                        rows={7}
                        value={comment}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button className={styles.withdrawButton} type="submit">
                      Withdraw
                    </button>
                  </form>
                </div>
                {/* form proper ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Withdraw;
