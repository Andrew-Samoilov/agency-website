import Logo from "../logo/logo";

export default function Header() {
		return (
	<header className="p-6 ">
		<nav className="flex justify-between items-center md:px-8">
		<Logo />
		<div>Menu</div>
		</nav>
	</header>
	);
}
