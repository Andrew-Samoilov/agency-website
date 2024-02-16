import { stagesData } from "./stages-data";

export default function Stages() {
    return (
        <section className="grid gap-6 md:gap-12 lg:gap-16 md:grid-cols-3 p-6 md:p-12 lg:p-24 md:py-0 md:h-[50vh] lg:h-[75vh] md:content-center">
            {stagesData.map((stage) => (
                <article key={stage.id}>
                    <div className="text-right mb-[-0.75em] text-7xl md:text-9xl lg:text-[192px] font-bold text-main-sky/25">{stage.id}</div>
                    <h3 className="text-2xl md:text-3xl ">{stage.name}</h3>
                    <p className="text-xl">{stage.text}</p>
                </article>
            ))}
        </section>
    );
}
