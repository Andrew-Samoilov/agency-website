import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section>
            <h1 className="text-7xl md:text-9xl lg:text-[192px] pt-[0.75em] font-bold tracking-wide text-main-sky  pl-4 md:pl-[0.75em] mb-[-0.165em] md:mb-[-0.1em]">
                Hello &mdash;
            </h1>
            <div className="relative text-3xl md:text-5xl font-bold bg-main-sky  text-white dark:text-sky-300 md:pr-[2em] z-0 ">
                <Image
                    src={"/images/bg-drop.svg"}
                    alt="animated backgound"
                    fill={true}
                    className="-z-10"
                    priority={true}
                />
                <p className="p-[0.75em] pt-[1.5em] leading-relaxed md:max-w-6xl md:pl-[1em] lg:pl-[3em]">
                    Welcome to our world. We&apos;re Tech Vibe,{" "}
                    <span
                        className="md:text-transparent md:font-outline-white md:dark:font-outline-black duration-300 md:hover:text-white md:dark:hover:text-sky-300 md:hover:font-outline-none">
                        a creative digital agency.
                    </span>{" "}
                    We offer various types of digital services.
                </p>
                <p className="p-[0.75em] leading-relaxed md:max-w-6xl md:pl-[1em] lg:pl-[3em]">
                    We help{" "}
                    <Link href="/projects"
                        className="md:text-transparent md:font-outline-white md:dark:font-outline-black duration-300 md:hover:text-white md:dark:hover:text-sky-300 md:hover:font-outline-none">our clients
                    </Link>{" "}start, sustain, and grow their business.
                </p>
                <p className="p-[0.75em] leading-relaxed md:max-w-6xl md:pl-[1em] lg:pl-[3em]">
                    Whether you&apos;ve got a quick concept or want to run through the
                    details of your next big project, we can help.{" "}
                    <Link href="/contact"
                        className="md:text-transparent md:font-outline-white md:dark:font-outline-black duration-300 md:hover:text-white md:dark:hover:text-sky-300 md:hover:font-outline-none">
                    Let&apos;s chat now.
                    </Link>
                </p>
            </div>
        </section>
    );
}
