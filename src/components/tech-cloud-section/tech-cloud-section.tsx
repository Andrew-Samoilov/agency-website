"use client";
import Image from "next/image";
import { techLogos } from "./tech-cloud-data";
import { InfiniteLooper } from "../infinite-looper/infinite-looper";

export default function TechCloudSection() {
  return (
    <div className="py-6 md:py-12 lg:py-24 z-0 ">
      <InfiniteLooper direction="left" speed={15}>
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
    </div>
  );
}
