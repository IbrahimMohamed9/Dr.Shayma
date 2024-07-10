import React from "react";
import HeaderWordList from "./ui/HeaderWordList";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import styles from "../assets/css/header.module.css";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="black-bg">
      <div className={`container ${styles.container}`}>
        <Link to="/home">
          <img
            src={logo}
            alt="شيماء بنت عبدالتواب مشرف"
            className={`${styles.logo} centerY`}
          />
        </Link>
        <HeaderWordList />
        <div>
          <Button content="تسجيل دخول" classes="c-white centerY green-bg" />
          <Button content="تسجيل حساب" classes="c-black centerY white-bg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
