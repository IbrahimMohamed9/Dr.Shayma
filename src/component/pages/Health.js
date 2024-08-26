import React from "react";
import mainImage from "../../assets/images/الاسرة والحياة رئيسي.png";
import SubjectTemplate from "../templates/SubjectTemplate";
import { HEALTH } from "../../assets/utils/Constants";

const Health = () => {
  const categories = [
    "إضاءات تربوية",
    "من الوحيين",
    "التربية بالقصة",
    "يا بني اركب معنا",
    "المباح من الكلام في التربية الجنسية في الإسلام",
    "حياتنا والشاشات",
  ];

  const articles = [
    {
      title: "عنقود طمّني",
      description:
        "بعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هن بعض النصوص التوضيحية هنا. بعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هن بعض النصوص التوضيحية هنا. بعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هن بعض النصوص التوضيحية هنا...",
      img: mainImage,
    },
    {
      title: "عنقود طمّني",
      description:
        "بعض النصوص التوضيحية هنا...  بعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هن بعض النصوص التوضيحية هنا.  بعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هنبعض النصوص التوضيحية هن بعض النصوص التوضيحية هنا.",
      img: mainImage,
    },
    {
      title: "عنقود طمّني",
      description: "بعض النصوص التوضيحية هنا...",
      img: mainImage,
    },
    {
      title: "عنقود طمّني",
      description: "بعض النصوص التوضيحية هنا...",
      img: mainImage,
    },
  ];

  return (
    <SubjectTemplate
      categories={categories}
      title={HEALTH}
      articles={articles}
      category={HEALTH}
    />
  );
};

export default Health;