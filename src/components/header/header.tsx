import ContactUsBtn from "../contact-us-btn/contact-us-btn";
import Logo from "../logo/logo";
import MainMenu from "../main-menu/mainMenu";

export default function Header() {
  return (
    <header className="p-6 md:px-12 lg:px-24 lg:pr-32">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <MainMenu
            styleNav="hidden md:flex"
            styleMenuItem="pr-8 dark:hover:text-sky-300 hover:text-main-sky"
      
          />
          <ContactUsBtn buttonText="Get a Quote" />
        </div>
      </nav>
    </header>
  );
}
