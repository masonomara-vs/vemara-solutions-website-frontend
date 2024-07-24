import { GetStaticPaths, GetStaticProps } from 'next';
import { type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client, sanityFetch } from '@/sanity/client';
import Image from 'next/image';
import styles from '../../../styles/selectedWork.module.css';
import Navbar from '@/components/Navbar';

const urlFor = (source: SanityImageSource, projectId: string, dataset: string) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const CLIENT_QUERY = `*[
  _type == "client" &&
  slug.current == $slug
][0]{
  ...,
  technology[]->{
    name
  },
  solutions[]->{
    name,
    description,
    _id
  },
  "logoMetadata": logo.asset->metadata.dimensions
}`;

const SOLUTION_CATEGORY_QUERY = `*[
  _type == "solutionCategory"
]{
  key,
  name,
  solutions[]->{
    ...,
  }
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const clients = await sanityFetch<SanityDocument[]>({
    query: `*[_type == "client"]{ "slug": slug.current }`,
  });

  const paths = clients.map(client => ({
    params: { slug: client.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const clientData = await sanityFetch<SanityDocument>({
    query: CLIENT_QUERY,
    params: { slug: params?.slug as string },
  });

  const solutionCategories = await sanityFetch<SanityDocument[]>({
    query: SOLUTION_CATEGORY_QUERY,
  });

  const { projectId, dataset } = client.config();

  return {
    props: {
      client: clientData,
      solutionCategories,
      projectId,
      dataset,
    },
  };
}

type ClientPageProps = {
  client: SanityDocument & { logoMetadata: { width: number, height: number } };
  solutionCategories: SanityDocument[];
  projectId: string;
  dataset: string;
};

const WorkPage = ({
  client,
  solutionCategories,
  projectId,
  dataset,
}: ClientPageProps) => {
  const {
    name,
    shortName,
    summary,
    industry,
    logo,
    primaryImage,
    quote,
    quoteAuthor,
    quoteAuthorTitle,
    challenge,
    challengeImage,
    solution,
    solutions,
    technology,
    solutionImage,
    logoMetadata
  } = client;

  const getPhotoUrl = (photo: SanityImageSource) =>
    photo ? urlFor(photo, projectId, dataset)?.url() : null;

  const getClientSolutionIds = () =>
    solutions.map((sol: { _id: string }) => sol._id);

  const logoAspectRatio = logoMetadata ? logoMetadata.width / logoMetadata.height : 1;

  const filteredAndSortedCategories = solutionCategories
    .filter((category: any) =>
      category.solutions.some((solution: any) => getClientSolutionIds().includes(solution._id))
    )
    .sort((a: any, b: any) => a.key - b.key);

  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Work" secondLink='/work' thirdTitle={name} />
      <div className={styles.wrapper}>

        {/* logo section */}
        <div className={styles.logoWrapper}>
          <div className={styles.logoContainer} style={{ aspectRatio: logoAspectRatio }}>
            <Image
              src={getPhotoUrl(logo) || "https://via.placeholder.com/550x310"}
              alt={name || "Client"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* details section */}
        <div className={styles.detailsWrapper}>
          <div className={styles.detailsContainer}>
            {industry ? (
              <div className={styles.details}>
                <span className={"inactive"}>Industry:&nbsp;{industry.replace("-", " ")}</span>
              </div>
            ) : null}
            <div className={`mobile ${styles.divider}`}></div>
            <div className={styles.details}>
              <span className={"inactive"}>Technology:&nbsp;</span>
              {technology
                ? technology.map((tech: any, index: number) => (
                  <span className={"inactive"} key={tech._id}>
                    {tech.name}
                    {index < technology.length - 1 && ",\u00A0"}
                  </span>
                ))
                : null}
            </div>
          </div>
        </div>

        {/* content section */}
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            {summary && (
              <div className={"header"}>{summary}</div>
            )}
            {primaryImage && (<div className={styles.contentImageWrapper}>
              <Image
                src={
                  getPhotoUrl(primaryImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>)}
            {quote && (
              <div className={styles.quoteWrapper}>
                <div className={`location ${styles.quote}`}>{quote}</div>
                <div className={`body ${styles.quoteAuthor}`}>{quoteAuthor}</div>
                <div className={`inactive ${styles.quoteAuthorTitle}`}>{quoteAuthorTitle}</div>
              </div>
            )}
            {challenge && (
              <div className={styles.contentCopy}>
                <h4 className='header'>{shortName || name}'s challenge</h4>
                <p className='body'>{challenge}</p>
              </div>
            )}
            {challengeImage && (<div className={styles.contentImageWrapper}>
              <Image
                src={
                  getPhotoUrl(challengeImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>)}
            {solution && (
              <div className={styles.contentCopy}>
                <h4 className='header'>{shortName || name}'s solution</h4>
                <p className='body'>{solution}</p>
              </div>
            )}
            {solutionImage && (<div className={styles.contentImageWrapper}>
              <Image
                src={
                  getPhotoUrl(solutionImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>)}
            <div className={styles.contentCopy}>
              <h4 className='header'>Our roles</h4>
              <div className={styles.solutionsArraysWrapper}>

                {filteredAndSortedCategories.map((category: any) => (
                  <div className={styles.solutionsWrapper} key={category._id}>
                    <h5 className="inactive" style={{ opacity: .6 }}>{category.name}</h5>
                    <div className={styles.solutionsArrayWrapper}>
                      {category.solutions
                        .filter((solution: any) =>
                          getClientSolutionIds().includes(solution._id)
                        )
                        .map((categorySolution: any) => (
                          <div key={categorySolution._id} className={`${styles.solutionsButton} callout`}>
                            {categorySolution.name}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default WorkPage;
