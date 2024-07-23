import React from 'react'
import styles from "../styles/Header.module.css"
import { motion } from "framer-motion"
import { fadeIn, textFadeUp } from '@/pages/utils/motion'

export default function Header({ label, title, subtitle }: { label: string, title: string, subtitle?: string }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.h1 variants={textFadeUp("up", "spring", 0, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={`location ${styles.location}`}>{label}</motion.h1>
        <div className={styles.contentContainer}>
          <p className={`title ${styles.title}`}>{title}</p>
          <p className={`subtitle ${styles.subtitle}`}>{subtitle}</p>
        </div>
      </div>
    </div >
  )
}
