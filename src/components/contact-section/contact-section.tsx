import ContactUsBtn from "../contact-us-btn/contact-us-btn";

export default function ContactSection({ sectionLook }: Readonly<{ sectionLook?: string }>) {
  let sectionStyle = '';
  let h2Style = '';

  switch (sectionLook) {
    case "main":
      sectionStyle = "bg-main-sky dark:bg-sky-300 text-white dark:text-black";
      break;
    case "red":
      sectionStyle = "bg-red";
      break;
    default:
      break;
  }

  return (
    <section
      className={`flex items-center flex-col md:flex-row p-6 md:p-12 lg:p-24 ${sectionStyle}`}
    >
      <h2
        className={`leading-relaxed font-bold text-3xl md:text-5xl md:leading-relaxed md:max-w-3xl lg:max-w-xl lg:mr-48 pb-6 md:pb-0 ${h2Style}`}
      >
        Have project in mind? Let&apos;s discuss
      </h2>
      <ContactUsBtn buttonLook={sectionLook}/>
    </section>
  );
}
