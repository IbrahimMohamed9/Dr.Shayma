import React from "react";
import {
  DOCTRINE,
  FAMILY_AND_LIFE,
  HEALTHY,
  RASING,
} from "../assets/utils/Constants";
import { MAIN_TOPICS } from "../assets/utils/Constants";
import MainTopicImage from "./ui/MainTopicImage";
import SectionHeader from "./SectionHeader";

const MainTopics = () => {
  const topics = [DOCTRINE, FAMILY_AND_LIFE, HEALTHY, RASING];
  return (
    <div className="mt-14">
      <SectionHeader content={MAIN_TOPICS} />
      <div className="grid grid-cols-2">
        {topics.map((topic, index) => (
          <MainTopicImage category={topic} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainTopics;
