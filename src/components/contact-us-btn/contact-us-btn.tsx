'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContactUsBtn({
  buttonText = "Contact\u00A0Us",
  subjectText,
  className,
}: Readonly<{ buttonText?: string, subjectText?: string, className?: string }>) {
  const pathname = usePathname();
  let hrefRes = '/contact';

  if (subjectText) {
    hrefRes = hrefRes + '?subject-text=' + subjectText;
  }

  const isDisabled = pathname === "/contact";
  // console.log(pathname, isDisabled);

  return (
    <Link
      href={isDisabled ? "#" : hrefRes}
      className={`border border-main-sky duration-300 font-semibold px-[2.25em] py-[1.5em] 
        ${isDisabled ? "pointer-events-none !text-gray-500 !border-gray-100 !bg-gray-100 cursor-not-allowed" : ""}
        ${className}`}
      aria-disabled={isDisabled}
    >
        {buttonText}
    </Link>
  );
}
