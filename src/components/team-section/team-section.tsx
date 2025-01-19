import TeamLoad from "./team-load/teamLoad";
import Link from "next/link";
import ContactUsBtn from "../contact-us-btn/contact-us-btn";

export default function TeamSection() {
  return (
    <section className="p-6 md:p-12 lg:p-24 mt-[33vh] md:mt-0">
      <h2 className="text-center text-3xl md:text-6xl lg:text-8xl pt-[0.75em] pb-[0.25em] font-bold tracking-wide ">
        <Link href={"/team"}>Our team</Link>
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
        <TeamLoad isMain={true} />

        <div className="md:p-[1em] hidden md:flex flex-col items-center justify-center">
          <p className="text-center text-2xl md:text-5xl lg:text-6xl pb-[1em] ">Join the team</p>
          <ContactUsBtn
            className=" text-sky-700 hover:text-white bg-white hover:bg-sky-700 duration-300
                dark:bg-sky-700 dark:text-white dark:hover:bg-white dark:hover:text-sky-700 hover:border-white "
            buttonText="Apply now"
            subjectText="team-section"
          /> 
        </div>
        
      </div>
    </section>
  );
}
