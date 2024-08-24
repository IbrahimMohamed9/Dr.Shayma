import React from "react";
import logo from "./../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { LOGO_DESCRIPTION } from "./../../assets/utils/Constants";
import HeaderWordList from "./../atoms/HeaderWordList";
import Button from "./../atoms/Button";

const Header = () => {
  const buttomsClasses = "mr-2 translate-center-y ";
  return (
    <header className="bg-black sticky top-0 z-50 w-full h-20">
      <div className="container flex justify-between">
        <Link to="/home">
          <img
            src={logo}
            alt={LOGO_DESCRIPTION}
            className="w-32 translate-center-y"
          />
        </Link>
        <HeaderWordList />
        <div>
          <Button
            content="تسجيل دخول"
            className={"bg-main-green text-white " + buttomsClasses}
          />
          <Button
            content="تسجيل حساب"
            className={"bg-white text-black " + buttomsClasses}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
