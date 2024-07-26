import styles from "../styles/Header.module.css"
import { motion } from "framer-motion"
import { fade, fadeInButton, textFadeUp, textFadeUpSmall } from '../../utils/motion'
import Link from "next/link"
import Image from "next/image"

export default function Header({ label, title, subtitle, linkHref, linkTitle }: { label: string, title: string, subtitle?: string, linkHref?: string, linkTitle?: string }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.h1 variants={fade("spring", 0, 0.4, 0.6)} initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={`location ${styles.location}`}>{label}</motion.h1>
        <div className={styles.contentContainer}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={`title ${styles.title}`}>{title}</motion.p>

          {linkHref && (<motion.div
            variants={fadeInButton("up", "spring", .2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`${linkHref}`} >
              <span className={`callout`}>{linkTitle}</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>)}

          <motion.p variants={textFadeUpSmall("up", "spring", .1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={`subtitle ${styles.subtitle}`}>{subtitle}</motion.p>
        </div>
      </div>
    </div >
  )
}
