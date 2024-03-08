import ContactUsBtn from "../contact-us-btn/contact-us-btn";
import { stagesData } from "./stages-data";

export default function Stages() {
    return (
        <section className="p-6 md:p-12 lg:p-24 mt-[33vh] md:mt-0">
            <h2 className="text-center text-3xl md:text-6xl lg:text-8xl pt-[0.75em] pb-[0.25em] font-bold tracking-wide ">How we work</h2>
            <div className="grid gap-6 md:gap-12 lg:gap-16 md:grid-cols-3">
            {stagesData.map((stage) => (
                <article key={stage.id}>
                    <div className="text-right mb-[-0.75em] text-7xl md:text-9xl lg:text-[192px] font-bold text-main-sky/25">{stage.id}</div>
                    <h3 className="text-2xl md:text-3xl font-bold">{stage.name}</h3>
                    <p className="text-xl">{stage.text}</p>
                </article>
            ))}
            </div>
            <div className="pt-[2em] flex flex-col items-center md:hidden ">
                <p className="text-center text-2xl pb-[1em] ">Have a Project?</p>
                <ContactUsBtn
                    className=" text-sky-700 hover:text-white bg-white hover:bg-sky-700 
                dark:bg-sky-700 dark:text-white dark:hover:bg-white dark:hover:text-sky-700 hover:border-white "
                    buttonText="Get a Quote"
                />
            </div>
        </section>
    );
}
