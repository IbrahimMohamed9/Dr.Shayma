import React from "react";
import SubjectPageImage from "./ui/SubjectPageImage";
import SubjectCategoriesList from "./ui/SubjectCategoriesList";
import SectionHeader from "./ui/SectionHeader";
import SubjectPageArticleCard from "./ui/SubjectPageArticleCard";
import utils from "./../assets/utils/utils";

const SubjectPage = (props) => {
  const { title, categories, articles } = props;
  const { bigImg, color } = utils.categoryDetails(props.category);
  return (
    <div>
      <SubjectPageImage img={bigImg} title={title} />
      <div className="container">
        <SectionHeader content="المقالات" />
        <SubjectCategoriesList categories={categories} color={color} />
        <SubjectPageArticleCard articles={articles} color={color} />
      </div>
    </div>
  );
};

export default SubjectPage;
