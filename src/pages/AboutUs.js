import React from "react";
import FirstAboutUsSection from "../component/FirstAboutUsSection";
import SecondAboutUsSection from "../component/SecondAboutUsSection";
import BooksSection from "../component/ui/BooksSection";
import img from "./../assets/images/100x150.png";

const AboutUs = () => {
  const books = [
    { title: "عقيدة طفلي من 3-5", img: img },
    { title: "عقيدة طفلي من 3-5", img: img },
    { title: "عقيدة طفلي من 3-5", img: img },
    { title: "عقيدة طفلي من 3-5", img: img },
    { title: "عقيدة طفلي من 3-5", img: img },
    { title: "عقيدة طفلي من 3-5", img: img },
  ];

  return (
    <>
      <FirstAboutUsSection />
      <SecondAboutUsSection />
      <BooksSection books={books} />
    </>
  );
};

export default AboutUs;
