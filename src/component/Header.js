import React from "react";
import HeaderWordList from "./ui/HeaderWordList";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import styles from "../assets/css/header.module.css";
import Button from "./ui/Button";
import { logoDescription } from "../assets/utils/Constants";

const Header = () => {
  return (
    <header className="bg-black">
      <div className={`container ${styles.container}`}>
        <Link to="/home">
          <img
            src={logo}
            alt={logoDescription}
            className={`${styles.logo} translate-center-y`}
          />
        </Link>
        <HeaderWordList />
        <div>
          <Button
            content="تسجيل دخول"
            classes="text-white bg-main-green translate-center-y"
          />
          <Button
            content="تسجيل حساب"
            classes="bg-white text-black translate-center-y"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
