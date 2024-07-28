import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { SanityDocument } from 'next-sanity'
import { client, sanityFetch } from '@/sanity/client'
import styles from "../../../styles/solutions.module.css"
import { motion } from "framer-motion"
import { fade, fadeIn, fadeInButton, textFadeUp, textFadeUpSmall } from '../../../../utils/motion'

export async function getStaticProps() {

  const SOLUTION_CATEGORY_QUERY = `*[_type == "solutionCategory"]{
    _id,
    key,
    name,
    solutions[]->{
      _id,
      name,
      description,
      position
    }
  }`

  let solutionCategories = await sanityFetch<SanityDocument[]>({ query: SOLUTION_CATEGORY_QUERY })
  solutionCategories = solutionCategories.reverse();
  const { projectId, dataset } = client.config()

  return {
    props: { solutionCategories, projectId, dataset },
  }
}

export default function Solutions({ solutionCategories }: { technology: any, solutionCategories: any }) {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - Solutions</title>
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
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" secondLink='/services' thirdTitle='Solutions' />
      <Header
        label="Solutions"
        title="We are a full-service agency providing end-to-end strategy and implementation."
        subtitle="From ideating and researching business initiatives to the design and development of new and existing projects. We focus on delivering tailored, scalable, and reliable products." />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {solutionCategories.map((category: any) => (
            <div key={category._id} className={styles.category}>
              <motion.h2 variants={textFadeUp("up", "spring", 0, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className="header">{category.name}</motion.h2>
              <div className={styles.solutionsWrapper}>
                {category.solutions.map((solution: any) => (
                  <motion.div key={solution._id} variants={fadeIn("up", "spring", 0, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0 }} className={styles.solution}>
                    <h3>{solution.name}</h3>
                    <p>{solution.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
