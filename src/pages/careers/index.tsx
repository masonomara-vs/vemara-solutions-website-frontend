import Header from "@/components/Header";
import styles from "../../styles/contact.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import Navbar from "@/components/Navbar";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
      <Head>
        <title>Vemara Solutions - Careers</title>
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
      <Navbar firstTitle="Home" firstLink="/" secondTitle="Careers" />
      <Header
        label="Careers"
        title="Join our dynamic team and work on exciting projects."
        subtitle="If you think you’re a good fit for our innovative team, we’d love to hear from you."
      />
      <div className={styles.contactWrapper}>
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
  );
};

export default CareersIndex;
