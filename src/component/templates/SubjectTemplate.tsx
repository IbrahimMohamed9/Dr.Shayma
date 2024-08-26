import { FC } from "react";
import utils from "../../assets/utils/utils";
import SubjectTemplateImage from "./../atoms/SubjectTemplateImage";
import SectionHeader from "./../atoms/SectionHeader";
import SubjectCategoriesList from "./../molecules/SubjectCategoriesList";
import SubjectTemplateArticleCards from "../organisms/SubjectTemplateArticleCards";
import { ArticleType } from "../../types";
import { Categories } from "../../assets/utils/Constants";

interface SubjectTemplateProps {
  title: string;
  categories: string[];
  category: Categories;
  articles: ArticleType[];
}

const SubjectTemplate: FC<SubjectTemplateProps> = ({
  title,
  categories,
  articles,
  category,
}) => {
  const { bigImg, color } = utils.categoryDetails(category);
  return (
    <div>
      <SubjectTemplateImage imgSrc={bigImg} title={title} />
      <div className="container">
        <SectionHeader content="المقالات" />
        <SubjectCategoriesList categories={categories} color={color} />
        <SubjectTemplateArticleCards articles={articles} color={color} />
      </div>
    </div>
  );
};

export default SubjectTemplate;
