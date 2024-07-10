import React from "react";

const FooterWordList = () => {
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
    </ul>
  );
};

export default FooterWordList;
