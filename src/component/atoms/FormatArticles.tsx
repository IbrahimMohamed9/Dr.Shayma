import { FC } from "react";

type FormattedArticleProps = {
  content: string[];
};

const FormattedArticle: FC<FormattedArticleProps> = ({ content }) => {
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
