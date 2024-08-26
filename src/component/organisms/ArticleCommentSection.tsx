import { FC } from "react";
import CommentInput from "../atoms/CommentInput";
import ArticleComments from "../molecules/ArticleComments";
import { CommentType } from "../../types";

interface ArticleCommentSectionProps {
  comments: CommentType[];
}

const ArticleCommentSection: FC<ArticleCommentSectionProps> = (props) => {
  return (
    <div>
      <CommentInput />
      <ArticleComments comments={props.comments} />
    </div>
  );
};

export default ArticleCommentSection;
