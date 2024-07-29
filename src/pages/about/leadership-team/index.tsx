import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { fadeIn, textFadeUp } from '../../../../utils/motion'
import styles from '../../../styles/home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import JobsSection from '@/components/JobsSection'

export async function getStaticProps() {
  const JOBS_QUERY = `*[
    _type == "jobs"
  ]{_id, title, slug, overview, benefits, jobType, niceToHave, responsibilities, qualifications }`;

  const jobs = await sanityFetch<SanityDocument[]>({ query: JOBS_QUERY });
  return {
    props: {
      jobs,
    },
  };
}

const TeamSection = () => (
  <div className={styles.teamWrapper} style={{ paddingTop: 0 }}>
    <div className={styles.teamContainer} style={{ gap: 24 }}>
      <div className={`${styles.headerContainerLeft} ${styles.headerContainerLeftSub}`}>
        <div className={styles.headerContainerLeftText}>
          <motion.h3 variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Founders and managing partners:</motion.h3>
        </div>
      </div>
      <div className={styles.teamBiosWrapper}>
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={styles.bioContainer}
        >

          <div className={styles.bioHeadshot}>
            <Image src="/masonHeadshot--circle.png"
              alt="Mason O'Mara"
              fill
              style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.bioContent}>
            <h3 className={`${styles.bioName} label`}>
              Mason O‘Mara
            </h3>
            <span className={`${styles.bioTitle} inactive`}>
              Managing Partner, Head of Product
            </span>
            <span className={`${styles.bioBody} description`}>
              <span className="mobile">Mason brings a wealth of experience in product and UX design, he provides the strategy and vision that makes Vemara unique.</span>
              <span className="desktop">Mason brings a wealth of experience in app and website design and development. With a strong background in product and UX design, he provides the strategy and vision that makes Vemara unique. When he’s not at his desk, Mason is surfing or traveling.</span>
            </span>
          </div>

        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className={`${styles.bioContainer} ${styles.bioContainerDesktop}`}
        >
          <div className={styles.bioHeadshot}>
            <Image src="/mikeHeadshot--circle.png"
              alt="Mike Veit"
              fill
              style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.bioContent}>
            <h3 className={`${styles.bioName} label`}>
              Mike Veit
            </h3>
            <span className={`${styles.bioTitle} inactive`}>
              Managing Partner, Head of Engineering
            </span>
            <span className={`${styles.bioBody} description`}>
              <span className="mobile">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies.</span>
              <span className="desktop">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies. Mike leads with a blend of technical expertise and strategic insight. Outside of his pursuits, Mike enjoys mountain bike rides and exercising.</span>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="mobile"
        >
          <div className={styles.bioContainer}>
            <div className={styles.bioHeadshot}>
              <Image src="/mikeHeadshot--circle.png"
                alt="Mike Veit"
                fill
                style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.bioContent}>
              <h3 className={`${styles.bioName} label`}>
                Mike Veit
              </h3>
              <span className={`${styles.bioTitle} inactive`}>
                Managing Partner, Head of Engineering
              </span>
              <span className={`${styles.bioBody} description`}>
                <span className="mobile">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies.</span>
                <span className="desktop">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies. Mike leads with a blend of technical expertise and strategic insight. Outside of his pursuits, Mike enjoys mountain bike rides and exercising.</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
)



export default function index({ jobs }: { jobs: SanityDocument[] }) {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - Leadership Team</title>
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
      <Navbar firstTitle='Home' firstLink="/" secondTitle="About" secondLink='/about' thirdTitle='Leadership Team' />
      <Header
        label="Leadership Team"
        title="Led by diverse backgrounds and skillsets for a well-rounded process."
        subtitle="We like to work with businesses that are leading interesting initiatives and implementing industry-leading technology to drive their goals forward."
      // linkHref="careers"
      // linkTitle="View open positions"
      />
      <TeamSection />
      
      <JobsSection jobs={jobs} />
    </div>
  )
}
