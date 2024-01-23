import { getAllPostIds, getPostData } from "@/app/lib/project";
import ContactSection from "@/components/contact-section/contact-section";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateStaticParams() {
  const res = getAllPostIds();
  return res;
}

export default function ProjectDetail({
  params,
  searchParams,
}: Readonly<Props>) {
  let project = getPostData(params.id);
  return (
    <main>
      <section>
        <article className="p-6 md:p-12 lg:p-24 lg:pr-32">
          <h1 className="text-main-sky font-bold text-3xl md:text-6xl lg:text-8xl md:max-w-3xl lg:mr-48 pb-[0.25em] ">
            {project?.name}
          </h1>
          <p className="pb-[0.25em] text-2xl md:text-5xl lg:text-6xl lg:max-w-5xl">
            {project?.title}
          </p>
          <p className="pb-[0.75em] md:text-2xl lg:text-3xl leading-normal md:leading-relaxed lg:max-w-4xl">
            {project?.description}
          </p>
          <Link href={`${project?.url}`} className="md:text-2xl">
            {project?.urlTitle}
          </Link>
        </article>
      </section>

      <ContactSection />
    </main>
  );
}
