import React from "react";
import styles from "../styles/Footer.module.css";
import { motion } from "framer-motion";
import { fade, fadeIn, textFadeUp } from "@/pages/utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Image
            src="/logos/png/logo--white.png"
            width={400}
            height={400}
            priority
            alt=""
            className={styles.image}
          ></Image>
          <span className={styles.title}>
            We're excited to see what comes next.
          </span>
          <Link
            className="buttonPrimaryForeground"
            target="_top"
            href={`/contact`}
          >
            <span className={`callout`}>Schedule a call</span>
            <Image
              height={12.87}
              width={12.87}
              src="clientActionArrowBlack.svg"
              priority
              alt=""
            ></Image>
          </Link>
          <Link
            className="buttonSecondaryForeground"
            target="_top"
            href={`/careers`}
          >
            <span className={`callout`}>Explore jobs</span>
            <Image
              height={12.87}
              width={12.87}
              src="clientActionArrowWhite.svg"
              priority
              alt=""
            ></Image>
          </Link>
        </div>
        <div className={styles.contentContainer}>
          <Image
            src="/logos/png/logo--white.png"
            width={57.94}
            height={32}
            priority
            alt=""
          ></Image>
          <span className={styles.title2}>Discover Vemara Solutions</span>
          <Link href={"/home"} target={"_top"} className={styles.title3}>
            Home
          </Link>
          <Link href={"/work"} target={"_top"} className={styles.title3}>
            Work
          </Link>
          <Link href={"/services"} target={"_top"} className={styles.title3}>
            Services
          </Link>
          <Link href={"/about"} target={"_top"} className={styles.title3}>
            About
          </Link>
          <Link href={"/careers"} target={"_top"} className={styles.title3}>
            Careers
          </Link>
          <Link href={"/contact"} target={"_top"} className={styles.title3}>
            Contact
          </Link>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.rowContentContainer}>
            <Link href={"/contact"} target={"_top"} className={styles.title3}>
              Privacy Policy
            </Link>
            <span className={styles.title3}>|</span>
            <Link href={"/contact"} target={"_top"} className={styles.title3}>
              {" "}
              Sitemap
            </Link>
          </div>
          <div className={styles.copyrightText}>
            2024 Vemara Solutions. All Rights Reserved.
          </div>
        </div>
        <div className={styles.contentContainer}>
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
        </div>
        <div className={styles.contentContainer}>
        <span className={styles.title}>
            Contact us
          </span>
          <Link
            className="buttonPrimaryForeground"
            target="_top"
            href={`/contact`}
          >
            <span className={`callout`}>Schedule a call</span>
            <Image
              height={12.87}
              width={12.87}
              src="clientActionArrowBlack.svg"
              priority
              alt=""
            ></Image>
          </Link>
          <Link
            className="buttonSecondaryForeground"
            target="_top"
            href={`/contact/message-us`}
          >
            <span className={`callout`}>Message us</span>
            <Image
              height={12.87}
              width={12.87}
              src="clientActionArrowWhite.svg"
              priority
              alt=""
            ></Image>
          </Link>
          <Link
            target="_top"
            href={`tel:7324554515`}
          >
             <Image
              height={12.87}
              width={12.87}
              src="/logos/png/phone.png"
              priority
              alt=""
            ></Image>
            <span className={styles.title3}> (732) 455-4515</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
