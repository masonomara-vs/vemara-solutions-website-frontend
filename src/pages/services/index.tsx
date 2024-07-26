import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/home.module.css'
import { fadeIn, fadeInButton, growDown, growRight, ringGrow, textFadeUp, textFadeUpSmall } from '../../../utils/motion'
import Link from 'next/link'
import Image from 'next/image'
import { client, sanityFetch } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'
import TechnologyCarousel from '@/components/TechnologyCarousel'

export async function getStaticProps() {
  const CLIENTS_QUERY = `*[
    _type == "client" && defined(slug.current)
  ]{_id, name, slug, overview, primaryImage, logo, whiteLogo, position}|order(position desc)`

  const TECHNOLOGY_QUERY = `*[
    _type == "technology"
  ]{_id, name, description, image, category, position}|order(position desc)`

  const SOLUTIONS_QUERY = `*[
    _type == "solution" && featured == true
  ]{_id, name, description, position}|order(position asc)`

  const MOBILE_SOLUTIONS_QUERY = `*[
    _type == "solution" && featured == true
  ]{_id, name, description, position}|order(position asc)[0...6]`

  const clients = await sanityFetch<SanityDocument[]>({ query: CLIENTS_QUERY })
  const technology = await sanityFetch<SanityDocument[]>({ query: TECHNOLOGY_QUERY })
  const solutions = await sanityFetch<SanityDocument[]>({ query: SOLUTIONS_QUERY })
  const mobileSolutions = await sanityFetch<SanityDocument[]>({ query: MOBILE_SOLUTIONS_QUERY })
  const { projectId, dataset } = client.config()

  return {
    props: { clients, technology, mobileSolutions, solutions, projectId, dataset },
  }
}


const SolutionsSection = ({ solutions, mobileSolutions }: { solutions: any, mobileSolutions: any }) => (
  <div className={styles.solutionsWrapper} style={{ paddingTop: 0 }}>
    <div className={styles.solutionsContainer} >
      <div className={`${styles.headerContainerLeft} ${styles.headerContainerLeftSub}`} style={{ paddingTop: 64, borderTop: '1px solid rgba(7,8,8,0.1)' }}>
        <div className={styles.headerContainerLeftText}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>In-house solutions for your business.</motion.p>
          <motion.div variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className="body">We love delivering tailored, scalable, and reliable products, derived from a variety of strategies and services done by our team.</motion.div>
        </div>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton("up", "spring", .1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/services/solutions`} >
              <span className={`callout`}>View all solutions</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>
        </div>

      </div>
      <div className={`${styles.solutionCardsWrapperDesktop}`}>
        {solutions.map((solution: any, index: number) => (
          <motion.div
            variants={fadeIn("up", "spring", index == 1 ? 0.1 : index == 2 ? 0.2 : index == 3 ? 0.3 : index == 4 ? 0.0 : index == 5 ? 0.1 : index == 6 ? 0.2 : index == 7 ? 0.3 : 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            key={index}
          >
            <div className={styles.solutionCard}>
              <h3 className="label">{solution.name}</h3>
              <p className="description">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={`${styles.solutionCardsWrapperMobile}`}>
        {mobileSolutions.map((solution: any, index: number) => (
          <motion.div
            variants={fadeIn("up", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            key={index}
          >
            <div className={styles.solutionCard}>
              <h3 className="label">{solution.name}</h3>
              <p className="description">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

const TechSection = ({ technology }: { technology: any }) => (
  <div className={styles.techWrapper} style={{ paddingTop: 32 }}>
    <div className={styles.techContainer}>
      <div className={`${styles.headerContainerLeft} ${styles.headerContainerLeftSub}`} style={{ paddingTop: 64, borderTop: '1px solid rgba(7,8,8,0.1)' }}>
        <div className={styles.headerContainerLeftText}>
          <motion.p
            variants={textFadeUp('up', 'spring', 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className={` ${styles.headerContainerHeader} header`}
          >
            We have your tech stack covered.
          </motion.p>
          <motion.p
            variants={textFadeUpSmall('up', 'spring', 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className={` ${styles.headerContainerBody} body`}
          >
            We utilize a variety of industry-leading technologies to deliver your final products.
          </motion.p>
        </div>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton('up', 'spring', 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/services/technologies`}>
              <span className={`callout`}>View all technologies</span>
              <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
            </Link>
          </motion.div>
        </div>
      </div>


      <TechnologyCarousel technology={technology} />

    </div>
  </div>
)

const ContextSection = () => (
  <div className={styles.contextWrapper} style={{ paddingTop: 32, paddingBottom: 96 }}>
    <div className={styles.contextContainer}>

      <div className={`${styles.headerContainerLeft} ${styles.headerContainerLeftSub}`} style={{ paddingTop: 64, borderTop: '1px solid rgba(7,8,8,0.1)' }}>
        <div className={styles.headerContainerLeftText}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Working within a variety of business contexts for your needs.</motion.p>
        </div>

        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton("up", "spring", .1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/services/contexts`} >
              <span className={`callout`}>Learn more</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>
        </div>

      </div>

      <div className={styles.contextContentWrapper}>
        <div className={`${styles.contextContent} mobile`}>
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextContentDivider} />
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            <div className={styles.contextContentCard}>
              <div className={`${styles.contextContentCardTitle} label`}>
                Product Development
              </div>
              <div className={`${styles.contextContentCardBody} description`}>
                Our in-house expertise in software development, mobile app development, and website and custom solutions sets us apart.
              </div>
            </div>
          </motion.div>
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextContentDivider} />
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            <div className={styles.contextContentCard}>
              <div className={`${styles.contextContentCardTitle} label`}>
                Product Design
              </div>
              <div className={`${styles.contextContentCardBody} description`}>
                From initial UX/UI design to visual and product design, we create designs and systems for tangible and intuitive interfaces.
              </div>
            </div>
          </motion.div>
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextContentDivider} />
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            <div className={styles.contextContentCard}>
              <div className={`${styles.contextContentCardTitle} label`}>
                Product Vision
              </div>
              <div className={`${styles.contextContentCardBody} description`}>
                We develop clear roadmaps and strategies from user and foundational research to ensure you engage with your audience.
              </div>
            </div>
          </motion.div>
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextContentDivider} />
          <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}>
            <div className={styles.contextContentCard}>
              <div className={`${styles.contextContentCardTitle} label`}>
                Technology Strategy
              </div>
              <div className={`${styles.contextContentCardBody} description`}>
                We ensure your technology supports your current and future resources and goals by optimizing workflows.
              </div>
            </div>
            <div className={styles.contextContentDivider} style={{ marginTop: 20 }} />
          </motion.div>

        </div>
        <div className={`${styles.contextRings} desktop`}>
          <motion.div variants={ringGrow("up", "spring", 0, 2.4)} initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextRingA} />
          <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextRingB} />
          <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextRingC} />
          <motion.div variants={ringGrow("up", "spring", .0, .8)} initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={styles.contextRingD} />
        </div>
      </div>
      <div className={`${styles.contextRings} mobile`}>
        <motion.div variants={ringGrow("up", "spring", 0, 2.4)} initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={styles.contextRingA} />
        <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={styles.contextRingB} />
        <motion.div variants={ringGrow("up", "spring", 0, 1.6)} initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={styles.contextRingC} />
        <motion.div variants={ringGrow("up", "spring", .0, .8)} initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={styles.contextRingD} />
      </div>
    </div>
  </div>
)

export default function index({ clients, technology, solutions, mobileSolutions, projectId, dataset }: { clients: any, technology: any, projectId: any, solutions: any, mobileSolutions: any, dataset: any }) {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - Services</title>
        <meta name="description" content="Drive your business towards goals and new opportunities. Access industry-leading technology strategy, design, and development for digital products and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070808" />
        <meta name="msapplication-TileColor" content="#070808" />
        <meta name="theme-color" content="#070808" />
      </Head>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" />
      <Header
        label="Services"
        title="Vemara Solutions Strategy & Services Overview"
        subtitle="Proud to deliver a diverse range of services, solutions, technologies, and business contexts to meet our client‘s business needs." />
      <SolutionsSection solutions={solutions} mobileSolutions={mobileSolutions} />
      <TechSection technology={technology} />
      <ContextSection />
    </div>
  )
}
