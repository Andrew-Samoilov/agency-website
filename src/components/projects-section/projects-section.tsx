import { projects } from "./projects-data";

export default function ProjectsSection() {
  return (
    <section className="p-6 md:p-12 lg:p-24">
      <h2 className="text-center text-3xl md:text-6xl lg:text-8xl pt-[0.75em] pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">
        Our projects
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2">
        {projects.map((project) => (
          <article key={project.id} className="p-[1em]">
            <h3 className="text-2xl md:text-5xl lg:text-6xl">{project.name}</h3>
            <p className="font-bold pt-[0.75em] pb-[0.25em]">{project.title}</p>
            <p>{project.description}</p>
          </article>
        ))}
        <article className="p-[1em]">
          <p className="text-2xl md:text-5xl lg:text-6xl">Have a Project?</p>
          <button className="mt-[0.75em] mb-[0.25em] border text-main-sky dark:text-sky-300 border-main-sky dark:border-sky-300 font-semibold px-[1em] py-[0.5em]">
            Get a Quote
          </button>
        </article>
      </div>
    </section>
  );
}
