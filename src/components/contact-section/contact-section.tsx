import ContactUsBtn from "../contact-us-btn/contact-us-btn";

export default function ContactSection() {
    return (
        <section className="pb-6 md:pb-0 flex items-center flex-col md:flex-row">
            <h2 className="leading-relaxed font-bold text-3xl md:text-5xl md:leading-relaxed md:max-w-3xl p-[0.75em] md:pl-[1em] lg:pl-[3em]">
            Have project in mind? Let&apos;s discuss
            </h2>
            <ContactUsBtn />
        </section>
    );
}
