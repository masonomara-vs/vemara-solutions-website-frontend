import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import styles from '../../../styles/aboutUs.module.css'
import { motion } from 'framer-motion'
import { textFadeUp } from '../../../../utils/motion'

export default function index() {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - About Us</title>
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
      <Navbar firstTitle='Home' firstLink="/" secondTitle="About" secondLink='/about' thirdTitle='About Us' />
      <Header
        label="About Us"
        title="A tech-forward and creative full-service agency"
        subtitle="Led by Mike Veit and Mason O'Mara, our agency offers end-to-end strategy and implementation" />
      <div className={styles.wrapper}>
        <div className={`${styles.containerMobile}`}>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            From digital products including mobile apps, websites, and custom software to technical solutions derived from user research and working in different contexts throughout your company. Our team drives businesses towards their goals and create new opportunities through our comprehensive services.
          </motion.div>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            We are a full-service agency providing end-to-end strategy and implementation from ideating and researching business initiatives to the design and development of new and existing projects. We focus on delivering tailored, scalable, and reliable products.          </motion.div>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            Founded by Mike Veit and Mason O'Mara who connected over an interest in each other's work and shared experience in leading development teams at Fortune 500 companies, developing apps and websites for startups, and providing consultation and design services for diverse businesses.          </motion.div>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            We work with a wide range of clients across various industries, leveraging our expertise in industry-leading technology and our commitment to understanding our clients' needs. This enables us to produce creative, high-performing products that stand out.</motion.div>
        </div>
        <div className={`${styles.containerDesktop}`}>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            From digital products including mobile apps, websites, and custom software to technical solutions derived from user research and working in different contexts throughout your company. Our team drives businesses towards their goals and create new opportunities through our comprehensive services.
          </motion.div>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0.3, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            We are a full-service agency providing end-to-end strategy and implementation from ideating and researching business initiatives to the design and development of new and existing projects. We focus on delivering tailored, scalable, and reliable products.          </motion.div>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            Founded by Mike Veit and Mason O'Mara who connected over an interest in each other's work and shared experience in leading development teams at Fortune 500 companies, developing apps and websites for startups, and providing consultation and design services for diverse businesses.          </motion.div>
          <motion.div className="body" variants={textFadeUp("up", "spring", 0.4, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            We work with a wide range of clients across various industries, leveraging our expertise in industry-leading technology and our commitment to understanding our clients' needs. This enables us to produce creative, high-performing products that stand out.</motion.div>
        </div>
      </div>
    </div>
  )
}
