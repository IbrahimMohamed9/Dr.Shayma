import { Link } from "react-router-dom";
import { TbArticle } from "react-icons/tb";
import { BiPhoneCall, BiHomeAlt2 } from "react-icons/bi";
import { PiChatCircleBold } from "react-icons/pi";

const NavDesktop = () => {
  const routes = [
    {
      title: "الرئيسية",
      href: "/",
      Icon: BiHomeAlt2,
    },
    {
      title: "اعرف عنا",
      href: "/about",
      Icon: PiChatCircleBold,
    },
    {
      title: "تواصل معنا",
      href: "/contact",
      Icon: BiPhoneCall,
    },
    {
      title: "المواضيع",
      href: "/topics",
      Icon: TbArticle,
    },
  ];

  const routesElement = routes.map(({ title, href, Icon }) => (
    <li>
      <a
        href={href}
        className="flex items-center gap-1 hover:text-neutral-400 transition-all"
      >
        <Icon />
        {title}
      </a>
    </li>
  ));

  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routesElement}
    </ul>
  );
};

export default NavDesktop;
