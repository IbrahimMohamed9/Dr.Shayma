import { FC } from "react";
import SubjectTemplateArticleCardImage from "../atoms/SubjectTemplateArticleCardImage";
import SubjectTemplateArticleCardText from "../atoms/SubjectTemplateArticleCardText";
import { ArticleType } from "../../types";

interface SubjectTemplateArticleCardProps {
  index: number;
  article: ArticleType;
  color: string;
}

const SubjectTemplateArticleCard: FC<SubjectTemplateArticleCardProps> = ({
  index,
  article,
  color,
}) => {
  return (
    <div
      className={`flex border border-gray-300 flex-col ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <SubjectTemplateArticleCardImage
        imgSrc={article.imgSrc}
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