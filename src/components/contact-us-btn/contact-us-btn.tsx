import Link from "next/link";

export default function ContactUsBtn({ buttonLook }: Readonly<{ buttonLook?: string }>) {
  let buttonStyle = "bg-main-sky dark:bg-sky-300 text-white dark:text-black";
  switch (buttonLook) {
      case "main":
        buttonStyle = "bg-white dark:bg-black text-main-sky dark:text-sky-300";
        break;
      case "red":
        buttonStyle = "bg-red";
        break;
      default:
        break;
    }
  
  return (
    <Link
      href="/contact"
      className={` font-semibold px-[1em] py-[0.5em] hover:text-main-sky hover:bg-white border border-main-sky ${buttonStyle}`}
    >
      Contact&nbsp;Us
    </Link>
  );
}

