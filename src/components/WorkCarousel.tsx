import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';
import styles from '../styles/WorkCarousel.module.css';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import Image from 'next/image';

const urlFor = (source: SanityImageSource, projectId: string, dataset: string) =>
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
  projectId: string;
  dataset: string;
}

const WorkCarousel: React.FC<WorkCarouselProps> = ({ clients, projectId, dataset }) => {
  const baseVelocity = .33;
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
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredAction, setHoveredAction] = useState<boolean>(false);

  useAnimationFrame((t, delta) => {
    if (isHovered || hoveredAction) {
      return; // Pause motion when hovered
    }

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    velocityFactor.get() < 0 ? (moveBy += directionFactor.current * moveBy * velocityFactor.get() * -1) : (moveBy += directionFactor.current * moveBy * velocityFactor.get())

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={styles.carouselWrapper}

    >
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
                <div className={`intro`}><span>{client?.name}</span></div>
                <div className={`label`}><span>{client.overview}</span></div>
                <div className={styles.clientActionWrapper}>
                  <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`}>
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
                <div className={`intro`}><span>{client?.name}</span></div>
                <div className={`label`}><span>{client.overview}</span></div>
                <div className={styles.clientActionWrapper}>
                  <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`}>
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
                <div className={`intro`}><span>{client?.name}</span></div>
                <div className={`label`}><span>{client.overview}</span></div>
                <div className={styles.clientActionWrapper}>
                  <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`}>
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
