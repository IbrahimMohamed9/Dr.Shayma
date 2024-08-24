import React from "react";
import BorderAroundSection from "../atoms/BorderAroundSection";
import ArticleBreadcrumb from "../atoms/ArticleBreadcrumb";
import utils from "../../assets/utils/utils";
import FormattedArticle from "../atoms/FormatArticles";

const ArticleTemplate = (props) => {
  const { category, subcategory, img, title, publishTime, content } = props;

  return (
    <BorderAroundSection
      rounded="rounded-[12px]"
      borderColor={utils.categoryDetails(category).color}
    >
      <ArticleBreadcrumb category={category} subcategory={subcategory} />
      {img && <img src={img} alt={title} />}
      <h1 className="text-black text-2xl mt-5">{title}</h1>
      <time className="text-xs text-gray-600  block">{publishTime}</time>
      <FormattedArticle title={title} content={content} />
    </BorderAroundSection>
  );
};

export default ArticleTemplate;
