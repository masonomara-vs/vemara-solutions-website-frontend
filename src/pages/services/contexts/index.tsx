import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { motion } from "framer-motion";
import styles from "../../../styles/contexts.module.css"
import { ringGrow } from '../../../../utils/motion'

export default function index() {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - Contexts</title>
        <meta name="description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070808" />
        <meta name="msapplication-TileColor" content="#070808" />
        <meta name="theme-color" content="#070808" />
      </Head>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" secondLink='/services' thirdTitle='Contexts' />
      <Header
        label="Contexts"
        title="We work within different business contexts considering different aspects of your business"
        subtitle="We provide both end-to-end strategy and service. We prioritize understanding your business goals and drive you towards them." />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.contextWrapper}>
            <div className={`${styles.contextRings}`}>
              <motion.div variants={ringGrow("up", "spring", 0, 2.4, .16)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingA}
                style={{ borderWidth: 1.25 }} />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6, .16)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingB}
                style={{ borderWidth: 1.25 }} />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6, .24)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingC}
                style={{ borderWidth: 1.25 }} />
              <motion.div variants={ringGrow("up", "spring", .0, .8)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingD}
              />
            </div>
            <div className={styles.contextCardInfo}>
              <h3 className="label">
                Product Development
              </h3>
              <span className="body">
                Our in-house expertise in end-to-end software development, mobile app development, and website and custom solutions sets us apart.              </span>
            </div>
          </div>
          <div className={styles.contextWrapper}>
            <div className={`${styles.contextRings}`}>
              <motion.div variants={ringGrow("up", "spring", 0, 2.4, .16)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingA}
                style={{ borderWidth: 1.25 }} />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6, .24)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingB}
                style={{ borderWidth: 1.25 }} />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingC}
              />
              <motion.div variants={ringGrow("up", "spring", .0, .8)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingD}
              />
            </div>
            <div className={styles.contextCardInfo}>
              <h3 className="label">
                Product Design
              </h3>
              <span className="body">
                From initial UX/UI design to visual and product design, we create prototypes and information architecture for a tangible and intuitive interface.              </span>
            </div>
          </div>
          <div className={styles.contextWrapper}>
            <div className={`${styles.contextRings}`}>
              <motion.div variants={ringGrow("up", "spring", 0, 2.4, .24)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingA}
                style={{ borderWidth: 1.25 }} />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingB}
              />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingC}
              />
              <motion.div variants={ringGrow("up", "spring", .0, .8)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingD}
              />
            </div>
            <div className={styles.contextCardInfo}>
              <h3 className="label">
                Product Vision
              </h3>
              <span className="body">
                We develop clear roadmaps and strategies based on user and foundational research to ensure your product resonates with your target audience.              </span>
            </div>
          </div>
          <div className={styles.contextWrapper}>
            <div className={`${styles.contextRings}`}>
              <motion.div variants={ringGrow("up", "spring", 0, 2.4)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingA}
              />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingB}
              />
              <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingC}
              />
              <motion.div variants={ringGrow("up", "spring", .0, .8)} initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={styles.contextRingD}
              />
            </div>
            <div className={styles.contextCardInfo}>
              <h3 className="label">
                Technology Strategy
              </h3>
              <span className="body">
                We make sure your technology supports your current and future resources and goals by optimizing your system infrastructure and improving workflows.              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
