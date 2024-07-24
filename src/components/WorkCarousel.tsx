import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { fadeIn } from '@/pages/utils/motion'
import { motion } from 'framer-motion'
import styles from '../styles/WorkCarousel.module.css'
import AutoScroll from 'embla-carousel-auto-scroll'
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from 'next/link'
import Image from 'next/image'


const urlFor = (source: SanityImageSource, projectId: string, dataset: string) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;


export function WorkCarousel({ clients, options }: { clients: any, options?: any }) {
  const { projectId, dataset } = client.config();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true
  }, [
    AutoScroll({
      playOnInit: true,
      speed: .5,
    })
  ]);
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {clients.map((client: any, index: number) => (
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
                  <div className={`intro`}>{client?.name}</div>
                  <div className={`label`}>{client?.overview}</div>
                  <div className={styles.clientActionWrapper}>
                    <Link className="buttonPrimaryBackground" target="_top" href={`/work/${client.slug.current}`} >
                      <span className={`callout`}>Read more</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.embla__controls}>
        <button className={styles.embla__play} onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}