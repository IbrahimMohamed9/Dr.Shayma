import React from "react";
import utils from "../../assets/utils/utils";
import SubjectTemplateImage from "./../atoms/SubjectTemplateImage";
import SectionHeader from "./../atoms/SectionHeader";
import SubjectCategoriesList from "./../molecules/SubjectCategoriesList";
import SubjectTemplateArticleCards from "../organisms/SubjectTemplateArticleCards";

const SubjectTemplate = (props) => {
  const { title, categories, articles } = props;
  const { bigImg, color } = utils.categoryDetails(props.category);
  return (
    <div>
      <SubjectTemplateImage img={bigImg} title={title} />
      <div className="container">
        <SectionHeader content="المقالات" />
        <SubjectCategoriesList categories={categories} color={color} />
        <SubjectTemplateArticleCards articles={articles} color={color} />
      </div>
    </div>
  );
};

export default SubjectTemplate;
