import Link from "next/link";

export default function ContactUsBtn({
  buttonLook,
  buttonText = "Contact\u00A0Us",
}: Readonly<{ buttonLook?: string; buttonText?: string }>) {
  let buttonStyle =
    "border-main-sky bg-main-sky dark:bg-sky-300 text-white dark:text-black hover:bg-white hover:text-main-sky duration-300";
  switch (buttonLook) {
    case "main":
      buttonStyle =
        "bg-white hover:bg-main-sky dark:bg-black text-main-sky hover:text-white dark:text-sky-300 border-main-sky hover:border-white duration-300";
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
      className={`font-semibold px-[1em] py-[0.5em] border ${buttonStyle}`}
    >
      {buttonText}
    </Link>
  );
}
