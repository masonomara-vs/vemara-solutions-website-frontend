import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SanityDocument } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Navbar from '@/components/Navbar'
import TechnologyCarousel from '@/components/TechnologyCarousel'
import { client, sanityFetch } from '@/sanity/client'
import { fadeIn, fadeInButton, growDown, growRight, ringGrow, textFadeUp, textFadeUpSmall } from '@/pages/utils/motion'
import styles from '../styles/home.module.css'
import WorkCarousel from '@/components/WorkCarousel'
import ProcessCard from '@/components/ProcessCard'


const urlFor = (source: SanityImageSource, projectId: string, dataset: string) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null

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


const HeroSection = () => (
  <div className={`${styles.heroWrapper} heroCheck`}>

    <div className={styles.videoBackdrop}>
    </div>
    <video
      src={"opnsrc.mp4"}
      autoPlay
      playsInline
      muted
      loop
      controls={false}
      className={styles.video}
    />

    <div className={styles.heroContainer}>
      <div className={styles.heroContentContainer}>
        <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={`title ${styles.title}`}>Drive your business towards goals and new opportunities.</motion.p>
        <motion.p variants={textFadeUpSmall("up", "spring", .1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={`subtitle ${styles.subtitle}`}>Access industry-leading technology strategy, design, and development for digital products and solutions.</motion.p>
      </div>
      <div className={styles.heroButtonsWrapper}>
        <motion.div
          variants={fadeInButton("up", "spring", .3, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} // Adjust amount as needed
        >
          <Link className="buttonPrimaryForeground buttonFullWidth" target="_top" href={`/contact`} >
            <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt=""></Image>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeInButton("up", "spring", 0.4, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} // Adjust amount as needed
        >
          <Link className="buttonSecondaryForeground buttonFullWidth" target="_top" href={`/contact`} >
            <span className={`callout`}>Message us</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
)

const WorkSection = ({ clients, projectId, dataset }: { clients: any, projectId: any, dataset: any }) => (
  <div className={styles.workWrapper}>
    <div className={styles.workContainer}>
      <div className={styles.headerContainerCenter}>
        <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Innovative and scalable solutions with industry-leading technology.</motion.p>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton("up", "spring", 0.3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} // Adjust amount as needed
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact`} >
              <span className={`callout`}>View all work</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>
        </div>
      </div>
      <WorkCarousel clients={clients} projectId={projectId} dataset={dataset} />
    </div>
  </div>
)

const SolutionsSection = ({ solutions, mobileSolutions }: { solutions: any, mobileSolutions: any }) => (
  <div className={styles.solutionsWrapper}>
    <div className={styles.solutionsContainer}>
      <div className={styles.headerContainerLeft}>
        <div className={styles.headerContainerLeftText}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>From strategy to service, delivering reliable results.</motion.p>
        </div>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton("up", "spring", .1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact`} >
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
  <div className={styles.techWrapper}>
    <div className={styles.techContainer}>
      <div className={styles.headerContainerCenter}>
        <div className={styles.headerContainerCenterText}>
          <motion.p
            variants={textFadeUp('up', 'spring', 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className={` ${styles.headerContainerHeader} header`}
          >
            Comprehensive tech stack expertise
          </motion.p>
          <motion.p
            variants={textFadeUpSmall('up', 'spring', 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className={` ${styles.headerContainerBody} body`}
          >
            We work with a diverse range of clients across various industries, crafting creative, high-performing products that stand out.
          </motion.p>
        </div>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton('up', 'spring', 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact`}>
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
  <div className={styles.contextWrapper}>
    <div className={styles.contextContainer}>
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
      <div className={styles.headerContainerLeft}>
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
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact`} >
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
    </div>
  </div>
)

const TeamSection = () => (
  <div className={styles.teamWrapper}>
    <div className={styles.teamContainer}>
      <div className={styles.teamBiosWrapper}>
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <div className={styles.bioContainer}>
            <div className={styles.bioHeadshot}>
              <Image src="/masonHeadshot--circle.png"
                alt="Mason O'Mara"
                fill
                style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.bioContent}>
              <h3 className={`${styles.bioName} label`}>
                Mason O'Mara
              </h3>
              <span className={`${styles.bioTitle} inactive`}>
                Managing Partner, Head of Product
              </span>
              <span className={`${styles.bioBody} description`}>
                <span className="mobile">Mason brings a wealth of experience in product and UX design, he provides the strategy and vision that makes Vemara unique.</span>
                <span className="desktop">Mason brings a wealth of experience in app and website design and development. With a strong background in product and UX design, he provides the strategy and vision that makes Vemara unique. When he’s not at his desk, Mason is surfing or traveling.</span>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="desktop"
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
      <div className={styles.headerContainerCenter}>
        <div className={styles.headerContainerCenterText}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>We’re excited to work together on your goals.</motion.p>
        </div>
        <div className={styles.headerButtonsWrapper}>
          <motion.div
            variants={fadeInButton("up", "spring", .3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact`} >
              <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInButton("up", "spring", .4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonSecondaryBackground buttonFullWidth" target="_top" href={`/contact`} >
              <span className={`callout`}>View our leadership team</span><Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt=""></Image>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
)

const ProcessSection = () => (
  <div className={styles.processWrapper}>
    <div className={styles.processContainer}>
      <div className={styles.headerContainerCenter}>
        <div className={styles.headerContainerCenterText}>
          <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Our process: simple, seamless, streamlined.</motion.p>
        </div>

      </div>
      <div className={styles.processCardsWrapper}>

        <div className={styles.processCardsContainer}>
          <ProcessCard step="1" title="Introduction call" description="Tell us more about your business or project. We’ll cover your goals, users, timeline, budget, and specific needs." />
          <ProcessCard step="2" title="Strategy and structure" description="In a matter of days, we'll finalize project specs, agree on the business context, and onboard your team." />
          <ProcessCard step="3" title="Get started and track performance" description="Once milestones are set, we’ll begin driving towards your goals, tracking progress, reporting updates, and adapting as needed." />
        </div>
        <div style={{ zIndex: 2 }}>
          <motion.div
            variants={fadeInButton("up", "spring", .3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <Link className="buttonPrimaryBackground" target="_top" href={`/contact`}>
              <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
          </motion.div>
        </div>

        <motion.div variants={growDown} className={styles.processCardsPathHorizontal}></motion.div>
        <motion.div variants={growRight} className={styles.processCardsPathVertical}></motion.div>

      </div>
    </div>
  </div>

)


const Home = ({ clients, technology, solutions, mobileSolutions, projectId, dataset }: { clients: any, technology: any, projectId: any, solutions: any, mobileSolutions: any, dataset: any }) => (
  <div className={styles.rootWrapper}>
    <Head>
      <title>Vemara Solutions - Innovative Technology Consulting</title>
      <meta name="description" content="Vemara Solutions offers innovative digital solutions to enhance your business's online presence. From web development to mobile app design, we have you covered." />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/icon.ico" />
      <link rel="shortcut icon" href="/icon.ico" />
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#070808" />
      <meta property="og:title" content="Vemara Solutions - Innovative Technology Consulting" />
      <meta property="og:description" content="Discover how Vemara Solutions can transform your digital presence with our expert web and mobile app development services." />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://www.vemarasolutions.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vemara Solutions - Innovative Technology Consulting" />
      <meta name="twitter:description" content="Vemara Solutions offers innovative digital solutions to enhance your business's online presence." />
      <meta name="twitter:image" content="/twitter-image.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070808" />
      <meta name="msapplication-TileColor" content="#070808" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Navbar />
    <HeroSection />
    <WorkSection clients={clients} projectId={projectId} dataset={dataset} />
    <SolutionsSection solutions={solutions} mobileSolutions={mobileSolutions} />
    <TechSection technology={technology} />
    <ContextSection />
    <TeamSection />
    <ProcessSection />
  </div>
)

export default Home