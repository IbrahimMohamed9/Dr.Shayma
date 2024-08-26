import { FC } from "react";
import ArticleComment from "../atoms/ArticleComment";
import { CommentType } from "../../types";

interface ArticleCommentsProps {
  comments: CommentType[];
}

const ArticleComments: FC<ArticleCommentsProps> = ({ comments }) => {
  return (
    <div className="mt-8">
      {comments.map((comment, index) => (
        <ArticleComment
          key={index}
          name={comment.name}
          imgSrc={comment.imgSrc}
          comment={comment.comment}
        />
      ))}
    </div>
  );
};

export default ArticleComments;
