import Link from "next/link";

export default function ContactSection() {
	return (
    <section className="bg-emerald-100">
      <div className="flex justify-center items-center">
        <h2>
          Have project in mind?
          <br />
          Lete&apos;s discuss
        </h2>
        <Link href="/contact" className="ml-2">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
