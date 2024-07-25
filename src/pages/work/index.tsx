import Header from '@/components/Header';
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import styles from "../../styles/work.module.css";
import { client, sanityFetch } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn } from '../../../utils/motion';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const urlFor = (source: SanityImageSource, projectId: string, dataset: string) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function getStaticProps() {
  const CLIENTS_QUERY = `*[
    _type == "client"
    && defined(slug.current)
  ]{_id, name, slug, overview, primaryImage, logo, whiteLogo, position }|order(position desc)`;

  const clients = await sanityFetch<SanityDocument[]>({ query: CLIENTS_QUERY });
  const { projectId, dataset } = client.config();

  return {
    props: {
      clients,
      projectId,
      dataset
    },
  };
}

const WorkIndex = ({ clients, projectId, dataset }: { clients: SanityDocument[], projectId: string, dataset: string }) => {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - Work</title>
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
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Work" />
      <Header label="Work" title="Creating intuitive, creative, and scalable solutions with industry-leading technology." subtitle="We have over 20 active clients with an average relationship of more than a year and a 96% retention rate." />
      <div className={styles.clientsWrapper}>
        <div className={`${styles.clientsContainerMobile} mobile`}>

          {clients.map((client, index) => {
            return (
              <motion.div
                key={client._id}
                variants={fadeIn("up", "spring", 0, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }}
              >
                <div className={styles.clientLinkContainer}>
                  <div
                    className={styles.clientLinkImage}
                    style={{
                      backgroundImage: `url(${urlFor(client?.primaryImage, projectId, dataset)?.url()})`,
                    }}
                  />
                  <div className={styles.clientInformation}>
                    <div className={styles.clientInfoTextWrapper}>
                      <div className={`intro`}><span>{client?.name}</span></div>
                      <div className={`label`}><span>{client.overview}</span></div>
                    </div>

                    <div
                      className={styles.clientActionWrapper}
                    >
                      <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`}>
                        <span className={`callout`}>Read more</span>
                        <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
        <div className={`${styles.clientsContainerDesktop} desktop`}>
          {clients.map((client, index) => {
            return (
              <motion.div
                key={client._id}
                variants={fadeIn("up", "spring", index % 2 === 0 ? '0.0' : '0.1', 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} // Adjust amount as needed
              >
                <div className={styles.clientLinkContainer}>
                  <div
                    className={styles.clientLinkImage}
                    style={{
                      backgroundImage: `url(${urlFor(client?.primaryImage, projectId, dataset)?.url()})`,
                    }}
                  />
                  <div className={styles.clientInformation}>
                    <div className={`intro`}><span>{client?.name}</span></div>
                    <div className={`label`}><span>{client.overview}</span></div>
                    <div className={styles.clientActionWrapper}>
                      <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`}>
                        <span className={`callout`}>Read more</span>
                        <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default WorkIndex;
