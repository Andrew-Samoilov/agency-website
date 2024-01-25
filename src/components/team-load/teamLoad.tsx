import Image from "next/image";
import Link from "next/link";
import { teamData } from "./team-data";

export default function TeamLoad({ isMain }: Readonly<{ isMain: boolean }>) {
  return (
    <>
      {teamData.map((member) => (
            <article key={member.id} className="md:p-[1em] dark:text-slate-300">
                <Link
                href={isMain ? "/team" : `/team/${member.id}`}
                className="group"
                >
                    {member.imgUrl && (
                        <div className="relative w-400 h-400 overflow-hidden group">
                            <Image
                                src={member.imgUrl}
                                alt={member.name}
                                width={400}
                                height={400}
                                className=" group-hover:scale-105 duration-300"
                            />
                            <div className="absolute bottom-0 right-0 w-auto text-right p-[1em] text-white group-hover:bg-main-sky/95 duration-300">
                                <h2 className="font-bold text-xl pb-[0.25em]">{member.name}</h2>
                                <p className="italic">{member.role}</p>
                            </div>
                        </div>
                    )}
                    <p className={isMain ? "hidden" : "block py-[0.25em]"}>
                        {member.gitUrl}
                    </p>
                    <p className={isMain ? "hidden" : "block pb-[0.25em]"}>
                        {member.linkedInUrl}
                    </p>
                </Link>
            </article>
      ))}
    </>
  );
}
