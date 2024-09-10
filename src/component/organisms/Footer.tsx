import logo from "./../../assets/images/logo.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LOGO_DESCRIPTION } from "../../assets/utils/Constants";
import FooterWordList from "./../atoms/FooterWordList";
const Footer = () => {
  const whoWeAre = [
    { navTo: "", content: "من نحن؟" },
    { navTo: "/aboutUs", content: "اعرف عنا" },
    { navTo: "/honorList", content: "لائحة الشرف" },
  ];

  const topics = [
    { navTo: "", content: "المواضيع" },
    { navTo: "/DoctrinalEducation", content: "التربية العقائدية" },
    { navTo: "/FamilyAndLife", content: "الاسرة و الحياة" },
    { navTo: "/Raising", content: "التربية" },
    { navTo: "/Health", content: "الصحة" },
  ];

  const mostPopularArticles = [
    { navTo: "", content: "اشهر المقالات" },
    { navTo: "/thinkingEducation", content: "التربية بالتفكر" },
    {
      navTo: "/islamicEducationLibrary",
      content: "مكتبة التربية الإسلامية",
    },
    {
      navTo: "/sexualEducationInIslam",
      content: "التربية الجنسية في الإسلام",
    },
  ];

  const commonSvgClasses =
    " w-8  h-8 border-2 p-1 rounded-full transition-all duration-300";

  const socialMediaIcons = [
    {
      icon: FaXTwitter,
      styles: "border-white text-white hover:bg-white hover:text-black",
      link: "https://x.com/dr_shaymaaa",
    },
    {
      icon: BsWhatsapp,
      styles:
        "border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white",
      // TODO: fix the links
      link: "https://www.facebook.com/profile.php?id=100002421841995",
    },
    {
      icon: FaTelegramPlane,
      styles:
        "border-telegram text-telegram hover:bg-telegram hover:text-white",
      // TODO: fix the links
      link: "https://www.facebook.com/profile.php?id=100002421841995",
    },
    {
      icon: FaFacebookF,
      styles:
        "border-main-blue text-main-blue hover:bg-main-blue hover:text-white",
      link: "https://www.facebook.com/profile.php?id=100002421841995",
    },
  ];
  return (
    <footer className="bg-black py-12">
      <div className={`container  flex justify-between flex-row-reverse`}>
        <div className="flex items-center flex-col">
          <img src={logo} alt={LOGO_DESCRIPTION} className="w-32 mb-8" />
          <ul className="flex gap-10">
            {socialMediaIcons.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <item.icon
                    className={item.styles + " " + commonSvgClasses}
                  ></item.icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <FooterWordList content={mostPopularArticles} />
        <FooterWordList content={topics} />
        <FooterWordList content={whoWeAre} />
      </div>
    </footer>
  );
};

export default Footer;
