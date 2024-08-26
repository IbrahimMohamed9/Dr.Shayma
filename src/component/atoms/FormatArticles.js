import React from "react";

const FormattedArticle = (props) => {
  const { content } = props;
  return (
    <div className="max-w-2xl mx-auto text-justify">
      {content.map((paragraph, index) => (
        <p key={index} className="mb-5 text-lg leading-relaxed indent-8">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
export default FormattedArticle;