// pages/work/index.tsx
import Header from '@/components/Header';
import React from 'react';
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import styles from "../../styles/work.module.css";
import { client, sanityFetch } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '../utils/motion';
import Navbar from '@/components/Navbar';

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
                    <div className={`intro`}>{client?.name}</div>
                    <div className={`label`}>{client?.overview}</div>
                    <div className={styles.clientActionWrapper}>
                      <Link className={styles.clientAction} target="_top" href={`/work/${client.slug.current}`} >
                        <span className={`callout`}>View more</span><Image height={12.87} width={12.87} src="clientActionArrow.svg" priority alt=""></Image>
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
                    <div className={`intro`}>{client?.name}</div>
                    <div className={`label`}>{client?.overview}</div>
                    {/* <div className={`label`}>{index % 2 === 0 ? '0.0' : '0.1'}</div> */}
                    <div className={styles.clientActionWrapper}>
                      <Link className={styles.clientAction} target="_top" href={`/work/${client.slug.current}`} >
                        <span className={`callout`}>View more</span><Image height={12.87} width={12.87} src="clientActionArrow.svg" priority alt=""></Image>
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
