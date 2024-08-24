import React from "react";
import FirstHomeSection from "./../organisms/FirstHomeSection";
import MainTopics from "../organisms/MainTopics";
import MostImportantArticles from "./../organisms/MostImportantArticles";

const Home = () => {
  return (
    <>
      <FirstHomeSection />
      <MostImportantArticles />
      <MainTopics />
    </>
  );
};

export default Home;
