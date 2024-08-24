import React from "react";
import { Link } from "react-router-dom";

const FooterWordList = (props) => {
  const content = props.content;

  return (
    <ul>
      <li className="text-white text-2xl mb-1">
        {content[0].navigateTo ? (
          <Link to={content[0].navigateTo}>{content[0].content}</Link>
        ) : (
          content[0].content
        )}
      </li>
      {content.map((word, index) =>
        index ? (
          <li key={index}>
            <Link
              to={word.navigateTo}
              className="text-white mb-3 text-sm hover:text-main-green transition-colors duration-300"
            >
              {word.content}
            </Link>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default FooterWordList;
