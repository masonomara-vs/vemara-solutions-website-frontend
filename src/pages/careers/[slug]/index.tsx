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
import {PortableTextComponents} from '@portabletext/react'

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
    slug,
    overview,
    jobType,
    responsibilities,
    lookingFor,
    qualifications,
    benefits,
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
        <title>Vemara Solutions - Careers</title>
        <meta
          name="description"
          content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/icon.ico" />
        <link rel="shortcut icon" href="/icon.ico" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#070808" />
        <meta
          property="og:title"
          content="Vemara Solutions - Technology Consulting, Design, and Development"
        />
        <meta
          property="og:description"
          content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions."
        />
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
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
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
      <div className={styles.careersWrapper}>
        <Navbar
          firstTitle="Home"
          firstLink="/"
          secondTitle="Careers"
          secondLink='/careers'
          thirdTitle={title}
        />
        <Header label="Job Oppurtunity" title={title} />
        <Link
          className="buttonSecondaryBackground"
          target="_top"
          href={`/careers/job-application`}
        >
          <span className={`callout`}>Apply now</span>
          <Image
            height={12.87}
            width={12.87}
            src="/clientActionArrowWhite.svg"
            priority
            alt=""
          ></Image>
        </Link>
        <Image
          height={12.87}
          width={12.87}
          src={getPhotoUrl(image) || "https://via.placeholder.com/550x310"}
          priority
          alt=""
        ></Image>
      </div>
      <h1>Job overview</h1>
      <div>{overview}</div>
      <h1>Who we are looking for</h1>
      <PortableText
        value={lookingFor}
        components={{
          list: {
            // Ex. 1: customizing common list types
            bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
          },
        }}
      />
       <h1>Your responsibilities</h1>
      <PortableText
        value={responsibilities}
        components={{
          list: {
            // Ex. 1: customizing common list types
            bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
          },
        }}
      />
       <h1>Your qualifications</h1>
      <PortableText
        value={qualifications}
        components={{
          list: {
            // Ex. 1: customizing common list types
            bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
          },
        }}
      />
       <Link
          className="buttonSecondaryBackground"
          target="_top"
          href={`/careers/job-application`}
        >
          <span className={`callout`}>Apply now</span>
          <Image
            height={12.87}
            width={12.87}
            src="/clientActionArrowWhite.svg"
            priority
            alt=""
          ></Image>
        </Link>
      {/* <Navbar firstTitle='Home' firstLink="/" secondTitle="Work" secondLink='/work' thirdTitle={title} />
      <div className={styles.wrapper}>


        <div className={styles.logoWrapper}>
          <div className={styles.logoContainer} style={{ aspectRatio: logoAspectRatio }}>
            <Image
              src={getPhotoUrl(primaryImage) || "https://via.placeholder.com/550x310"}
              alt={title || "Client"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>


        <div className={styles.detailsWrapper}>
          <div className={styles.detailsContainer}>
            {overview ? (
              <div className={styles.details}>
                <span className={"inactive"}>Industry:&nbsp;{overview.replace("-", " ")}</span>
              </div>
            ) : null}
            <div className={`mobile ${styles.divider}`}></div>
            <div className={styles.details}>
              <span className={"inactive"}>Technology:&nbsp;</span>
              {technology
                ? technology.map((tech: any, index: number) => (
                  <span className={"inactive"} key={tech._id}>
                    {tech.name}
                    {index < technology.length - 1 && ",\u00A0"}
                  </span>
                ))
                : null}
            </div>
          </div>
        </div>

    
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            {summary && (
              <div className={"header"}>{summary}</div>
            )}
            {primaryImage && (<div className={styles.contentImageWrapper}>
              <Image
                src={
                  getPhotoUrl(primaryImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>)}
            {quote && (
              <div className={styles.quoteWrapper}>
                <div className={`location ${styles.quote}`}>{quote}</div>
                <div className={`body ${styles.quoteAuthor}`}>{quoteAuthor}</div>
                <div className={`inactive ${styles.quoteAuthorTitle}`}>{quoteAuthorTitle}</div>
              </div>
            )}
            {challenge && (
              <div className={styles.contentCopy}>
                <h4 className='header'>{shortName || name}‘s challenge</h4>
                <p className='body'>{challenge}</p>
              </div>
            )}
            {challengeImage && (<div className={styles.contentImageWrapper}>
              <Image
                src={
                  getPhotoUrl(challengeImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>)}
            {solution && (
              <div className={styles.contentCopy}>
                <h4 className='header'>{shortName || name}‘s solution</h4>
                <p className='body'>{solution}</p>
              </div>
            )}
            {solutionImage && (<div className={styles.contentImageWrapper}>
              <Image
                src={
                  getPhotoUrl(solutionImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>)}
            <div className={styles.contentCopy}>
              <h4 className='header'>Our roles</h4>
              <div className={styles.solutionsArraysWrapper}>

                {filteredAndSortedCategories.map((category: any) => (
                  <div className={styles.solutionsWrapper} key={category._id}>
                    <h5 className="inactive" style={{ opacity: .6 }}>{category.name}</h5>
                    <div className={styles.solutionsArrayWrapper}>
                      {category.solutions
                        .filter((solution: any) =>
                          getClientSolutionIds().includes(solution._id)
                        )
                        .map((categorySolution: any) => (
                          <div key={categorySolution._id} className={`${styles.solutionsButton} callout`}>
                            {categorySolution.name}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default JobsPage;
