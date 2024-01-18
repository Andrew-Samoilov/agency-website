import Link from "next/link";
import { projectsData } from "./projects-data";

export default function ProjectsLoad({
  isMain,
}: Readonly<{ isMain: boolean }>) {
  return (
    <>
      {projectsData.map((project) => (
        <article className="md:p-[1em]" key={project.id}>
          <Link href={isMain ? "/projects" : `/projects/${project.id}`}>
            <h3 className="text-2xl md:text-5xl lg:text-6xl">{project.name}</h3>{" "}
          </Link>
          <p className="font-bold pt-[0.75em] pb-[0.25em]">{project.title}</p>
          <p className="pb-[0.5em]">{project.description}</p>
          {!isMain && (
            <Link href={project.url} target="blank">
              {project.urlTitle}
            </Link>
          )}
        </article>
      ))}
    </>
  );
}
