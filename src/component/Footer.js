import React from "react";
import logo from "../assets/images/logo.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  const content = [
    { navigateTo: "/home", content: "الرئيسية" },
    { navigateTo: "/aboutUs", content: "اعرف عنا" },
    { navigateTo: "/contactUs", content: "تواصل معانا" },
  ];
  return (
    <footer>
      <FaXTwitter />
      <BsWhatsapp />
      <FaTelegramPlane />
      <FaFacebookF />
    </footer>
  );
};

export default Footer;
