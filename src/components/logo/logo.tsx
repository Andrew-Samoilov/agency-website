import Link from "next/link"

interface LogoProps {
  styleLogo?: string;
}

export default function Logo({ styleLogo = "leading-3 text-main-sky dark:text-sky-300" }: LogoProps) {
  return (
    <Link href={"/"} className={styleLogo}>
      <div className="text-md">Tech Vibe</div>
      <div className="font-bold text-lg">Agency</div>
    </Link>
  );
}
