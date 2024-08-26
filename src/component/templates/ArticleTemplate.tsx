import { FC } from "react";
import BorderAroundSection from "../atoms/BorderAroundSection";
import ArticleBreadcrumb from "../atoms/ArticleBreadcrumb";
import utils from "../../assets/utils/utils";
import FormattedArticle from "../atoms/FormatArticles";
import ArticleCommentSection from "../organisms/ArticleCommentSection";
import { Categories } from "../../assets/utils/Constants";

interface ArticleTemplateProps {
  category: Categories;
  subcategory: string;
  imgSrc: string;
  title: string;
  publishTime: string;
  content: string[];
}

const ArticleTemplate: FC<ArticleTemplateProps> = ({
  category,
  subcategory,
  imgSrc,
  title,
  publishTime,
  content,
}) => {
  const comments = [
    {
      imgSrc: imgSrc,
      name: "سيف الله وائل",
      comment:
        "بالفعل اتفق أضعف الإيمان أن تعطي الأم كتيبات، أو مقالات لابنها كي يقرأها.   ",
    },
    {
      imgSrc: imgSrc,
      name: "سيف الله وائل",
      comment:
        "بالفعل اتفق أضعف الإيمان أن تعطي الأم كتيبات، أو مقالات لابنها كي يقرأها.   ",
    },
    {
      imgSrc: imgSrc,
      name: "سيف الله وائل",
      comment:
        "بالفعل اتفق أضعف الإيمان أن تعطي الأم كتيبات، أو مقالات لابنها كي يقرأها.   ",
    },
  ];

  return (
    <BorderAroundSection
      rounded="rounded-[12px]"
      borderColor={utils.categoryDetails(category).color}
      flex={false}
    >
      <ArticleBreadcrumb category={category} subcategory={subcategory} />
      {imgSrc && <img src={imgSrc} alt={title} />}
      <h1 className="text-black text-2xl mt-5">{title}</h1>
      <time className="text-xs text-gray-600  block">{publishTime}</time>
      <FormattedArticle content={content} />
      <ArticleCommentSection comments={comments} />
    </BorderAroundSection>
  );
};

export default ArticleTemplate;