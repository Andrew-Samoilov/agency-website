import ContactUsBtn from "../contact-us-btn/contact-us-btn";
import Logo from "../logo/logo";
import MainMenu from "../main-menu/mainMenu";
import MobileMenu from "../mobile-menu/mobile-menu";

export default function Header() {
    return (
        <header className="p-6 md:px-12 lg:px-24 lg:pr-32 sticky top-0 z-50 bg-white dark:bg-black md:relative">
            <nav className="flex justify-between items-center">
                <Logo styleLogo=""/>
                <div className="flex items-center">
                    <MainMenu
                        styleNav="hidden md:flex"
                        styleMenuItem="pr-8 dark:hover:text-sky-300 hover:text-main-sky"
                    />
                    <MobileMenu />
                    <ContactUsBtn
                        buttonText="Get a Quote"
                        className=" bg-main-sky dark:bg-sky-300 text-white dark:text-black hover:bg-white hover:text-main-sky hidden lg:block"
                    />
                </div>
            </nav>
        </header>
    );
}
