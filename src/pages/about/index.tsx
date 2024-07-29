import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, fadeInButton, growDownSub, textFadeUp } from '../../../utils/motion'
import styles from '../../styles/home.module.css'
import ProcessCard from '@/components/ProcessCard'


const TeamSection = () => (
  <div className={styles.teamWrapper} style={{ paddingTop: 0 }}>
    <div className={styles.teamContainer}>
      <div className={`${styles.headerContainerLeft} ${styles.headerContainerLeftSub}`} style={{ paddingTop: 64, borderTop: '1px solid rgba(7,8,8,0.1)' }}>
        <div className={styles.headerContainerLeftText}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Meet our leadership team.</motion.p>
          <motion.div variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className="body">Our multi-faceted team brings a wealth of experience and expertise driving a well-rounded approach to technology and design.</motion.div>
        </div>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton("up", "spring", .3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/about/leadership-team`} >
              <span className={`callout`}>View leadership team</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className={styles.teamBiosWrapper}>
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={styles.bioContainer}
        >

          <div className={styles.bioHeadshot}>
            <Image src="/masonHeadshot--circle.png"
              alt="Mason O'Mara"
              fill
              style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.bioContent}>
            <h3 className={`${styles.bioName} label`}>
              Mason O‘Mara
            </h3>
            <span className={`${styles.bioTitle} inactive`}>
              Managing Partner, Head of Product
            </span>
            <span className={`${styles.bioBody} description`}>
              <span className="mobile">Mason brings a wealth of experience in product and UX design, he provides the strategy and vision that makes Vemara unique.</span>
              <span className="desktop">Mason brings a wealth of experience in app and website design and development. With a strong background in product and UX design, he provides the strategy and vision that makes Vemara unique. When he’s not at his desk, Mason is surfing or traveling.</span>
            </span>
          </div>

        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className={`${styles.bioContainer} ${styles.bioContainerDesktop}`}
        >
          <div className={styles.bioHeadshot}>
            <Image src="/mikeHeadshot--circle.png"
              alt="Mike Veit"
              fill
              style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.bioContent}>
            <h3 className={`${styles.bioName} label`}>
              Mike Veit
            </h3>
            <span className={`${styles.bioTitle} inactive`}>
              Managing Partner, Head of Engineering
            </span>
            <span className={`${styles.bioBody} description`}>
              <span className="mobile">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies.</span>
              <span className="desktop">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies. Mike leads with a blend of technical expertise and strategic insight. Outside of his pursuits, Mike enjoys mountain bike rides and exercising.</span>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="mobile"
        >
          <div className={styles.bioContainer}>
            <div className={styles.bioHeadshot}>
              <Image src="/mikeHeadshot--circle.png"
                alt="Mike Veit"
                fill
                style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.bioContent}>
              <h3 className={`${styles.bioName} label`}>
                Mike Veit
              </h3>
              <span className={`${styles.bioTitle} inactive`}>
                Managing Partner, Head of Engineering
              </span>
              <span className={`${styles.bioBody} description`}>
                <span className="mobile">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies.</span>
                <span className="desktop">Mike is an accomplished engineer who has led the development of native mobile apps for both startups and Fortune 500 companies. Mike leads with a blend of technical expertise and strategic insight. Outside of his pursuits, Mike enjoys mountain bike rides and exercising.</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
)

const ProcessSection = () => (
  <div className={styles.processWrapper} style={{ paddingTop: 0 }}>
    <div className={styles.processContainer}>
      <div className={`${styles.headerContainerLeft} ${styles.headerContainerLeftSub}`} style={{ paddingTop: 64, borderTop: '1px solid rgba(7,8,8,0.1)' }}>
        <div className={styles.headerContainerLeftText}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Our process overview.</motion.p>
          <motion.div variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className="body">We like to get started quickly and maintain open and clear communciation with our in-house team throughout our engagements.</motion.div>
        </div>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton("up", "spring", .3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact/schedule-a-call`} >
              <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className={styles.processCardsWrapper}>

        <div className={styles.processCardsContainer}>
          <ProcessCard step="1" title="Introduction call" description="Tell us more about your business or project. We’ll cover your goals, users, timeline, budget, and specific needs." />
          <ProcessCard step="2" title="Strategy and structure" description="In a matter of days, we'll finalize project specs, agree on the business context, and onboard your team." />
          <ProcessCard step="3" title="Get started and track performance" description="Once milestones are set, we’ll begin driving towards your goals, tracking progress, reporting updates, and adapting as needed." />
        </div>


        <motion.div variants={growDownSub} className={styles.processCardsPathHorizontalSub}></motion.div>
      </div>
    </div>
  </div>

)

const AboutSection = () => (
  <div className={styles.contextWrapper} style={{ paddingTop: 0 }}>
    <div className={styles.contextContainer}>
      <div className={styles.ctaContainer} style={{ paddingTop: 32, borderTop: '1px solid rgba(7,8,8,0.1)' }}>
        <motion.div className={styles.imageCalloutContainer} variants={fadeIn("up", "spring", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}>
          <Image
            src="/jump.gif"
            alt="Vemara Solutions"
            unoptimized
            fill
            style={{ objectFit: "cover" }} />
        </motion.div>
        <div className={`${styles.headerContainerLeft} ${styles.headerContainerLeftSub} ${styles.headerContainerPhotoSub}`} >
          <div className={styles.headerContainerLeftText}>
            <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Creating digital products and business initiatives.</motion.p>
            <motion.div variants={textFadeUp("up", "spring", 0, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} className="body">We are a technology consulting, design, and development agency creating create new opportunities through our strategy and service.</motion.div>
          </div>
          <div className={styles.headerButtonsWrapper}>
            <motion.div
              variants={fadeInButton("up", "spring", .3, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
            >
              <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/about/about-us`} >
                <span className={`callout`}>About us</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
              </Link>
            </motion.div>
          </div>
        </div>
     
      </div>
    </div>
  </div>
)

export default function index() {
  return (
    <div>
      <Head>
        <title>Vemara Solutions - About</title>
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
      <Navbar firstTitle='Home' firstLink="/" secondTitle="About" />
      <Header
        label="About"
        title="From digital products including mobile apps, websites, and custom software to technical solutions."
        subtitle="Our team drives businesses towards their goals and create new opportunities through our comprehensive services." />
      <AboutSection />
      <TeamSection />
      <ProcessSection />

    </div>
  )
}
