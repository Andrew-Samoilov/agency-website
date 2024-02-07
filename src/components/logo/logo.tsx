import Link from "next/link"
import Image from "next/image";

interface LogoProps {
  styleLogo?: string;
}

export default function Logo({ styleLogo = " leading-3 text-main-sky dark:text-sky-300 hover:text-black dark:hover:text-main-sky" }: Readonly<LogoProps>) {
  return (
    <Link href={"/"} className={`flex items-center ${styleLogo}`}>
      <Image
        src={"/images/logos/logo-t.svg"}
        alt="T"
        width={40}
        height={12}
       
      />
      <div className="p-2">
        <div className="text-md">Tech Vibe</div>
        <div className="font-bold text-lg">Agency</div>
      </div>
    </Link>
  );
}
