import { FC } from "react";
import ArticleCardText from "../atoms/ArticleCardText";
import { Categories } from "../../assets/utils/Constants";

interface ArticleCardProps {
  category: Categories;
  title: string;
  description: string;
  date: string;
  imgSrc: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  category,
  title,
  description,
  date,
  imgSrc,
}) => {
  return (
    <div className="flex flex-col rounded-md shadow-md w-fit">
      <img src={imgSrc} alt={title} className="w-360 h-190 rounded-lg" />
      <ArticleCardText
        category={category}
        title={title}
        description={description}
        date={date}
      />
    </div>
  );
};

export default ArticleCard;
