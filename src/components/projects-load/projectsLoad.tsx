import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./projects-data";
import { stringToURL } from "@/lib/project";

export default function ProjectsLoad() {
  return (
    <>
      {projectsData.map((project) => (
        <article key={project.id}
          className="relative dark:text-slate-300">
          <Link
            href={`/projects/${stringToURL(project.name)}`}
            className="group z-0">

            {project.imgUrl && (
              <div className=" w-400 h-400 overflow-hidden group">
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 25vw"
                  className=" group-hover:scale-105 duration-300 block w-full h-full object-cover"
                ></Image>
                <div className="absolute bottom-0 right-0 w-auto bg-white/75 text-right dark:text-main-sky p-[1em] group-hover:text-white group-hover:bg-main-sky/95 duration-300">
                  <h3 className="font-bold text-xl pb-[0.25em] ">
                    {project.name}
                  </h3>
                  <p className=" italic">Our role: {project.role}</p>
                  <p className="pt-[0.75em] pb-[0.25em]">{project.title}</p>
                </div>
              </div>
            )}

          </Link>
        </article>
      ))}
    </>
  );
}
