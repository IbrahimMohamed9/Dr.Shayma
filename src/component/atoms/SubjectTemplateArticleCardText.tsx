import { FC } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

type SubjectTemplateArticleCardTextProps = {
  description: string;
  title: string;
  color: string;
  link: string;
};

const SubjectTemplateArticleCardText: FC<
  SubjectTemplateArticleCardTextProps
> = ({ description, title, color, link }) => {
  return (
    <div className="flex-1 p-4 flex items-center md:w-3/5">
      <div className="w-full">
        <h2 className="font-bold text-base md:text-lg">{title}</h2>
        <p className="my-4 line-clamp-4 text-sm md:text-base">{description}</p>
        <Link to={link}>
          <Button
            className={"block mx-auto mt-4 text-white text-xs bg-" + color}
          >
            اقرأ المزيد
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubjectTemplateArticleCardText;
