import {
  DOCTRINAL_EDUCATION,
  FAMILY_AND_LIFE,
  HEALTH,
  RAISING,
} from "../../assets/utils/Constants";
import familyAndLifeSmallImage from "../../assets/images/الاسرة والحياة رئيسي.png";
import doctrineSmallImage from "../../assets/images/التربية العقائدية رئيسي.png";
import raisingSmallImage from "../../assets/images/التربية رئيسي.png";
import healthSmallImage from "../../assets/images/الصحة رئيسي.png";
import familyAndLifeBigImage from "../../assets/images/الاسرة والحياة مقال.png";
import doctrineBigImage from "../../assets/images/التربية العقائدية مقال.png";
import raisingBigImage from "../../assets/images/التربية مقال.png";
import healthBigImage from "../../assets/images/الصحة مقال.png";

const utils = {
  categoryDetails: (category) => {
    switch (category) {
      case RAISING:
        return {
          category: category,
          color: "main-orange",
          smallImg: raisingSmallImage,
          bigImg: raisingBigImage,
          navTo: "Raising",
        };
      case DOCTRINAL_EDUCATION:
        return {
          category: category,
          color: "main-blue",
          smallImg: doctrineSmallImage,
          bigImg: doctrineBigImage,
          navTo: "DoctrinalEducation",
        };
      case HEALTH:
        return {
          category: category,
          color: "main-green",
          smallImg: healthSmallImage,
          bigImg: healthBigImage,
          navTo: "Health",
        };
      case FAMILY_AND_LIFE:
        return {
          category: category,
          color: "main-red",
          smallImg: familyAndLifeSmallImage,
          bigImg: familyAndLifeBigImage,
          navTo: "FamilyAndLife",
        };
      default:
        return {
          category: category,
          color: "black",
          imgSrc: "",
          navTo: "",
        };
    }
  },
};

export default utils;
