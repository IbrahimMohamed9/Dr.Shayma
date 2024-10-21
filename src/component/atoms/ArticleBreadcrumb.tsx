import { FC } from "react";
import { Link } from "react-router-dom";
import utils from "../../assets/utils/utils";

type ArticleBreadcrumbProps = {
  category?: string;
  subcategory?: string;
};

const ArticleBreadcrumb: FC<ArticleBreadcrumbProps> = ({
  category,
  subcategory,
}) => {
  const { color } = utils.categoryDetails(category);
  return (
    <div className={`bg-${color} text-white py-2 px-4 mb-5 rounded`}>
      <nav className="text-sm overflow-x-auto">
        <Link to="/">الرئيسية</Link>
        <span className="mx-2">{">>"}</span>
        <Link to={"/topic/" + category}>{category}</Link>
        <span className="mx-2">{">>"}</span>
        <Link to={`/topic/${category}/${subcategory}`}>{subcategory}</Link>
      </nav>
    </div>
  );
};

export default ArticleBreadcrumb;
