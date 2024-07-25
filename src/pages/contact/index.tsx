import Header from "@/components/Header";
import styles from "../../styles/contact.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textFadeUp } from "../../../utils/motion";
import { useEffect, useState } from "react";

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
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      setCurrentTime(timeString);

      // Get the current hour in EST
      const hourOptions: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "numeric",
        hour12: false
      };
      const currentHour = new Intl.DateTimeFormat("en-US", hourOptions).format(now);
      const currentMinute = now.getMinutes();
      const currentTimeInMinutes = parseInt(currentHour) * 60 + currentMinute;

      // Define opening and closing times in minutes
      const openingTime = 9 * 60; // 9:00 AM
      const closingTime = 18 * 60; // 6:00 PM

      // Check if the current time is within the operating hours
      setAsburyParkOpen(currentTimeInMinutes >= openingTime && currentTimeInMinutes < closingTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
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
              <Link className="buttonPrimaryBackground" target="_top" href="/careers">
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
              <Link className="buttonPrimaryBackground" target="_top" href="/careers">
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
                  <span className="label" style={{ color: asburyParkOpen ? '#386641' : '#bc4749' }}>&#8226;&nbsp;</span>
                  <span className="label" style={{ color: asburyParkOpen ? '#386641' : '#bc4749' }}>Open</span>

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
