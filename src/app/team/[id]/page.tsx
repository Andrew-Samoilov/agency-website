import { getAllDataIds, getTeammateData } from "@/lib/project";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { ITeam } from "@/types/types";
import { teamData } from "@/components/team-load/team-data";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateStaticParams() {
    const res = getAllDataIds<ITeam>(teamData);
    // console.log(`generateStaticParams `, res);
    return res;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const teammate = getTeammateData(params.id);

  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title: "Our teammate: " + teammate?.name,
    description: teammate?.name + ", " + teammate?.role,
    openGraph: {
      images: [teammate?.imgUrl ? teammate?.imgUrl : "", ...previousImages],
      description: teammate?.name + ", " + teammate?.role,
    },
  };
}

export default function TeamMemberDetail({
  params,
  searchParams,
}: Readonly<Props>) {
  let teammate = getTeammateData(params.id);
  return (
    <main>
      <section className="dark:text-slate-200">
        <article className="p-6 md:p-12 lg:p-24 lg:pr-32">
          <div className="lg:grid grid-cols-2 grid-flow-row-dense">
            <h1 className="text-main-sky dark:text-sky-300 font-bold text-3xl md:text-6xl lg:text-8xl md:max-w-3xl lg:mr-48 pb-[0.25em] z-10">
              {teammate?.name}
            </h1>
            {teammate?.imgUrl && (
              <Image
                src={teammate.imgUrl}
                alt={teammate.name}
                width={600}
                height={600}
                priority
                className="row-span-4 lg:pb-[2em] z-0"
              ></Image>
            )}
            <p className="pb-[0.25em] text-2xl md:text-5xl lg:text-6xl lg:max-w-5xl">
              {teammate?.role}
            </p>

            <p className="md:text-2xl pb-[0.25em]">
              {teammate?.gitUrl}
            </p>
            <p className="md:text-2xl pb-[0.25em]">
              {teammate?.linkedInUrl}
            </p>
          </div>
        </article>
      </section>

      {/* <ContactSection /> */}
    </main>
  );
}
