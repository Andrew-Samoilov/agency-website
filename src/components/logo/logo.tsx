import Link from "next/link"

interface LogoProps {
  styleLogo?: string;
  onClickFunction?: any;
}

export default function Logo({
  styleLogo = " leading-3 ",
  onClickFunction,
}: Readonly<LogoProps>) {
  return (
    <Link href={"/"}
      onClick={onClickFunction}
      className={`flex items-center text-main-sky duration-300 hover:text-black dark:hover:text-sky-300 ${styleLogo}`}>
      <svg
        width="40"
        height="34"
        viewBox="0 0 146 176"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto"
      >
        <g className="layer-t" stroke="#0369A1" strokeWidth="1" fill="#0369A1">
          <rect height="34" rx="9" ry="9" width="40" x="1" y="1" />
          <rect height="34" rx="9" ry="9" width="90" x="55" y="1" />
          <rect height="175" rx="9" ry="9" width="34" x="55" y="1" />
        </g>
      </svg>
      <div className="p-2">
        <div className="text-md">Tech Vibe</div>
        <div className="font-bold text-lg">Agency</div>
      </div>
    </Link>
  );
}
