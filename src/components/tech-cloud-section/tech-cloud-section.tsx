import Image from "next/image";
import { techLogos } from "./tech-cloud-data";

export default function TechCloudSection() {
  return (
    <section className="relative p-6 md:p-12 lg:p-24 text-gray-200 z-0 bg-main-sky">
      {/* <Image
        src={"/images/bg-drop.svg"}
        alt="bg"
        fill={true}
        className="-z-10"
      /> */}
      {/* <h2 className="text-center text-2xl md:text-5xl lg:text-6xl pt-[0.75em] pb-[0.25em]  tracking-wide dark:text-main-sky text-sky-300">
        Tech Cloud
      </h2> */}
      <ul className="flex ">
        {techLogos.map((logo) => (
          <li key={logo.id} className="list-none w-1/2 flex items-center justify-center">
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </li>
        ))}
      </ul>
    </section>
  );
}
