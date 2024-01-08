import Link from "next/link";

export default function ContactUsBtn() {
  return (
    <Link
      href='/contact'
      className="bg-main-sky dark:bg-sky-300 text-white dark:text-black font-semibold px-[1em] py-[0.5em]  hover:text-main-sky hover:bg-white border border-main-sky"
    >
      Contact&nbsp;Us
    </Link>
  );
}
