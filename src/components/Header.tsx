import React from 'react'
import styles from "../styles/Header.module.css"

export default function Header({ label, title, subtitle }: { label: string, title: string, subtitle?: string }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={`location ${styles.label}`}>{label}</h1>
        <div className={styles.contentContainer}>
          <p className={`title ${styles.title}`}>{title}</p>
          <p className={`subtitle ${styles.subtitle}`}>{subtitle}</p>
        </div>
      </div>
    </div>

  )
}
