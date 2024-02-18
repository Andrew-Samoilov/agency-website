import SendForm from "@/components/form/form";

export default function ContactPage() {
  return (
    <main>
      <section className="lg:flex items-center">
        <div className="p-6 md:p-12 lg:p-24 lg:py-0">
          <h1 className="text-left text-3xl md:text-6xl lg:text-8xl pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">Contact&nbsp;us</h1>
          <p className="text-xl pb-[1em]">Get in touch with us to see how we can help you with your project</p>

          <SendForm />
        </div>
        {/* <div className="w-full h-[50vh] lg:h-[100vh]"> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17082.56126707991!2d30.35079035883301!3d50.47205243685994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1708288771518!5m2!1suk!2sua"
            width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[50vh] lg:h-[100vh]"></iframe>
        {/* </div> */}
      </section>
    </main>
  );
}
