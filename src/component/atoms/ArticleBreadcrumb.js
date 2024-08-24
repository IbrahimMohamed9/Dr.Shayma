import React from "react";
import { Link } from "react-router-dom";
import utils from "../../assets/utils/utils";

const ArticleBreadcrumb = (props) => {
  const { category, subcategory } = props;
  const { navTo, color } = utils.categoryDetails(category);
  return (
    <div className={`bg-${color} text-white py-2 px-4 mb-5 rounded`}>
      <nav className="text-sm">
        <Link to="/Home">الرئيسية</Link>
        <span className="mx-2">{">>"}</span>
        <Link to={"/" + navTo}>{category}</Link>
        <span className="mx-2">{">>"}</span>
        <Link to="#">
          {/* TODO:compelete navigation */}
          {subcategory}
        </Link>
      </nav>
    </div>
  );
};

export default ArticleBreadcrumb;
