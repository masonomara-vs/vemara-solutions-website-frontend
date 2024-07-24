import styles from "../styles/Footer.module.css";
import { motion } from "framer-motion";
import { fadeInButton } from "@/pages/utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <div className={styles.imageCalloutContainer}>
            <Image
              src="/jump.gif"
              alt="Vemara Solutions"
              fill
              style={{ objectFit: "cover" }} />
          </div>
          <span className="header" style={{ color: "white" }}>
            We're excited to see what comes next.
          </span>
          <div className={styles.ctaButtonsWrapper}>
            <motion.div
              variants={fadeInButton("up", "spring", .3, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} // Adjust amount as needed
            >
              <Link className="buttonPrimaryForeground" target="_top" href={`/contact`} >
                <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="clientActionArrowBlack.svg" priority alt=""></Image>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInButton("up", "spring", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} // Adjust amount as needed
            >
              <Link className="buttonSecondaryForeground" target="_top" href={`/contact`} >
                <span className={`callout`}>Explore jobs</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
              </Link>
            </motion.div>
          </div>
        </div>


        <div className={styles.menuContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/logos/png/logo--white.png"
              alt="Vemara Solutions"
              fill
              style={{ objectFit: "cover" }} />
          </div>
          <span className="label" style={{ color: "white" }}>Discover Vemara Solutions</span>
          <div className={styles.menuLinkWrapper}>
            <Link href={"/home"} target={"_top"} className="buttonTextBackground">
              <span className="callout">Home</span>
            </Link>
            <Link href={"/work"} target={"_top"} className="buttonTextBackground">
              <span className="callout">Work</span>
            </Link>
            <Link href={"/services"} target={"_top"} className="buttonTextBackground">
              <span className="callout">Services</span>
            </Link>
            <Link href={"/about"} target={"_top"} className="buttonTextBackground">
              <span className="callout">About</span>
            </Link>
            <Link href={"/careers"} target={"_top"} className="buttonTextBackground">
              <span className="callout">Careers</span>
            </Link>
            <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
              <span className="callout">Contact</span>
            </Link>
          </div>

          <div className={styles.policyLinkWrapper}>
            <div className={styles.policyLinkRow}>
              <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
                <span className="active">Privacy Policy</span>
              </Link>
              <div className={styles.policyDivider} />
              <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
                <span className="active">Sitemap</span>
              </Link>
            </div>
            <div className="description" style={{ color: "rgba(255,255,255,.6)" }}>
              2024 Vemara Solutions. All Rights Reserved.
            </div>
          </div>

        </div>

        {/* <div className={styles.contentContainer}>
          <span className={styles.title2}>
            Keep up with our quarterly newsletter. Insights from experts on tech
            and scaling.
          </span>
          <div className={styles.emailContainer}>
            <span className={styles.title3}>Your email:</span>
            <span className={styles.title3}>Input field</span>
          </div>
          <Link
            className="buttonPrimaryForeground"
            target="_top"
            href={`/contact`}
          >
            <span className={`callout`}>Subscribe</span>
            <Image
              height={12.87}
              width={12.87}
              src="clientActionArrowBlack.svg"
              priority
              alt=""
            ></Image>
          </Link>
        </div> */}
        <div className={styles.contactUsContainer}>
          <span className="label" style={{ color: "white" }}>
            Contact us
          </span>
          <div className={styles.contactUsButtonsWrapper}>
            <motion.div
              variants={fadeInButton("up", "spring", .3, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} // Adjust amount as needed
            >
              <Link className="buttonPrimaryForeground" target="_top" href={`/contact`} >
                <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="clientActionArrowBlack.svg" priority alt=""></Image>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInButton("up", "spring", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} // Adjust amount as needed
            >
              <Link className="buttonSecondaryForeground" target="_top" href={`/contact`} >
                <span className={`callout`}>Message us</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
              </Link>
            </motion.div>
          </div>
          <Link
            target="_top"
            href={`tel:7324554515`}
            className={styles.telephoneButton}
          >
            <Image
              height={14.63}
              width={14.63}
              src="/logos/png/phone.png"
              priority
              alt=""
            ></Image>
            <span className="active" style={{ color: "white" }}> (732) 455-4515</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
