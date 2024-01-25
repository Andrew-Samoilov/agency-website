import TeamLoad from "@/components/team-load/teamLoad";

export default function TeamSection() {
  return (
    <section className="p-6 md:p-12 lg:p-24">
      <h2 className="text-center text-3xl md:text-6xl lg:text-8xl pt-[0.75em] pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">
        Our Team
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
        <TeamLoad isMain={true} />

        <article className="md:p-[1em]">
          <p className="text-2xl md:text-5xl lg:text-6xl">Join us?</p>
          <button className="mt-[0.75em] mb-[0.25em] border text-main-sky dark:text-sky-300 border-main-sky dark:border-sky-300 font-semibold px-[1em] py-[0.5em]">
            Send a CV
          </button>
        </article>
      </div>
    </section>
  );
}
