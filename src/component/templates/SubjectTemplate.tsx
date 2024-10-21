import { useEffect, useState } from "react";
import utils from "../../assets/utils/utils";
import SubjectTemplateImage from "./../atoms/SubjectTemplateImage";
import SectionHeader from "./../atoms/SectionHeader";
import SubjectCategoriesList from "./../molecules/SubjectCategoriesList";
import ArticleCardsSubjectTemplate from "../organisms/ArticleCardsSubjectTemplate";
import { fetchData } from "../../assets/customHooks/RestClient";
import { useRecoilState } from "recoil";
import subjectCategoryState from "../../assets/atoms/subjectState";
import articlesState from "../../assets/atoms/articlesCardState";
import { useParams } from "react-router-dom";
import LoadingAndErrorMsg from "../molecules/LoadingAndErrorMsg";

const SubjectTemplate = () => {
  const { category, subcategory } = useParams();
  const { bigImg, color, hexColor } = utils.categoryDetails(category);

  const [, setCategories] = useRecoilState(subjectCategoryState);
  const [, setArticles] = useRecoilState(articlesState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const setters = { setLoading, setError, setData };
    if (subcategory) {
      fetchData("/articles", setters);
    } else {
      fetchData(`/${category}`, setters);
    }
  }, [category, subcategory]);

  useEffect(() => {
    if (typeof data === "object" && data !== null) {
      if (Array.isArray(data)) {
        setArticles(data);
      } else {
        setCategories(data.categories);
        setArticles(data.articles);
      }
    }
  }, [data, setCategories, setArticles]);

  return loading || error || !data ? (
    <LoadingAndErrorMsg loading={loading} error={error} hexColor={hexColor} />
  ) : (
    <div>
      <SubjectTemplateImage imgSrc={bigImg} title={category} />
      <div className="container">
        <SectionHeader content="المقالات" />
        <SubjectCategoriesList color={color} />
        <ArticleCardsSubjectTemplate color={color} />
      </div>
    </div>
  );
};

export default SubjectTemplate;
