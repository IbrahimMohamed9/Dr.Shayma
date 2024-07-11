import React from "react";
import logo from "../assets/images/logo.webp";
import styles from "../assets/css/footer.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { logoDescription } from "../assets/utils/Constants";
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
  return (
    <footer className="bg-black py-12">
      <div className={`container  flex justify-between flex-row-reverse`}>
        <div className="flex items-center flex-col">
          <img
            src={logo}
            alt={logoDescription}
            className={`${styles.logo} mb-8`}
          />
          <ul className="flex gap-10">
            <li>
              <FaXTwitter className="border-2 rounded-full border-white text-white hover:bg-white hover:text-black" />
            </li>
            <li>
              <BsWhatsapp className="border-2 rounded-full border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white" />
            </li>
            <li>
              <FaTelegramPlane className="border-2 rounded-full border-telegram text-telegram hover:bg-telegram hover:text-white" />
            </li>
            <li>
              <FaFacebookF className="border-2 rounded-full border-facebook text-facebook hover:bg-facebook hover:text-white" />
            </li>
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
