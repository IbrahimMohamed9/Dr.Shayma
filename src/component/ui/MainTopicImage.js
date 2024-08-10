import React from "react";
import {
  DOCTRINE,
  FAMILY_AND_LIFE,
  HEALTHY,
  RASING,
} from "../../assets/utils/Constants";
import familyAndLifeImage from "../../assets/images/الاسرة والحياة رئيسي.png";
import doctrineImage from "../../assets/images/التربية العقائدية رئيسي.png";
import rasingImage from "../../assets/images/التربية رئيسي.png";
import healthyImage from "../../assets/images/الصحة رئيسي.png";
import Button from "./Button";

function imageContent(category) {
  switch (category) {
    case RASING:
      return {
        category: category,
        color: "main-orange",
        imgSrc: rasingImage,
      };
    case DOCTRINE:
      return {
        category: category,
        color: "main-blue",
        imgSrc: doctrineImage,
      };
    case HEALTHY:
      return {
        category: category,
        color: "main-green",
        imgSrc: healthyImage,
      };
    case FAMILY_AND_LIFE:
      return {
        category: category,
        color: "main-red",
        imgSrc: familyAndLifeImage,
      };
    default:
      return {
        category: category,
        color: "black",
        imgSrc: "",
      };
  }
}

const MainTopicImage = (props) => {
  const { category, color, imgSrc } = imageContent(props.category);
  return (
    <div className="group w-full relative transition-all overflow-hidden">
      <img src={imgSrc} alt={category} className="w-full" />
      <Button
        content="اقرء المزيد"
        className={`translate-center-l bg-${color} absolute -bottom-16 py-2/5 px-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-20`}
        fontSize="text-xl"
      />
      {/* Hidden div to enforce color rendering */}
      <div className="hidden">
        <span className="bg-main-blue bg-main-orange bg-main-green bg-main-red bg-black b"></span>
      </div>
    </div>
  );
};

export default MainTopicImage;
