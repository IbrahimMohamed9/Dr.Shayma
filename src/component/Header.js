import React from "react";
import HeaderWordList from "./ui/HeaderWordList";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import styles from "../assets/css/header.module.css";
import Button from "./ui/Button";
import { LOGO_DESCRIPTION } from "../assets/utils/Constants";

const Header = () => {
  const buttomsClasses =
    "px-3.5 py-2 rounded-md font-semibold text-xs mr-2 transition-border duration-300 ease-in-out border-0 hover:rounded-[22px] translate-center-y";
  return (
    <header className="bg-black">
      <div className={`container ${styles.container}`}>
        <Link to="/home">
          <img
            src={logo}
            alt={LOGO_DESCRIPTION}
            className={`${styles.logo} translate-center-y`}
          />
        </Link>
        <HeaderWordList />
        <div>
          <Button
            content="تسجيل دخول"
            classes={"bg-main-green text-white " + buttomsClasses}
          />
          <Button
            content="تسجيل حساب"
            classes={"bg-white text-black " + buttomsClasses}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
