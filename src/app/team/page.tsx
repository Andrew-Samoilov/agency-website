import Blockquote from "@/components/blockquote/blockquote";
import ContactUsBtn from "@/components/contact-us-btn/contact-us-btn";
import TeamLoad from "@/components/team-load/teamLoad";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our team",
  description: "Our beautiful team. Maybe you must be here.",
  openGraph: {
    description: "Our beautiful team. Maybe you must be here.",
  },
};

export default function TeamPage() {
  return (
    <main>
      <section className="p-6 md:p-12 lg:p-24 ">
        <h1 className="text-center text-3xl md:text-6xl lg:text-8xl pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">
          Our team
        </h1>
        <p className="pb-[0.25em] text-xl md:text-2xl">
          We have built a robust team that delivers the best services for
          website development, content, and digital marketing.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          <TeamLoad isMain={false} />
        </div>
      </section>
      <hr />
      <section className="p-6 md:p-12 lg:p-24 flex flex-col md:flex-row items-center justify-center text-xl md:max-w-6xl ">
        <Blockquote
          text="Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
          author="Steve Jobs"
          className=" text-slate-900 dark:text-slate-100 md:pl-[1em] lg:pl-[3em]"
        />
        <ContactUsBtn
          buttonText="Join&nbsp;us"
          className="mt-6 md:m-0 md:ml-12 " />
      </section>
    </main>
  );
}
