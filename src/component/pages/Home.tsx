import FirstHomeSection from "./../organisms/FirstHomeSection";
import MainTopics from "../organisms/MainTopics";
import MostImportantArticles from "./../organisms/MostImportantArticles";

const Home = () => {
  return (
    <div>
      <FirstHomeSection />
      <div className="container">
        <MostImportantArticles />
        <MainTopics />
      </div>
    </div>
  );
};

export default Home;
