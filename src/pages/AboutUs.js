import React from "react";
import img from "./../assets/images/100x150.png";
import FirstAboutUsSection from "./../component/organisms/FirstAboutUsSection";
import SecondAboutUsSection from "./../component/organisms/SecondAboutUsSection";
import BooksSection from "./../component/organisms/BooksSection";

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
