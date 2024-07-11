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
    <ul className="flex gap-30">
      {content.map((word, index) => (
        <li key={index}>
          <Link to={word.navigateTo} className="text-white">
            {word.content}
          </Link>
        </li>
      ))}
      <li className="text-white cursor-pointer">
        <div>
          المواضيع <BiChevronDown className="inline" />
        </div>
      </li>
    </ul>
  );
};

export default HeaderWordList;
