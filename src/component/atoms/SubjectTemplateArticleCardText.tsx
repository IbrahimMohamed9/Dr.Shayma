import { FC } from "react";
import Button from "./Button";

type SubjectTemplateArticleCardTextProps = {
  description: string;
  title: string;
  color: string;
}

const SubjectTemplateArticleCardText: FC<
  SubjectTemplateArticleCardTextProps
> = (props) => {
  const { description, title, color } = props;
  return (
    <div className="flex-1 p-4 flex items-center md:w-3/5">
      <div className="w-full">
        <h2 className="font-bold text-base md:text-lg">{title}</h2>
        <p className="my-4 line-clamp-4 text-sm md:text-base">{description}</p>
        <Button
          className={"block mx-auto mt-4 text-white bg-" + color}
          content="اقرأ المزيد"
        />
      </div>
    </div>
  );
};

export default SubjectTemplateArticleCardText;
