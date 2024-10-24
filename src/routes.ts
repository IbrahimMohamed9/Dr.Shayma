import { TbArticle } from "react-icons/tb";
import { BiPhoneCall, BiHomeAlt2 } from "react-icons/bi";
import { PiChatCircleBold } from "react-icons/pi";

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

export default routes;
