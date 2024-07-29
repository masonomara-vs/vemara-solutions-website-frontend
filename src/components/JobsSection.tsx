import React from 'react'
import Header from "@/components/Header";
import styles from "../styles/contact.module.css";
import { motion } from "framer-motion";
import { fadeIn, textFadeUp } from "../../utils/motion";
import Navbar from "@/components/Navbar";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function JobsSection({ jobs }: { jobs: SanityDocument[] }) {
  return (
    <div className={styles.teamWrapper} style={{ paddingTop: 32 }}>
      <div className={styles.teamContainer} style={{ gap: 8 }}>
        <div className={styles.headerContainerLeft}>
          <div className={styles.headerContainerLeftText}>
            <motion.h3 variants={textFadeUp("up", "spring", 0, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Join our team:</motion.h3>
          </div>
        </div>
        <div className={styles.contactWrapper} style={{ paddingBottom: 96 }}>
          <div className={`${styles.contactContainerMobile} mobile`}>
            {jobs.map((job) => {
              return (
                <motion.div
                  className={styles.linkContainer}
                  variants={fadeIn("up", "spring", 0, 0.8)}
                  key={job._id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}
                >
                  <h4 className="label">{job.title}</h4>
                  <div className="description">
                    {job.overview}
                  </div>
                  <div className={styles.linkContainerButtonWrapper}>
                    <Link className="buttonPrimaryBackground" target="_top" href="/careers/job-application">
                      <span className={`callout`}>Apply now</span>
                      <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
                    </Link>
                    <Link className="buttonSecondaryBackground" target="_top" href={`/careers/${job.slug.current}`}>
                      <span className={`callout`}>Learn more</span>
                      <Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt="" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className={`${styles.contactContainerDesktopCareers} desktop`}>
            {jobs.map((job) => {

              return (
                <motion.div
                  className={styles.linkContainer}
                  key={job._id}
                  variants={fadeIn("up", "spring", 0, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}
                >
                  <h4 className="label">{job.title}</h4>
                  <div className="description">
                    {job.overview}
                  </div>
                  <div className={styles.linkContainerButtonWrapper}>
                    <Link className="buttonPrimaryBackground" target="_top" href="/careers/job-application">
                      <span className={`callout`}>Apply now</span>
                      <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
                    </Link>
                    <Link className="buttonSecondaryBackground" target="_top" href={`/careers/${job.slug.current}`}>
                      <span className={`callout`}>Learn more</span>
                      <Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt="" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
