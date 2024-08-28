import { FC } from "react";
import SubjectTemplateArticleCard from "../molecules/SubjectTemplateArticleCard";
import { ArticleType } from "../../types";

type SubjectTemplateArticleCardsProps = {
  articles: ArticleType[];
  color: string;
}

const SubjectTemplateArticleCards: FC<SubjectTemplateArticleCardsProps> = ({
  articles,
  color,
}) => {
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
