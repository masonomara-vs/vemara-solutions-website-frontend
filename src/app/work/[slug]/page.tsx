import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const CLIENT_QUERY = `*[
    _type == "client" &&
    slug.current == $slug
  ][0]{
  ...,
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
    slug,
    solutions,
    technology,
    overview,
    industry,
    logo,
    background,
  } = client;
  const clientLogoUrl = logo
    ? urlFor(logo)?.url()
    : null;

  return (
    <main className="container mx-auto grid gap-12 p-12">
      <div className="mb-4">
        <Link href="/">← Back to client</Link>
      </div>
      <div className="grid items-top gap-12 sm:grid-cols-2">
        <Image
          src={clientLogoUrl || "https://via.placeholder.com/550x310"}
          alt={name || "Client"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            {name ? (
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 capitalize">
                {name.replace("-", " ")}
              </div>
            ) : null}
            {name ? (
              <h1 className="text-4xl font-bold tracking-tighter mb-8">
                {name}
              </h1>
            ) : null}
            {overview ? (
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <dd className="font-semibold">{clientLogoUrl}</dd>
                <dt>{overview}</dt>
              </dl>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}