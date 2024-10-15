import { FC, useEffect, useState } from "react";
import utils from "../../assets/utils/utils";
import SubjectTemplateImage from "./../atoms/SubjectTemplateImage";
import SectionHeader from "./../atoms/SectionHeader";
import SubjectCategoriesList from "./../molecules/SubjectCategoriesList";
import SubjectTemplateArticleCards from "../organisms/SubjectTemplateArticleCards";
import { Categories } from "../../assets/utils/Constants";
import RestClient from "../../assets/utils/RestClient";
import { useRecoilState } from "recoil";
import subjectCategoryState from "../../assets/atoms/subjectCategories";
import articlesState from "../../assets/atoms/articlesAtoms";
import LoaderSpinner from "../atoms/LoaderSpinner";
import { useParams } from "react-router-dom";

type SubjectTemplateProps = {
  title: string;
  category: Categories;
};

const SubjectTemplate: FC<SubjectTemplateProps> = ({ title, category }) => {
  const { bigImg, color, hexColor } = utils.categoryDetails(category);

  const [, setCategories] = useRecoilState(subjectCategoryState);
  const [, setArticles] = useRecoilState(articlesState);
  const param = useParams().category;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (param) {
          const { data } = await RestClient(`/articles`);
          setArticles(data);
          //TODO:: it logged two times fix that
          console.log(data);
        } else {
          const response = await RestClient(`/${category}`);
          setCategories(response.data.categories);
          setArticles(response.data.articles);
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [category, setCategories, setArticles, param]);

  if (loading) {
    return <LoaderSpinner isVisible={loading} color={hexColor} />;
  }

  if (error) {
    console.error(error);
    return <div></div>;
  }

  return (
    <div>
      <SubjectTemplateImage imgSrc={bigImg} title={title} />
      <div className="container">
        <SectionHeader content="المقالات" />
        <SubjectCategoriesList color={color} />
        <SubjectTemplateArticleCards color={color} />
      </div>
    </div>
  );
};

export default SubjectTemplate;
