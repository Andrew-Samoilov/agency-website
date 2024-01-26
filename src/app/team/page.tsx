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
            <section className="p-6 md:p-12 lg:p-24">
                <h1 className="text-center text-3xl md:text-6xl lg:text-8xl pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">
                Our team
                </h1>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
                    <TeamLoad isMain={false} />
                </div>
            </section>
        </main>
    )
}
