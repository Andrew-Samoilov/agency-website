import { getAllPostIds, getPostData } from "@/app/lib/project";
import ContactSection from "@/components/contact-section/contact-section";
import Link from "next/link";
import Image from "next/image";

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
      <section className="dark:text-slate-200">
        <article className="p-6 md:p-12 lg:p-24 lg:pr-32">
          <div className="lg:grid grid-cols-2 grid-flow-row-dense">
            <h1 className="text-main-sky dark:text-sky-300 font-bold text-3xl md:text-6xl lg:text-8xl md:max-w-3xl lg:mr-48 pb-[0.25em] ">
              {project?.name}
            </h1>
            {project?.imgUrl && (
              <Image
                src={project.imgUrl}
                alt={project.title}
                width={600}
                height={400}
                className="row-span-3 lg:pb-[2em]"
              ></Image>
            )}
            <p className="pb-[0.25em] text-2xl md:text-5xl lg:text-6xl lg:max-w-5xl">
              {project?.title}
            </p>
 
              <Link
                href={`${project?.url}`}
                className="md:text-2xl pb-[0.25em]"
              >
                {project?.urlTitle}
              </Link>
              <p className="italic md:text-2xl pb-[0.25em]">
                Our role: <span className="text-main-sky">{project?.role}</span>
              </p>
         
            <p className="pb-[0.75em] md:text-2xl lg:text-3xl leading-normal md:leading-relaxed lg:max-w-4xl col-span-2">
              {project?.description}
            </p>
          </div>
        </article>
      </section>

      <ContactSection />
    </main>
  );
}
