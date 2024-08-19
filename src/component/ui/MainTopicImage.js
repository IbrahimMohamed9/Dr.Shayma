import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import utils from "../../assets/utils/utils";
const MainTopicImage = (props) => {
  const { category, color, smallImg, navTo } = utils.categoryDetails(
    props.category
  );

  return (
    <div className="group w-full relative transition-all overflow-hidden">
      <img src={smallImg} alt={category} className="w-full" />
      <Link to={`/${navTo}`}>
        <Button
          content="اقرء المزيد"
          className={`translate-center-l bg-${color} absolute -bottom-16 py-2/5 px-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-20`}
          fontSize="text-xl"
        />
      </Link>
      {/* Hidden div to enforce color rendering */}
      <div className="hidden">
        <span className="bg-main-blue bg-main-orange bg-main-green bg-main-red bg-black b"></span>
      </div>
    </div>
  );
};

export default MainTopicImage;
