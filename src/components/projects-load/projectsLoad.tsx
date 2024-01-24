import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./projects-data";

export default function ProjectsLoad({
  isMain,
}: Readonly<{ isMain: boolean }>) {
  return (
    <>
      {projectsData.map((project) => (
        <article className="relative md:p-[1em]" key={project.id}>
          <Link
            href={isMain ? "/projects" : `/projects/${project.id}`}
            className="group z-0"
          >
            <h3 className="text-center text-2xl md:text-5xl lg:text-6xl pb-[0.25em] h-[2em]">
              {project.name}
            </h3>
            {project.imgUrl && (
              <Image
                src={project.imgUrl}
                alt={project.title}
                width={300}
                height={200}
              ></Image>
            )}
            <p className=" pt-[0.75em] pb-[0.25em]">{project.title}</p>
            <div className="absolute md:p-[1em] top-0 left-0 w-full h-full z-10 opacity-0 group-hover:opacity-100 bg-main-sky/90 text-white">
              <p className="text-center text-2xl md:text-5xl lg:text-6xl pb-[0.25em]">
                {project.name}
              </p>
              <p className="p-[2em] leading-normal">{project.description}</p>
              <p className="p-[2em]">More...</p>
            </div>
          </Link>
          <hr className="md:hidden" />
        </article>
      ))}
    </>
  );
}
