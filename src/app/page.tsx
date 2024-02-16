import Blockquote from "@/components/blockquote/blockquote";
import ContactSection from "@/components/contact-section/contact-section";
import HeroSection from "@/components/hero-section/hero-section";
import ProjectsSection from "@/components/projects-section/projects-section";
import Stages from "@/components/stages/stages";
import TeamSection from "@/components/team-section/team-section";
import TechCloudSection from "@/components/tech-cloud-section/tech-cloud-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="p-6 md:p-12 lg:p-24 h-screen flex items-center justify-center">
        <Blockquote
          text="The only way to do great work is to love what you do."
          author="Steve Jobs"
          className="text-3xl md:text-5xl  max-w-3xl md:pr-[2em]"
        />
      </section>
      <hr />
      <ProjectsSection />
      <Stages />
      <TechCloudSection />
      <TeamSection />
      <ContactSection sectionLook="main" />
    </main>
  );
}
