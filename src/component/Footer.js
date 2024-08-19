import React from "react";
import logo from "../assets/images/logo.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LOGO_DESCRIPTION } from "../assets/utils/Constants";
import FooterWordList from "./ui/FooterWordList";
const Footer = () => {
  const whoWeAre = [
    { navigateTo: "/whoWeAre", content: "من نحن؟" },
    { navigateTo: "/thinkingEducation", content: "التربية بالتفكر" },
  ];

  const topics = [
    { navigateTo: "/childDoctrine", content: "عقيدة طفلي" },
    { navigateTo: "/thinkingEducation", content: "التربية بالتفكر" },
    {
      navigateTo: "/islamicEducationLibrary",
      content: "مكتبة التربية الإسلامية",
    },
    {
      navigateTo: "/sexualEducationInIslam",
      content: "التربية الجنسية في الإسلام",
    },
  ];

  const mostPopularArticles = [
    { navigateTo: "/childDoctrine", content: "عقيدة طفلي" },
    { navigateTo: "/thinkingEducation", content: "التربية بالتفكر" },
    {
      navigateTo: "/islamicEducationLibrary",
      content: "مكتبة التربية الإسلامية",
    },
    {
      navigateTo: "/sexualEducationInIslam",
      content: "التربية الجنسية في الإسلام",
    },
  ];

  const commonSvgClasses =
    " w-8  h-8 border-2 p-1 rounded-full transition-all duration-300";

  const socialMediaIcons = [
    {
      icon: FaXTwitter,
      styles: "border-white text-white hover:bg-white hover:text-black",
      // TODO: fix the links
      link: "https://www.facebook.com/profile.php?id=100002421841995",
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
        "border-facebook text-facebook hover:bg-facebook hover:text-white",
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
