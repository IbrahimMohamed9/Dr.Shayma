import React from "react";
import CommentInput from "../atoms/CommentInput";
import ArticleComments from "../molecules/ArticleComments";

const ArticleCommentSection = (props) => {
  return (
    <div>
      <CommentInput />
      <ArticleComments comments={props.comments} />
    </div>
  );
};

export default ArticleCommentSection;
