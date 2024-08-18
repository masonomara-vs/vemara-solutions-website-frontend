import Header from "@/components/Header";
import styles from "../../styles/contact.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textFadeUp } from "../../../utils/motion";
import { useEffect, useState } from "react";
import Head from "next/head";

const ContactIndex = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [asburyParkOpen, setAsburyParkOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      setCurrentTime(timeString);

      const dayOfWeek = now.toLocaleString("en-US", { timeZone: "America/New_York", weekday: "short" });
      const isWeekend = dayOfWeek === "Sat" || dayOfWeek === "Sun";

      const hourOptions: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "numeric",
        hour12: false,
      };
      const currentHour = new Intl.DateTimeFormat("en-US", hourOptions).format(now);
      const currentMinute = now.getMinutes();
      const currentTimeInMinutes = parseInt(currentHour) * 60 + currentMinute;

      const openingTime = 9 * 60; // 9:00 AM
      const closingTime = 18 * 60; // 6:00 PM

      const isOpen = !isWeekend && currentTimeInMinutes >= openingTime && currentTimeInMinutes < closingTime;
      setAsburyParkOpen(isOpen);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Vemara Solutions - Contact Us</title>
        <meta name="description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />
        <link rel="icon" href="/icon.ico" />
        <link rel="shortcut icon" href="/icon.ico" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#070808" />
        <meta property="og:title" content="Vemara Solutions - Technology Consulting, Design, and Development" />
        <meta property="og:description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.vemarasolutions.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vemara Solutions - Technology Consulting, Design, and Development" />
        <meta name="twitter:description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070808" />
        <meta name="msapplication-TileColor" content="#070808" />
        <meta name="theme-color" content="#070808" />
      </Head>
      <Navbar firstTitle="Home" firstLink="/" secondTitle="Contact Us" />
      <Header
        label="Contact Us"
        title="We're excited to see what comes next."
        subtitle="We like to partner with businesses that are leading innovative initiatives and using industry-leading technology to drive their goals forward."
      />
      <div className={styles.contactWrapper}>
        <div className={`${styles.contactContainerMobile} mobile`}>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">Let‘s get started</h4>
            <div className="description">
              Looking to work with tech consultants who have expert development capabilities and creative design skills? We’re eager to connect with you.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/contact/schedule-a-call">
                <span className={`callout`}>Schedule a call</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">Join our team</h4>
            <div className="description">
              If you think you’re a good fit for our innovative team, we’d love to hear from you.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/careers/job-application">
                <span className={`callout`}>View job openings</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">Press and media inquiries</h4>
            <div className="description">
              For press information, including images, media, speaking engagements, questions, and articles.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/contact/press-and-media">
                <span className={`callout`}>Press inquiries</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">General inquiries</h4>
            <div className="description">
              For any support, introductions, general interest, getting started on a project, or any other inquiries.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/contact/message-us">
                <span className={`callout`}>Message us</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className={`${styles.contactContainerDesktop} desktop`}>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">Let‘s get started</h4>
            <div className="description">
              Looking to work with tech consultants who have expert development capabilities and creative design skills? We’re eager to connect with you.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/contact/schedule-a-call">
                <span className={`callout`}>Schedule a call</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0.1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">Join our team</h4>
            <div className="description">
              If you think you’re a good fit for our innovative team, we’d love to hear from you.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/careers/job-application">
                <span className={`callout`}>View job openings</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">Press and media inquiries</h4>
            <div className="description">
              For press information, including images, media, speaking engagements, questions, and articles.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/contact/press-and-media">
                <span className={`callout`}>Press inquiries</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.linkContainer}
            variants={fadeIn("up", "spring", 0.3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <h4 className="label">General inquiries</h4>
            <div className="description">
              For any support, introductions, general interest, getting started on a project, or any other inquiries.
            </div>
            <div className={styles.linkContainerButtonWrapper}>
              <Link className="buttonPrimaryBackground" target="_top" href="/contact/message-us">
                <span className={`callout`}>Message us</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className={styles.officesWrapper}>
          <motion.h3 variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className="header">Vemara Solutions Offices</motion.h3>
          <motion.div className={styles.officesContainer} variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>

            <div className={styles.officeCard}>
              <div className={styles.officeImage}>
                <Image
                  src={`/asburyPark.png`}
                  alt="Asbury Park"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.mainInfo}>
                <h2 className="label">Asbury Park, NJ</h2>
                <div className={styles.timeWrapper}>
                  <span className="label">{currentTime}&nbsp;&nbsp;</span>
                  <span className="label" style={{ color: asburyParkOpen ? '#386641' : '#9c3636' }}>&#8226;&nbsp;</span>
                  <span className="label" style={{ color: asburyParkOpen ? '#386641' : '#9c3636' }}>{asburyParkOpen ? 'Open' : 'Closed'}</span>

                </div>
              </div>
              <div className={styles.secondaryInfo}>
                <div className="description">
                  1301 Corlies Ave, Neptune City NJ 07712
                </div>
                <div className="description">(732) 455-4515</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;
