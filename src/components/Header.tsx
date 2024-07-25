import styles from "../styles/Header.module.css"
import { motion } from "framer-motion"
import { fade, textFadeUp, textFadeUpSmall } from '@/pages/utils/motion'

export default function Header({ label, title, subtitle }: { label: string, title: string, subtitle?: string }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.h1 variants={fade("spring", 0, 0.4, 0.6)} className={`location ${styles.location}`}>{label}</motion.h1>
        <div className={styles.contentContainer}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={`title ${styles.title}`}>{title}</motion.p>
          <motion.p variants={textFadeUpSmall("up", "spring", .1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={`subtitle ${styles.subtitle}`}>{subtitle}</motion.p>
        </div>
      </div>
    </div>
  )
}
