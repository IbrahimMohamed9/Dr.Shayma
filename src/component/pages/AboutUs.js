import React from "react";
import img from "./../../assets/images/100x150.png";
import FirstAboutUsSection from "./../organisms/FirstAboutUsSection";
import SecondAboutUsSection from "./../organisms/SecondAboutUsSection";
import BooksSection from "./../organisms/BooksSection";

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
