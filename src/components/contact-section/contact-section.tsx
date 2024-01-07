import Link from "next/link";

export default function ContactSection() {
	return (
    <section className="bg-gray-100">
      <div className="flex items-center flex-col md:flex-row">
        <h2 className="leading-relaxed font-bold text-3xl md:text-5xl md:leading-relaxed md:max-w-3xl p-[0.75em] md:pl-[1em] lg:pl-[3em]">
          Have project in mind? Let&apos;s discuss
        </h2>
        <Link
          href="/contact"
          className="bg-sky-700 text-white font-semibold px-[1em] py-[0.5em] md:mr-10 lg:ml-20 mb-6 md:mb-0 hover:text-sky-700 hover:bg-white border border-sky-700"
        >
          Contact&nbsp;Us
        </Link>
      </div>
    </section>
  );
}
