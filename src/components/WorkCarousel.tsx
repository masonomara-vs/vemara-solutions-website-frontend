import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { fadeIn } from '@/pages/utils/motion'
import { motion } from 'framer-motion'
import styles from '../styles/WorkCarousel.module.css'

export function WorkCarousel({ clients }: { clients: any }) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>


        {clients.map((client: any, index: number) => (
          <motion.div
            variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            key={index}
            className={styles.embla__slide}
          >
            <div className={styles.workCard}>
              <h3 className="label">{client.name}</h3>
              <p className="description">{client.overview}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
