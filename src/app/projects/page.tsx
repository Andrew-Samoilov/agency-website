import ContactUsBtn from "@/components/contact-us-btn/contact-us-btn";
import ProjectsLoad from "@/components/projects-section/projects-load/projectsLoad";
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
        <h1 className="text-center text-3xl md:text-6xl lg:text-8xl pb-[0.25em] font-bold ">
          Our projects
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          <ProjectsLoad/>
          <article className="md:p-[1em] flex-col items-center hidden md:flex">
            <p className="text-2xl md:text-5xl lg:text-6xl">Have a Project?</p>
            <ContactUsBtn
              className="mt-[0.75em] md:mt-[1.75em] mb-[0.25em] text-sky-700 bg-white dark:text-white duration-300
               hover:text-white hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-white dark:hover:text-sky-700 hover:border-white "
              buttonText="Get a Quote"
              subjectText="projects-page"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
