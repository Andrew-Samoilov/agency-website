"use client";
import Image from "next/image";
import { techLogos } from "./tech-cloud-data";
import { InfiniteLooper } from "../infinite-looper/infinite-looper";

export default function TechCloudSection() {
  return (
    <section className="py-6 md:py-12 lg:py-24 text-gray-200 z-0 bg-main-sky ">
      <InfiniteLooper direction="left" speed={10}>
        {techLogos.map((logo) => (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={100}
            key={logo.id}
            className=" mx-8 "
          />
        ))}
      </InfiniteLooper>
    </section>
  );
}
