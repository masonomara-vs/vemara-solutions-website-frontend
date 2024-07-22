import React from 'react'
import styles from "../styles/Breadcrumbs.module.css"
import Link from 'next/link'
import Image from 'next/image'

export default function Breadcrumbs({ firstTitle, firstLink, secondTitle, secondLink, thirdTitle, thirdLink }: { firstTitle: string, firstLink: string, secondTitle: string, secondLink?: string, thirdTitle?: string, thirdLink?: string }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href={firstLink} target="_top" className={styles.activeLink}>
          <div>{firstTitle}</div>
        </Link>
        <Image src="breadcrumbsChevron.svg" height={8.75} width={5.4} priority alt="" />
        {secondLink ? (<Link href={secondLink} target="_top" className={styles.activeLink}>
          <div>{secondTitle}</div>
        </Link>) : (<div className={styles.inactiveLink}>
          <div>{secondTitle}</div>
        </div>)}
        <Image src="breadcrumbsChevron.svg" height={8.75} width={5.4} priority alt="" />
        {thirdLink ? (<Link href={thirdLink} target="_top" className={styles.activeLink}>
          <div>{thirdTitle}</div>
        </Link>) : (<div className={styles.inactiveLink}>
          <div>{thirdTitle}</div>
        </div>)}
      </div>
    </div >
  )
}
