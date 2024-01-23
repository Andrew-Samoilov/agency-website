import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./projects-data";

export default function ProjectsLoad({
  isMain,
}: Readonly<{ isMain: boolean }>) {
  return (
    <>
      {projectsData.map((project) => (
        <article className="md:p-[1em] group" key={project.id}>
          <Link href={isMain ? "/projects" : `/projects/${project.id}`}>
            <h3 className="text-2xl md:text-5xl lg:text-6xl pb-[0.25em]">
              {project.name}
            </h3>{" "}
          </Link>
          {project.imgUrl && (
            <Image
              src={project.imgUrl}
              alt={project.title}
              width={300}
              height={200}
            ></Image>
          )}
          <p className="font-bold pt-[0.75em] pb-[0.25em]">{project.title}</p>
          {/* <p className="pb-[0.5em] hidden lg:block">{project.description}</p> */}
          <p className="pb-[0.5em] opacity-0 group-hover:opacity-100">{project.description}</p>
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
