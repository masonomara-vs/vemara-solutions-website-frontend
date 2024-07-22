import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "../../../styles/selectedclient.module.css";

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
  }
}`;

const SOLUTION_CATEGORY_QUERY = `*[
  _type == "solutionCategory"]{
    name,
    solutions[]->{
      ...,
    }
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function ClientPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = await sanityFetch<SanityDocument>({
    query: CLIENT_QUERY,
    params,
  });
  const {
    name,
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
  } = client;

  const solutionCategories = await sanityFetch<SanityDocument>({
    query: SOLUTION_CATEGORY_QUERY,
  });

  function getPhotoUrl(photo: any): string | null | undefined {
    return photo ? urlFor(photo)?.url() : null;
  }

  function getClientSolutionIds(): any[] {
    let ids: any[] = [];
    solutions.map((sol: any) => ids.push(sol._id));
    return ids;
  }

  return (
    <main className={styles.clientsWrapper}>
      <Breadcrumbs
        firstTitle="Home"
        firstLink="/"
        secondTitle="Work"
        secondLink="/work"
        thirdTitle={name}
      />
      <div className={styles.clientsWrapper}>
        <Image
          src={getPhotoUrl(logo) || "https://via.placeholder.com/550x310"}
          alt={name || "Client"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="180"
          width="720"
        />
        <div className={styles.clientsWrapper}>
          <div className="space-y-4">
            <div className={styles.industryWrapper}>
              {industry ? (
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 capitalize">
                  Industry: {industry.replace("-", " ")}
                </div>
              ) : null}
              <div className={styles.spacer}></div>
              Technology:
              {technology
                ? technology.map((tech: any) => (
                    <div
                      key={tech._id}
                      className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 capitalize"
                    >
                      {tech.name}
                    </div>
                  ))
                : null}
            </div>
            <div className={styles.detailWrapper}>
              {summary ? (
                <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                  <h1>{summary}</h1>
                </dl>
              ) : null}
              <Image
                src={
                  getPhotoUrl(primaryImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                width="550"
              />
              {quote ? (
                <dl className={styles.quoteWrapper}>
                  <dt>{quote}</dt>
                  <dl className={styles.quoteAuthorAndTitleWrapper}>
                    <dt className={styles.authorText}>{quoteAuthor}</dt>
                    <dt>{quoteAuthorTitle}</dt>
                  </dl>
                </dl>
              ) : null}
              {challenge ? (
                <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                  <dt>The challenge</dt>
                  <dt>{challenge}</dt>
                </dl>
              ) : null}
              <Image
                src={
                  getPhotoUrl(challengeImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                width="550"
              />
              {solution ? (
                <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                  <dt>The solution</dt>
                  <dt>{solution}</dt>
                </dl>
              ) : null}
              <Image
                src={
                  getPhotoUrl(solutionImage) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={name || "Client"}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                width="550"
              />
              Our role
              {solutions
                ? solutionCategories.map((category: any) => (
                    <>
                      <h1>{category.name}</h1>
                      {category.solutions
                        .filter((solution: any) =>
                          getClientSolutionIds().includes(solution._id)
                        )
                        .map((categorySolution: any) => (
                          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 capitalize">
                            {categorySolution.name}
                          </div>
                        ))}
                    </>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
