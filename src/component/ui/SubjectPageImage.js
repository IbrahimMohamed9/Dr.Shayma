import React from "react";

const SubjectPageImage = (props) => {
  const { title, img } = props;
  return (
    <div className="mb-6 mx-auto max-w-6xl">
      <img src={img} alt={title} className="" />
    </div>
  );
};

export default SubjectPageImage;
