import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { sanityFetch } from "@/sanity/client";

const CLIENTS_QUERY = `*[
  _type == "client"
  && defined(slug.current)
]{_id, name, slug, overview}|order(name desc)`;

export default async function IndexPage() {
  const clients = await sanityFetch<SanityDocument[]>({ query: CLIENTS_QUERY });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">
        Clients
      </h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {clients.map((client) => (
          <li
            className="bg-white p-4 rounded-lg"
            key={client._id}
          >
            <Link
              className="hover:underline"
              href={`/clients/${client.slug.current}`}
            >
              <h2 className="text-xl font-semibold">{client?.name}</h2>
              <p className="text-gray-500">
                {client?.overview}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}