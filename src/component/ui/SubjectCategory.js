import React from "react";

const subjectCategory = (props) => {
  const color = props.color;
  return (
    <div
      className={`rounded-16 border text-base py-1 px-2 cursor-pointer hover:text-white transition-all duration-300 border-${color} hover:bg-${color}`}
    >
      {props.category}
    </div>
  );
};

export default subjectCategory;
