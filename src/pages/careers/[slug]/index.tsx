import { GetStaticPaths, GetStaticProps } from "next";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Image from "next/image";
import styles from "@/styles/careers.module.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from '@portabletext/react'
import { motion } from "framer-motion";
import { fade, fadeIn, fadeInButton, textFadeUp } from "../../../../utils/motion"


const urlFor = (
  source: SanityImageSource,
  projectId: string,
  dataset: string
) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const JOBS_QUERY = `*[
  _type == "jobs" &&
  slug.current == $slug
][0]{
    ...,
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const clients = await sanityFetch<SanityDocument[]>({
    query: `*[_type == "jobs"]{ "slug": slug.current }`,
  });

  const paths = clients.map((client) => ({
    params: { slug: client.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jobsData = await sanityFetch<SanityDocument>({
    query: JOBS_QUERY,
    params: { slug: params?.slug as string },
  });

  const { projectId, dataset } = client.config();

  if (!jobsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job: jobsData,
      projectId,
      dataset,
    },
  };
};

type JobsPageProps = {
  job:
  | (SanityDocument & { logoMetadata: { width: number; height: number } })
  | null;
  projectId: string;
  dataset: string;
};

const JobsPage = ({ job, projectId, dataset }: JobsPageProps) => {
  if (!job) {
    return <div>Job not found.</div>;
  }

  const {
    title,
    overview,
    responsibilities,
    lookingFor,
    qualifications,
    image,
    logoMetadata,
  } = job;

  const getPhotoUrl = (photo: SanityImageSource) =>
    photo ? urlFor(photo, projectId, dataset)?.url() : null;

  const logoAspectRatio = logoMetadata
    ? logoMetadata.width / logoMetadata.height
    : 1;

  return (
    <div>
      <Head>
        <title>Vemara Solutions - {job.title}</title>
        <meta name="description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2"/>
        <link rel="icon" href="/icon.ico" />
        <link rel="shortcut icon" href="/icon.ico" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#070808" />
        <meta property="og:title" content="Vemara Solutions - Technology Consulting, Design, and Development"/>
        <meta property="og:description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.vemarasolutions.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vemara Solutions - Technology Consulting, Design, and Development"
        />
        <meta
          name="twitter:description"
          content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions."
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070808" />
        <meta name="msapplication-TileColor" content="#070808" />
        <meta name="theme-color" content="#070808" />
      </Head>
      <Navbar
        firstTitle="Home"
        firstLink="/"
        secondTitle="Careers"
        secondLink='/careers'
        thirdTitle={title}
      />
      <Header label="Job Opportunity" title={title} linkHref={"/careers/job-application"} linkTitle={"Apply now"} />


      <div className={styles.wrapper}>
        <div className={styles.container}>

          <motion.div className={styles.jobDetailsWrapper} variants={fade("spring", 0, 0.8, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            <motion.h5 variants={textFadeUp("up", "spring", 0, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} className="header">Job overview</motion.h5>
            <div className="body" style={{ marginBottom: 47 }}>{overview}</div>
            <motion.h5 variants={textFadeUp("up", "spring", 0, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} className="header">Who we are looking for</motion.h5>
            <PortableText
              value={lookingFor}
              components={{
                list: {
                  // Ex. 1: customizing common list types
                  bullet: ({ children }) => <ul className="body" style={{ marginBottom: 47 }}>{children}</ul>,
                },
              }}
            />
            <motion.h5 variants={textFadeUp("up", "spring", 0, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} className="header">Your responsibilities</motion.h5>
            <PortableText
              value={responsibilities}
              components={{
                list: {
                  // Ex. 1: customizing common list types
                  bullet: ({ children }) => <ul className="body" style={{ marginBottom: 47 }}>{children}</ul>,
                },
              }}
            />
            <motion.h5 variants={textFadeUp("up", "spring", 0, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} className="header">Qualifications</motion.h5>
            <PortableText
              value={qualifications}
              components={{
                list: {
                  // Ex. 1: customizing common list types
                  bullet: ({ children }) => <ul className="body" style={{ marginBottom: 47 }}>{children}</ul>,
                },
              }}
            />

            <motion.div
              variants={fadeInButton("up", "spring", .2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
            >
              <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/careers/job-application`} >
                <span className={`callout`}>Apply Now</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className={styles.media} variants={fadeIn("up", "spring", 0, 0.8)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }}>
            <Image src={getPhotoUrl(image) || "ship.gif"} alt="Vemara Solutions" unoptimized fill style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </div>



    </div >
  );
};

export default JobsPage;
