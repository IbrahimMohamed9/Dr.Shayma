import { FC } from "react";
import SubjectTemplateArticleCardImage from "../atoms/SubjectTemplateArticleCardImage";
import SubjectTemplateArticleCardText from "../atoms/SubjectTemplateArticleCardText";
import { ArticleType } from "../../types";

type SubjectTemplateArticleCardProps = {
  index: number;
  article: ArticleType;
  color: string;
};

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
        index={index}
        imgSrc={article.imgSrc}
        title={article.title}
      />
      <SubjectTemplateArticleCardText
        title={article.title}
        color={color}
        description={article.description}
        link={article.link}
      />
    </div>
  );
};

export default SubjectTemplateArticleCard;
