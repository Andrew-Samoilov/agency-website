import ContactSection from "@/components/contact-section/contact-section";
import HeroSection from "@/components/hero-section/hero-section";
import ProjectsSection from "@/components/projects-section/projects-section";
import TeamSection from "@/components/team-section/team-section";
import TechCloudSection from "@/components/tech-cloud-section/tech-cloud-section";

export default function Home() {
	return (
		<main className="">
			<h1 className="text-center">MainPage</h1>
			<HeroSection />
			<ProjectsSection />
			<TechCloudSection />
			<TeamSection />
			<ContactSection />
		</main>
	);
}
