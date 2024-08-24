import React from "react";
import FirstHomeSection from "./../component/organisms/FirstHomeSection";
import MainTopics from "../component/organisms/MainTopics";
import MostImportantArticles from "./../component/organisms/MostImportantArticles";

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
