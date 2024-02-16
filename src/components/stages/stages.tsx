import { stagesData } from "./stages-data";

export default function Stages() {
    return (
        <section className="p-6 md:p-12 lg:p-24">
            <h1 className="text-3xl md:text-6xl lg:text-8xl pt-[0.75em] pb-[0.25em] font-bold tracking-wide text-main-sky dark:text-sky-300">How we work</h1>
            <div className="grid gap-6 md:gap-12 lg:gap-16 md:grid-cols-3">
            {stagesData.map((stage) => (
                <article key={stage.id}>
                    <div className="text-right mb-[-0.75em] text-7xl md:text-9xl lg:text-[192px] font-bold text-main-sky/25">{stage.id}</div>
                    <h3 className="text-2xl md:text-3xl font-bold">{stage.name}</h3>
                    <p className="text-xl">{stage.text}</p>
                </article>
            ))}
            </div>
        </section>
    );
}
