import Navbar from '@/components/Navbar'
import Head from 'next/head'
import styles from '../styles/home.module.css'
import { motion } from "framer-motion"
import { fadeIn, fadeInButton, ringGrow, textFadeUp, textFadeUpSmall } from '@/pages/utils/motion'
import Link from 'next/link'
import Image from 'next/image'
import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import TechnologyCarousel from '@/components/TechnologyCarousel'


const urlFor = (source: SanityImageSource, projectId: string, dataset: string) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function getStaticProps() {
  const CLIENTS_QUERY = `*[
    _type == "client"
    && defined(slug.current)
  ]{_id, name, slug, overview, primaryImage, logo, whiteLogo, position }|order(position desc)`;

  const TECHNOLOGY_QUERY = `*[
    _type == "technology"
  ]{_id, name, description, image, category, position }|order(position desc)`;

  const clients = await sanityFetch<SanityDocument[]>({ query: CLIENTS_QUERY });
  const technology = await sanityFetch<SanityDocument[]>({ query: TECHNOLOGY_QUERY });
  const { projectId, dataset } = client.config();

  return {
    props: {
      clients,
      technology,
      projectId,
      dataset,
    },
  };
}


export default function Home({ clients, projectId, dataset, technology }: { clients: SanityDocument[], projectId: string, dataset: string, technology: any }) {
  return (
    <>
      <Head>
        <title>Vemara Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className={styles.heroWrapper}>
        <div>
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
        </div>
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
                <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="clientActionArrowBlack.svg" priority alt=""></Image>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInButton("up", "spring", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }} // Adjust amount as needed
            >
              <Link className="buttonSecondaryForeground buttonFullWidth" target="_top" href={`/contact`} >
                <span className={`callout`}>Message us</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
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
                  <span className={`callout`}>View all work</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.techWrapper}>
        <div className={styles.techContainer}>
          <div className={styles.headerContainerCenter}>
            <div className={styles.headerContainerCenterText}>
              <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Comprehensive tech stack expertise</motion.p>
              <motion.p variants={textFadeUpSmall("up", "spring", .1, 1.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerBody} body`}>We work with a diverse range of clients across various industries, crafting creative, high-performing products that stand out.</motion.p>
            </div>
            <div className={styles.headerButtonsWrapper}>
              <motion.div
                variants={fadeInButton("up", "spring", .4, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }}
              >
                <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact`} >
                  <span className={`callout`}>View all technologies</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
                </Link>
              </motion.div>
            </div>
          </div>
          <TechnologyCarousel technology={technology} />
        </div>
      </div>




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
          <div className={styles.headerContainerCenter}>
            <div className={styles.headerContainerCenterText}>
              <motion.p variants={textFadeUp("up", "spring", 0, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }} className={` ${styles.headerContainerHeader} header`}>Working within a variety of business contexts for your needs.</motion.p>
            </div>
            <div className={styles.headerButtonsWrapper}>
              <motion.div
                variants={fadeInButton("up", "spring", .3, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }}
              >
                <Link className="buttonPrimaryBackground buttonFullWidth" target="_top" href={`/contact`} >
                  <span className={`callout`}>Learn more</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
                </Link>
              </motion.div>
            </div>
            <div className={styles.contextContentWrapper}>
              <div className={`${styles.contextContent} desktop`}>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Product Development
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      Our in-house expertise in software development, mobile app development, and website and custom solutions sets us apart.
                    </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", .1, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Product Design
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      From initial UX/UI design to visual and product design, we create designs and systems for tangible and intuitive interfaces.
                    </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", .2, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Product Vision
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      We develop clear roadmaps and strategies from user and foundational research to ensure you engage with your audience.                  </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", .3, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Technology Strategy
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      We ensure your technology supports your current and future resources and goals by optimizing workflows.                  </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
              </div>
              <div className={`${styles.contextContent} mobile`}>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Product Development
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      Our in-house expertise in software development, mobile app development, and website and custom solutions sets us apart.
                    </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Product Design
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      From initial UX/UI design to visual and product design, we create designs and systems for tangible and intuitive interfaces.
                    </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Product Vision
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      We develop clear roadmaps and strategies from user and foundational research to ensure you engage with your audience.                  </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
                <motion.div variants={textFadeUpSmall("up", "spring", 0, 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}>
                  <div className={styles.contextContentCard}>
                    <div className={`${styles.contextContentCardTitle} label`}>
                      Technology Strategy
                    </div>
                    <div className={`${styles.contextContentCardBody} body`}>
                      We ensure your technology supports your current and future resources and goals by optimizing workflows.                  </div>
                  </div>
                </motion.div>
                <div className={styles.contextContentDivider} />
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
      </div>





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
                  <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="clientActionArrowWhite.svg" priority alt=""></Image>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInButton("up", "spring", .4, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }}
              >
                <Link className="buttonSecondaryBackground buttonFullWidth" target="_top" href={`/contact`} >
                  <span className={`callout`}>View our leadership team</span><Image height={12.87} width={12.87} src="clientActionArrowBlack.svg" priority alt=""></Image>
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}