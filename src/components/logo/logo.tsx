import Link from "next/link"
import Image from "next/image";

interface LogoProps {
  styleLogo?: string;
  onClickFunction?: any;
}

export default function Logo({ styleLogo = " leading-3 ", onClickFunction }: Readonly<LogoProps>) {
  return (
    <Link href={"/"}
      onClick={onClickFunction}
      className={`flex items-center text-main-sky duration-300 hover:text-black dark:hover:text-sky-300 ${styleLogo}`}>
      <Image
        src={"/images/logos/logo-t.svg"}
        alt="T-Logo"
        width={40}
        height={12}
        priority
      />
      <div className="p-2">
        <div className="text-md">Tech Vibe</div>
        <div className="font-bold text-lg">Agency</div>
      </div>
    </Link>
  );
}
