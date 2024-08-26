import { FC } from "react";
import { Link } from "react-router-dom";

interface FooterWordListProps {
  content: contentType[];
}
interface contentType {
  content: string;
  navTo: string;
}

const FooterWordList: FC<FooterWordListProps> = ({ content }) => {
  return (
    <ul>
      <li className="text-white text-2xl mb-1">
        {content[0].navTo ? (
          <Link to={content[0].navTo}>{content[0].content}</Link>
        ) : (
          content[0].content
        )}
      </li>
      {content.map((word, index) =>
        index ? (
          <li key={index}>
            <Link
              to={word.navTo}
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
