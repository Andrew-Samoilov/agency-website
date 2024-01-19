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
        <article className=" p-6 md:p-12 lg:p-24">
          <h2 className="text-main-sky leading-relaxed font-bold text-3xl md:text-5xl md:leading-relaxed md:max-w-3xl lg:max-w-xl lg:mr-48 pb-6 md:pb-0">
            {project?.name}
          </h2>
          <p className="text-2xl md:text-5xl lg:text-6xl">{project?.title}</p>
          <p>{project?.description}</p>
          <Link href={`${project?.url}`}>{project?.urlTitle}</Link>
        </article>
        <hr />
      </section>

      <ContactSection />
    </main>
  );
}
