import { getAllDataIds, getTeammateData, stringToURL } from "@/lib/project";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { ITeam } from "@/types/types";
import { teamData } from "@/components/team-load/team-data";
import Blockquote from "@/components/blockquote/blockquote-section";
import ContactUsBtn from "@/components/contact-us-btn/contact-us-btn";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllDataIds<ITeam>(teamData);
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { params } = props;
  const { id } = await params;
  const teammate = getTeammateData(id);
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

export default async function TeamMemberDetail({ params }: Readonly<Props>) {
  const { id } = await params;
  let teammate = getTeammateData(id);
  return (
    <main>
      <section className="dark:text-slate-200">
        <article className="p-6 md:p-12 lg:p-24 lg:pr-0  lg:grid grid-cols-2 grid-flow-row-dense">
          <h1 className=" font-semibold text-3xl md:text-6xl lg:text-8xl md:max-w-3xl lg:mr-48 pb-[0.25em] z-10">
            {teammate?.name}
          </h1>
          {teammate?.imgUrl && (
            <Image
              src={teammate.imgUrl}
              alt={teammate.name}
              width={600}
              height={600}
              priority
              className="row-span-4 lg:pb-[2em] z-0 "
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

        </article>
      </section>
      <hr />
      <section className="p-6 md:p-12 lg:p-24 flex flex-col md:flex-row items-center justify-center text-xl md:max-w-6xl ">
        <Blockquote
          text="Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
          author="Steve Jobs"
          className=" text-slate-900 dark:text-slate-100 md:pl-[1em] lg:pl-[3em]"
        />
        {teammate?.name && (
          <ContactUsBtn
            buttonText="Join&nbsp;us"
            className="mt-6 md:m-0 md:ml-12 "
            subjectText={`team-${stringToURL(teammate.name)}`}
          />
        )}
      </section>

    </main>
  );
}
