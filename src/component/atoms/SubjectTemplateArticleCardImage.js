import React from "react";

const SubjectTemplateArticleCardImage = (props) => {
  const { img, title, index } = props;
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center border-gray-300 md:w-2/5 ${
        index % 2 === 0 ? "border-r-2" : "border-l-2"
      }`}
    >
      <img
        src={img}
        alt={title}
        className={img.width > img.height ? "w-full" : "h-full"}
      />
    </div>
  );
};

export default SubjectTemplateArticleCardImage;
