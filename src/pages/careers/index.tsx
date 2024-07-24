import Header from "@/components/Header";
import React from "react";
import styles from "../../styles/contactUs.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Navbar from "@/components/Navbar";
import LinkCard from "@/components/LinkCard";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";

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

const CareersIndex = ({ jobs }: { jobs: SanityDocument[] }) => {
  return (
    <div>
      <Navbar firstTitle="Home" firstLink="/" secondTitle="Careers" />
      <Header
        label="Careers"
        title="Join our dynamic team and work on exciting projects."
        subtitle="If you think you’re a good fit for our innovative team, we’d love to hear from you."
      />
      <div className={styles.contactUsWrapper}>
        <div className={`${styles.contactUsContainerMobile} mobile`}>
          {jobs.map((job) => {
            return (
              <motion.div
                key={job._id}
                variants={fadeIn("up", "spring", 0, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }}
              >
                <LinkCard
                  title={job.title}
                  description={job.overview}
                  buttonTitle={"Apply now"}
                  buttonLink={`/careers/job-application`}
                  button2Title={"Learn more"}
                  button2Link={`/careers/job-oppurtunities/${job.slug}`}
                />
              </motion.div>
            );
          })}
        </div>

        <div className={`${styles.contactUsContainerDesktop} desktop`}>
          {jobs.map((job) => {
            return (
              <motion.div
                key={job._id}
                variants={fadeIn("up", "spring", 0, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }}
              >
                <LinkCard
                  title={job.title}
                  description={job.overview}
                  buttonTitle={"Apply now"}
                  buttonLink={`/careers/job-application/${job.slug}`}
                  button2Title={"Learn more"}
                  button2Link={`/careers/job-oppurtunities/${job.slug}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareersIndex;
