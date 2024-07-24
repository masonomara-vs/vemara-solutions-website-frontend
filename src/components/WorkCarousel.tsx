import React, { useCallback, useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { fadeIn } from '@/pages/utils/motion'
import styles from '../styles/WorkCarousel.module.css'
import AutoScroll from 'embla-carousel-auto-scroll'
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";


const urlFor = (source: SanityImageSource, projectId: any, dataset: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

interface Client {
  _id: string;
  primaryImage: SanityImageSource;
  name: string;
  overview: string;
  slug: {
    current: string;
  };
}

interface WorkCarouselProps {
  clients: Client[];
  projectId: any;
  dataset: any
}

const WorkCarousel: React.FC<WorkCarouselProps> = ({ clients, projectId, dataset }) => {
  const baseVelocity = 0.5;
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 800
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-33, -66, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.carouselWrapper}>


      <div className={styles.carouselContainer}>
        <motion.div className={styles.carouselContainer} style={{ x }}>
          {clients.map((client) => (

            <div className={styles.clientLinkContainer} key={client._id}>
              <div
                className={styles.clientLinkImage}
                style={{
                  backgroundImage: `url(${urlFor(client.primaryImage, projectId, dataset)?.url()})`,
                }}
              />
              <div className={styles.clientInformation}>
                <div className={`intro`}>{client.name}</div>
                <div className={`label`}>{client.overview}</div>
                <div className={styles.clientActionWrapper}>
                  <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`} >
                    <span className={`callout`}>Read more</span>
                    <Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt="" />
                  </Link>
                </div>
              </div>
            </div>

          ))}
          {clients.map((client) => (

            <div className={styles.clientLinkContainer} key={client._id}>
              <div
                className={styles.clientLinkImage}
                style={{
                  backgroundImage: `url(${urlFor(client.primaryImage, projectId, dataset)?.url()})`,
                }}
              />
              <div className={styles.clientInformation}>
                <div className={`intro`}>{client.name}</div>
                <div className={`label`}>{client.overview}</div>
                <div className={styles.clientActionWrapper}>
                  <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`} >
                    <span className={`callout`}>Read more</span>
                    <Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt="" />
                  </Link>
                </div>
              </div>
            </div>

          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default WorkCarousel;