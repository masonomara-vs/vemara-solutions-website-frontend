import Header from '@/components/Header'
import React from 'react'
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import styles from "../../styles/clients.module.css"
import { client, sanityFetch } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

const CLIENTS_QUERY = `*[
  _type == "client"
  && defined(slug.current)
]{_id, name, slug, overview, primaryImage, logo, whiteLogo}|order(name desc)`;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Function to extract dimensions from the Sanity image URL
const extractDimensions = (url: any) => {
  const regex = /-(\d+)x(\d+)\.png/;
  const match = url.match(regex);

  if (match) {
    return {
      width: parseInt(match[1], 10),
      height: parseInt(match[2], 10),
    };
  }

  return null; // Return null if dimensions are not found
};

export default async function ClientIndex() {
  const clients = await sanityFetch<SanityDocument[]>({ query: CLIENTS_QUERY });


  return (
    <>
      <Breadcrumbs firstTitle='Home' firstLink="/" secondTitle="Work" />
      <Header label="Work" title="Creating intuitive, creative, and scalable solutions with industry-leading technology." subtitle="We have over 20 active clients with an average relationship of more than a year and a 96% retention rate." />
      <div className={styles.clientsContainer}>
        {clients.map((client) => {
          // Extract dimensions for whiteLogo
          const whiteLogoUrl = urlFor(client?.whiteLogo)?.url();
          const whiteLogoDimensions = whiteLogoUrl ? extractDimensions(whiteLogoUrl) : null;

          return (
            <Link
              key={client._id}
              className={styles.clientLinkWrapper}
              href={`/clients/${client.slug.current}`}
              style={{
                backgroundImage: `url(${urlFor(client?.primaryImage)?.url()})`,
              }}
            >
              <div className={styles.clientLinkOverlay} />
              <div className={styles.clientLinkContainer}>
                <div className={styles.logoWrapper} style={{
                  aspectRatio: `${whiteLogoDimensions?.width} / ${whiteLogoDimensions?.height}`
                }}>
                  <div className={styles.logoContainer} style={{
                    aspectRatio: `${whiteLogoDimensions?.width} / ${whiteLogoDimensions?.height}`, position: 'relative',

                  }}>
                    <Image
                      src={`${urlFor(client?.whiteLogo)?.url()}`}
                      alt={`${client?.name}` || "Client"}
                      fill
                      objectFit='contain'
                    />
                  </div>
                </div>
                <div className={styles.clientLinkDescription}>
                  {client?.overview}
                </div>
                <div className={styles.clientLinkButtonWrapper}>


                  <div className={styles.clientLinkButtonText}>
                    Read More
                  </div>

                  <Image className={styles.clientLinkButtonArrow} src={`/right-chevron.png`}
                    alt={"arrow"}
                    height={11}
                    width={5.5}
                  >

                  </Image>
                </div>
              </div>
            </Link>

          );
        })}

      </div >
    </>
  )
}
