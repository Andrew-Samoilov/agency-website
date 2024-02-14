import SendForm from "@/components/form/form";

export default function ContactPage() {
  return (
    <main className="">
      <section className="p-6 md:p-12 lg:p-24 lg:flex">
        <div className="lg:pr-24">
          <h1 className="text-left text-3xl md:text-6xl lg:text-8xl pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">Contact us</h1>
          <p className="text-xl pb-[1em]">Get in touch with us to see how we can help you with your project</p>
        </div>

        <SendForm/>

      </section>
    </main>
  );
}
