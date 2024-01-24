import Link from "next/link";
import Logo from "../logo/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-200 text-slate-300 dark:text-slate-800 p-6 md:p-12 lg:p-24 lg:pr-32">
      <div className="flex justify-between items-top pb-6">
        <Logo styleLogo="leading-3 text-sky-300 dark:text-main-sky hover:text-slate-100  dark:hover:text-slate-900" />
        <div>menu</div>
        <div className="flex flex-col lg:flex-row">
          <div className="font-bold mr-3">Follow us:</div>
          <Link
            href={"https://www.facebook.com/andrii.samoylov"}
            target="_blank"
            className="hover:text-sky-300 dark:hover:text-main-sky mr-3"
          >
            Fb
          </Link>
          <Link
            href={"https://www.linkedin.com/in/andrew-samoilov/"}
            target="_blank"
            className="hover:text-sky-300  dark:hover:text-main-sky mr-3"
          >
            Ln
          </Link>
        </div>
      </div>
      <hr />
      <div className="pt-6 flex justify-between items-center text-sm flex-col-reverse md:flex-row">
        <div className="flex justify-around pt-6 md:p-0">
          <Link
            href={"#"}
            className="hover:text-sky-300 dark:hover:text-main-sky "
          >
            Cookies
          </Link>
          &nbsp;
          <Link href={"#"} className="hover:text-sky-300">
            Privacy
          </Link>
          &nbsp;
          <Link href={"#"} className="hover:text-sky-300">
            Terms
          </Link>
        </div>
        <div className="text-center ">
          ©{currentYear}&nbsp;
          <Link
            href="/"
            className="text-sky-300 dark:text-main-sky hover:text-slate-200 dark:hover:text-slate-800"
          >
            Tech Vibe Agency
          </Link>
          . All&nbsp;rights&nbsp;reserved
        </div>
      </div>
    </footer>
  );
}
