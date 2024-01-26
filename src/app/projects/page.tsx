import ProjectsLoad from "@/components/projects-load/projectsLoad";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our projects",
  description:
    "Some of our most successful projects. Your brilliant project must be here",
  openGraph: {
    description:
      "Some of our most successful projects. Your brilliant project must be here",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="p-6 md:p-12 lg:p-24">
        <h1 className="text-center text-3xl md:text-6xl lg:text-8xl pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">
          Our projects
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          <ProjectsLoad isMain={false} />
          <article className="md:p-[1em]">
            <p className="text-2xl md:text-5xl lg:text-6xl">Have a Project?</p>
            <button className="mt-[0.75em] md:mt-[1.75em] mb-[0.25em] border text-main-sky dark:text-sky-300 border-main-sky dark:border-sky-300 font-semibold px-[1em] py-[0.5em]">
              Get a Quote
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}
