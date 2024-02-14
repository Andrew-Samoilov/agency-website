import Link from "next/link";

//maybe need change from "buttonText" to "children"

export default function ContactUsBtn({
  buttonText = "Contact\u00A0Us",
  className,
}: Readonly<{ buttonText?: string, className?: string }>) {

  return (
    <Link
      href="/contact"
      className={`border border-main-sky duration-300 font-semibold px-[1em] py-[0.5em] ${className}`}
    >
      <button>
        {buttonText}
      </button>
    </Link>
  );
}
