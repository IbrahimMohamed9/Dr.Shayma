import React from "react";
import {
  RAISING,
  DOCTRINAL_EDUCATION,
  HEALTH,
  FAMILY_AND_LIFE,
} from "../../assets/utils/Constants";

function getCardCategoryColor(category) {
  switch (category) {
    case RAISING:
      return "main-blue";
    case DOCTRINAL_EDUCATION:
      return "main-orange";
    case HEALTH:
      return "main-green";
    case FAMILY_AND_LIFE:
      return "main-red";
    default:
      return "black";
  }
}

const ArticleCardText = (props) => {
  const { category, title, description, date } = props;
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
