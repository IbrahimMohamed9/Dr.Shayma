import React from "react";
import ArticleComment from "../atoms/ArticleComment";

const ArticleComments = (props) => {
  return (
    <div className="mt-8">
      {props.comments.map((comment, index) => (
        <ArticleComment
          key={index}
          name={comment.name}
          img={comment.img}
          comment={comment.comment}
        />
      ))}
    </div>
  );
};

export default ArticleComments;
