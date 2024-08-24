import React from "react";
import ArticleCardText from "../atoms/ArticleCardText";

const ArticleCard = (props) => {
  const { category, title, description, date, imgSrc } = props;

  return (
    <div className="flex flex-col rounded-md shadow-md w-fit">
      <img src={imgSrc} alt={title} className="w-360 h-190 rounded-lg" />
      <ArticleCardText
        category={category}
        title={title}
        description={description}
        date={date}
      />
    </div>
  );
};

export default ArticleCard;
