import React from "react";
import { MOST_IMPORTANT_ARTICLES } from "../assets/utils/Constants";
import ArticleCards from "./ui/ArticleCards";

function MostImportantArticles() {
  return (
    <div className="my-14">
      <h1 className="text-6xl font-bold text-header-color">
        {MOST_IMPORTANT_ARTICLES}
      </h1>
      <ArticleCards />
    </div>
  );
}

export default MostImportantArticles;
