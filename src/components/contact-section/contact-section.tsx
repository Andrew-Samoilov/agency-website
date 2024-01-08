import ContactUsBtn from "../contact-us-btn/contact-us-btn";

export default function ContactSection() {
    return (
      <section className="flex items-center flex-col md:flex-row p-6 md:p-12 lg:p-24 ">
        <h2 className="leading-relaxed font-bold text-3xl md:text-5xl md:leading-relaxed md:max-w-3xl lg:max-w-xl lg:mr-48 pb-6 md:pb-0">
          Have project in mind? Let&apos;s discuss
        </h2>
        <ContactUsBtn />
      </section>
    );
}
