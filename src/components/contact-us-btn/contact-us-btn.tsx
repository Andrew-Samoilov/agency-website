import Link from "next/link";

export default function ContactUsBtn() {
  return (
    <Link
      href='/contact'
      className="bg-main-sky text-white font-semibold px-[1em] py-[0.5em] md:mr-10 lg:ml-20 hover:text-main-sky hover:bg-white border border-main-sky"
    >
      Contact&nbsp;Us
    </Link>
  );
}
