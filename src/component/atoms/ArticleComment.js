import React from "react";

const ArticleComment = (props) => {
  const { img, name, comment } = props;

  return (
    <div className="border-b border-gray-300 pb-4 mt-4">
      <div className="flex items-center space-x-3 mb-2">
        <img src={img} alt={name} className="rounded-full w-9 h-9 ml-2" />
        <span className="font-bold">{name}</span>
      </div>
      <div className="text-gray-700">{comment}</div>
    </div>
  );
};

export default ArticleComment;
