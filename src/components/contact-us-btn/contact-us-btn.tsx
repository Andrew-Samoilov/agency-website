import Link from "next/link";

//need refactor work with style

export default function ContactUsBtn({
  buttonLook,
  buttonText = "Contact\u00A0Us",
}: Readonly<{ buttonLook?: string; buttonText?: string }>) {
  let buttonStyle =
    " bg-main-sky dark:bg-sky-300 text-white dark:text-black hover:bg-white hover:text-main-sky";
  switch (buttonLook) {
    case "main":
      buttonStyle =
        "bg-white hover:bg-main-sky dark:bg-black text-main-sky hover:text-white dark:text-sky-300 hover:border-white ";
      break;
    case "top":
      buttonStyle = buttonStyle +" hidden lg:block";
      break;
    default:
      break;
  }

  return (
    <Link
      href="/contact"
      className={`border-main-sky duration-300 font-semibold px-[1em] py-[0.5em] border ${buttonStyle}`}
    >
      {buttonText}
    </Link>
  );
}


// gpt variant:
// import Link from "next/link";

// interface ContactUsBtnProps {
//   buttonLook?: 'main' | 'top';
//   buttonText?: string;
// }

// export default function ContactUsBtn({ buttonLook, buttonText = "Contact\u00A0Us" }: ContactUsBtnProps) {
//   const styles = {
//     default: "bg-main-sky dark:bg-sky-300 text-white dark:text-black hover:bg-white hover:text-main-sky",
//     main: "bg-white hover:bg-main-sky dark:bg-black text-main-sky hover:text-white dark:text-sky-300 hover:border-white",
//     top: "hidden lg:block",
//   };

//   const tailwindClasses = {
//     base: "border-main-sky duration-300 font-semibold px-[1em] py-[0.5em] border",
//     additional: styles[buttonLook || 'default'] || "",
//   };

//   return (
//     <Link href="/contact" className={`${tailwindClasses.base} ${tailwindClasses.additional}`}>
//       {buttonText}
//     </Link>
//   );
// }
