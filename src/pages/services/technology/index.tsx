import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import { SanityDocument } from 'next-sanity'
import { client, sanityFetch } from '@/sanity/client'
import styles from "../../../styles/technology.module.css"
import { motion } from "framer-motion"
import { fade, fadeIn, fadeInButton, textFadeUp, textFadeUpSmall } from '../../../../utils/motion'

export async function getStaticProps() {
  const TECHNOLOGY_QUERY = `*[
    _type == "technology"
  ]{_id, name, description, image, category, position}|order(position desc)`

  const technology = await sanityFetch<SanityDocument[]>({ query: TECHNOLOGY_QUERY })
  const { projectId, dataset } = client.config()

  return {
    props: { technology, projectId, dataset },
  }
}

const TechnologyMap = ({ technology }: { technology: any }) => {
  return (
    <>
      {technology.map((tech: any) => (
        <motion.div key={tech._id} variants={textFadeUpSmall("up", "spring", 0, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={styles.techItem}>
          <span className={styles.techName}>{tech.name}</span>
        </motion.div>
      ))}
    </>
  )
}

export default function TechnologyPage({ technology }: { technology: any }) {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - Technology</title>
        <meta name="description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />
        <link rel="icon" href="/icon.ico" />
        <link rel="shortcut icon" href="/icon.ico" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#070808" />
        <meta property="og:title" content="Vemara Solutions - Technology Consulting, Design, and Development" />
        <meta property="og:description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.vemarasolutions.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vemara Solutions - Technology Consulting, Design, and Development" />
        <meta name="twitter:description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070808" />
        <meta name="msapplication-TileColor" content="#070808" />
        <meta name="theme-color" content="#070808" />
      </Head>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" secondLink='/services' thirdTitle='Technology' />
      <Header
        label="Technology"
        title="Leveraging our expertise in industry-leading technology."
        subtitle="We work with a wide range of clients across various industries. This enables us to produce creative, high-performing products that stand out."
      />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <TechnologyMap technology={technology} />
        </div>
      </div>
    </div>
  )
}