import React from "react";
import SubjectTemplateArticleCard from "../molecules/SubjectTemplateArticleCard";

const SubjectTemplateArticleCards = ({ articles, color }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-lg gap-y-4 my-7">
      {articles.map((article, index) => (
        <SubjectTemplateArticleCard
          key={index}
          article={article}
          index={index}
          color={color}
        />
      ))}
    </div>
  );
};

export default SubjectTemplateArticleCards;
