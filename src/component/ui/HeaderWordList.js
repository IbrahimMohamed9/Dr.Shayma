import { BiChevronDown } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";

const HeaderWordList = () => {
  const content = [
    { navigateTo: "/home", content: "الرئيسية" },
    { navigateTo: "/aboutUs", content: "اعرف عنا" },
    { navigateTo: "/contactUs", content: "تواصل معانا" },
  ];

  return (
    <ul>
      {content.map((word, index) => (
        <li key={index}>
          <Link to={word.navigateTo} className="c-white">
            {word.content}
          </Link>
        </li>
      ))}
      <li className="c-white pointer">
        المواضيع <BiChevronDown />
      </li>
    </ul>
  );
};

export default HeaderWordList;
