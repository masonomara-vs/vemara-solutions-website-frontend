import React from 'react'
import styles from "../styles/Header.module.css"

export default function Header({ label, title, subtitle }: { label: string, title: string, subtitle?: string }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.label}>{label}</h1>
        <div className={styles.contentContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </div>

  )
}
