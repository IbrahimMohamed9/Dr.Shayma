import React from "react";
import SubjectCategory from "./SubjectCategory";

const SubjectCategoriesList = (props) => {
  return (
    <ul className="flex flex-wrap gap-2 text-nowrap -mt-3">
      {props.categories.map((category, index) => (
        <li key={index}>
          <SubjectCategory category={category} color={props.color} />
        </li>
      ))}
    </ul>
  );
};

export default SubjectCategoriesList;
