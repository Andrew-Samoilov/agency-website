import Link from "next/link";

interface MainMenuProps {
  onClickFunction?: any;
  styleNav?: string;
  styleMenuItem?: string;
}

export default function MainMenu({ styleNav, styleMenuItem, onClickFunction}:
  Readonly<MainMenuProps>) {

  let menuItems = [
    {
      id: 1,
      text: "Projects",
      link: "/projects",
    },
    {
      id: 2,
      text: "Team",
      link: "/team",
    },
    {
      id: 3,
      text: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className={styleNav}>
      {menuItems.map(({ id, text, link }) => (
        <Link
          key={id}
          href={link}
          onClick={onClickFunction}
          className={styleMenuItem}
          aria-hidden
        >
          {text}
        </Link>
      ))}
    </nav>
  );
}
