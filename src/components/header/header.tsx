import ContactUsBtn from "../contact-us-btn/contact-us-btn";
import Logo from "../logo/logo";

export default function Header() {
  return (
    <header className="p-6 md:px-12 lg:px-24 lg:pr-32">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <div className="px-8">Menu</div>
          <ContactUsBtn />
        </div>
      </nav>
    </header>
  );
}
