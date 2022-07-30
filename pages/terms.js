import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Jumbo from "../public/monnayJumbo.png";
import styles from "../styles/Home.module.css";
import { TiTick } from "react-icons/ti";
import Navbar from "../components/navbar";

const Terms = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MonnayFinance</title>
        <meta name="description" content="Generated monnay finance" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <div
        className={styles.jumbotronReg}
        style={{
          position: "relative",
          backgroundImage: `url(${Jumbo})`,
          width: "100%",
          height: "1900px",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.jumbotronFluidReg}>
          <h2 className={styles.termsHeader}>Terms and Privacy Policy</h2>
          <div className={styles.termsBody}>
            <h5 className={styles.termsListHeader}>Legal Issues</h5>
            <ul className={styles.termsList}>
              <li style={{ margin: "15px" }}>
                Terms & Conditions of Service as set forth herein shall govern
                the relationship between the Participant and the Fund and are
                effective immediately after the Participant has made a deposit
                with the online investment program provided by the Fund and
                shall be valid till the deposit term expires.
              </li>
              <li style={{ margin: "15px" }}>
                The Participant must be of legal age in his country of residence
                to be able to create an account with the Monnay Finance online
                investment program, and in all the cases the Participant's
                minimal age must be 18 years.
              </li>
              <li style={{ margin: "15px" }}>
                The investment scheme and the participation in it may be
                restricted or limited in different jurisdictions. It is
                understood that it is the responsibility of the Participant to
                get aware of and to comply with all the legal provisions and
                regulations in force in his country of residence with respect to
                the investment practices and procedures, exchange controls,
                taxes and related matters.
              </li>
              <li style={{ margin: "15px" }}>
                The Firm does not offer advices on the suitability of the Firm's
                services for the Participant's individual needs, nor does the
                Firm provides for any judgment on the Participant's behalf,
                relating to government or tax regulations in particular. It is
                the responsibility of the Investor to take independent
                assessment as to the suitability of said investment scheme for
                the Participant's particular circumstances. No information on
                the Firm's website is to be considered as a solicitation or an
                offer to participate in investment schemes the Firm provides.
              </li>
              <li style={{ margin: "15px" }}>
                Every deposit is considered to be a private transaction between
                the Firm and the Participant. As a private transaction, this
                program is exempt from the NZ Securities Act of 1933, the NZ
                Securities Exchange Act of 1934 and the NZ Investment Company
                Act of 1940 and all other rules, regulations and amendments
                thereof.
              </li>
            </ul>
            <h5 className={styles.termsListHeader}>Deposits</h5>
            <ul className={styles.termsList}>
              <li style={{ margin: "15px" }}>
                Deposits are accepted and paid through USDT, Bitcoin, Ethereum
                or Dogecoin payment systems. The Firm may consider accepting
                funds via other payment methods and/or e-currencies when
                appropriate.
              </li>
              <li style={{ margin: "15px" }}>
                Minimum deposit amount is $100 and the maximum deposit amount is
                unlimited the Participant can allocate with the Firm during one
                day. There is no limit as per the number of deposits the
                Participant can make.
              </li>
              <li style={{ margin: "15px" }}>
                Deposits shall begin to earn interest the next business day
                after they have been placed and withdrawals will be made due to
                your selected investment plan
              </li>
              <li style={{ margin: "15px" }}>
                The Participant is provided with a fixed daily interest or
                return at the rate that depends on the amount of deposit and
                particular invesment plans terms. Interests and returns are
                credited to the Investor's account balance daily Monday to
                Sunday or lumpsum at maturity, depending on investment plan
                chosen.
              </li>
              <li style={{ margin: "15px" }}>
                The principal amount of deposit is locked in during the whole
                investment period and can only be withdrawn after the term
                completion unless included into daily payments. It is credited
                to the Participant's account balance at the date of maturity,
                and is available for disposal anytime thereafter.
              </li>
              <li style={{ margin: "15px" }}>
                The funds available at the Participant's account balance bear no
                interest and are available for withdrawal, or can be reinvested
                again at the Participant's discretion.
              </li>
            </ul>
            <h5 className={styles.termsListHeader}>Withdrawals</h5>
            <ul className={styles.termsList}>
              <li style={{ margin: "15px" }}>
                Withdrawals are processed everyday of the week from Monday to
                Sunday directly to the Participant's e-currency account within
                24 hours after withdrawal request has been submitted.
                Withdrawals is fast and automatic.
              </li>
              <li style={{ margin: "15px" }}>
                All interest payments and principal withdrawals shall be paid
                tax- free at source. The Participant understands and agrees that
                it is his sole responsibility to comply with any laws or
                regulations regarding the establishment of an account or any
                interest and withdrawal paid thereon in the Participant's
                jurisdiction.
              </li>
            </ul>
            <h5 className={styles.termsListHeader}>Anti-spam Policy</h5>
            <ul className={styles.termsList}>
              <li style={{ margin: "15px" }}>
                The Firm strictly prohibits sending unsolicited mass e-mails of
                any kind. Use of spam will not be tolerated and the Firm will
                terminate an account of any Participant who is caught at sending
                unsolicited advertising messages that harm the Firm's
                reputation.
              </li>
              <li style={{ margin: "15px" }}>
                The Firm collects, retains and uses information about the
                Participant only for technical and administrative purposes. All
                collected data will be kept private and will not be exposed to
                any third parties without the permission of the Participant
                unless a legal court order is presented.
              </li>
              <li style={{ margin: "15px" }}>
                The Participant agrees to keep all information about his
                relations with the Firm including transaction details, private
                correspondence, newsletters private and not to expose it on
                public.
              </li>
            </ul>
            <h5 className={styles.termsListHeader}>Disclaimer</h5>
            <ul className={styles.termsList}>
              <li style={{ margin: "15px" }}>
                The Firm will not be liable for any losses arising from delay in
                the transmission of funds due to causes beyond its control. The
                Firm will not be held responsible for any losses or damages
                occurring as a result of military force, political intervention,
                the prescriptions of domestic or foreign authorities or events
                occurring as a result of catastrophe or Act of God.
              </li>
              <li style={{ margin: "15px" }}>
                The Firm will not be liable for any losses arising from failure
                of the Participant to hold his computer systems free from
                malicious software used by third parties to get unauthorized
                access to Participant's account. It is Participant's sole
                responsibility to check his system for trojans, key loggers and
                other malware.
              </li>
              <li style={{ margin: "15px" }}>
                The Participant agrees to hold the Firm harmless of any
                liability regarding possible loss of Participant's funds during
                investment process. Participant understands that every
                investment he makes is been monitored and safe by the company
                experts you have nothing to worry about your funds as we take
                full responsibility of it we guarantee you safe investment
                process on this long term project.
              </li>
            </ul>
          </div>
          <p className={styles.agreeTerms}>
            By creating an account with Monnay Finance Limited, you agree to be
            bound by the Terms and Conditions above. If you don't agree, please,
            do not go any further.
          </p>
          <Link href="/signup">
            <button type="button" className={styles.termsButton}>
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Terms;
