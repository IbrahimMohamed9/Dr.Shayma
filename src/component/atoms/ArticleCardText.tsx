import { FC } from "react";
import { Categories } from "../../assets/utils/Constants";

function getCardCategoryColor(category: Categories) {
  switch (category) {
    case Categories.RAISING:
      return "main-blue";
    case Categories.DOCTRINAL_EDUCATION:
      return "main-orange";
    case Categories.HEALTH:
      return "main-green";
    case Categories.FAMILY_AND_LIFE:
      return "main-red";
    default:
      return "black";
  }
}

interface ArticleCardTextProps {
  category: Categories;
  title: string;
  description: string;
  date: string;
}

const ArticleCardText: FC<ArticleCardTextProps> = ({
  category,
  title,
  description,
  date,
}) => {
  const categoryColor = getCardCategoryColor(category);
  return (
    <div className="flex flex-col gap-y-10 p-3 w-360">
      <h3 className={"text-" + categoryColor + " text-sm"}>{category}</h3>
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
      <time className="text-gray-700">{date}</time>
    </div>
  );
};

export default ArticleCardText;