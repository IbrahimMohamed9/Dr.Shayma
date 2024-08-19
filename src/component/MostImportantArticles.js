import React from "react";
import { MOST_IMPORTANT_ARTICLES } from "../assets/utils/Constants";
import ArticleCards from "./ui/ArticleCards";
import SectionHeader from "./ui/SectionHeader";

function MostImportantArticles() {
  return (
    <div className="mt-14">
      <SectionHeader content={MOST_IMPORTANT_ARTICLES} />
      <ArticleCards />
    </div>
  );
}

export default MostImportantArticles;
