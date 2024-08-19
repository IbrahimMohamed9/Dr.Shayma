import React from "react";

const subjectCategory = (props) => {
  const color = props.color;
  return (
    <div
      className={`rounded-16 border border-${color} hover:border-black hover:border-opacity-50 text-base py-1 px-2 cursor-pointer hover:text-white transition-all duration-300 hover:bg-${color}`}
    >
      {props.category}
    </div>
  );
};

export default subjectCategory;
