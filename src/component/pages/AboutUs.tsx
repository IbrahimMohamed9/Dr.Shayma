import imgSrc from "./../../assets/images/100x150.png";
import FirstAboutUsSection from "./../organisms/FirstAboutUsSection";
import SecondAboutUsSection from "./../organisms/SecondAboutUsSection";
import BooksSection from "./../organisms/BooksSection";

const AboutUs = () => {
  const books = [
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
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
