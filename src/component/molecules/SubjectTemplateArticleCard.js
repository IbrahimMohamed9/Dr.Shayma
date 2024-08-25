import React from "react";
import SubjectTemplateArticleCardImage from "../atoms/SubjectTemplateArticleCardImage";
import SubjectTemplateArticleCardText from "../atoms/SubjectTemplateArticleCardText";

const SubjectTemplateArticleCard = (props) => {
  const { index, article, color } = props;
  return (
    <div
      className={`flex border border-gray-300 flex-col ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <SubjectTemplateArticleCardImage
        img={article.img}
        title={article.title}
        index={index}
      />
      <SubjectTemplateArticleCardText
        title={article.title}
        color={color}
        description={article.description}
      />
    </div>
  );
};

export default SubjectTemplateArticleCard;
