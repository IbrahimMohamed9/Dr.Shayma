import ArticleCard from "./../molecules/ArticleCard";
import { Categories } from "../../assets/utils/Constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";

const ArticleCards = () => {
  const cardsList = [
    {
      category: Categories.DOCTRINAL_EDUCATION,
      title: "إطلاق هاتف جديد",
      description: "شركة XYZ تطلق هاتفًا جديدًا بمواصفات متقدمة.",
      date: "2024-07-01",
      imgSrc: "https://placehold.co/360x190",
    },
    {
      category: Categories.DOCTRINAL_EDUCATION,
      title: "إطلاق هاتف جديد",
      description: "شركة XYZ تطلق هاتفًا جديدًا بمواصفات متقدمة.",
      date: "2024-07-01",
      imgSrc: "https://placehold.co/360x190",
    },
    {
      category: Categories.DOCTRINAL_EDUCATION,
      title: "إطلاق هاتف جديد",
      description: "شركة XYZ تطلق هاتفًا جديدًا بمواصفات متقدمة.",
      date: "2024-07-01",
      imgSrc: "https://placehold.co/360x190",
    },
    {
      category: Categories.DOCTRINAL_EDUCATION,
      title: "فوز الفريق الوطني",
      description: "الفريق الوطني يحقق فوزًا مثيرًا في البطولة العالمية.",
      date: "2024-07-02",
      imgSrc: "https://placehold.co/360x190",
    },
    {
      category: Categories.DOCTRINAL_EDUCATION,
      title: "نصائح صحية جديدة",
      description: "خبراء الصحة يقدمون نصائح جديدة للحفاظ على اللياقة البدنية.",
      date: "2024-07-03",
      imgSrc: "https://placehold.co/360x190",
    },
    {
      category: Categories.DOCTRINAL_EDUCATION,
      title: "مهرجان الفيلم الدولي",
      description: "مهرجان الفيلم الدولي يجذب آلاف الزوار.",
      date: "2024-07-04",
      imgSrc: "https://placehold.co/360x190",
    },
    {
      category: Categories.DOCTRINAL_EDUCATION,
      title: "ارتفاع أسعار الأسهم",
      description: "أسعار الأسهم تشهد ارتفاعًا كبيرًا في الأسواق العالمية.",
      date: "2024-07-05",
      imgSrc: "https://placehold.co/360x190",
    },
  ];

  const articles = cardsList.map((card, index) => (
    <SwiperSlide key={index}>
      <ArticleCard
        category={card.category}
        title={card.title}
        description={card.description}
        date={card.date}
        imgSrc={card.imgSrc}
      />
    </SwiperSlide>
  ));

  const getSlidesPerView = () => {
    const width = window.innerWidth;
    switch (true) {
      case width >= 1280:
        return 3;
      case width >= 1200:
        return 2.7;
      case width >= 1024:
        return 2.5;
      case width >= 768:
        return 3.6;
      case width >= 640:
        return 2.5;
      case width >= 480:
        return 2.2;
      case width >= 390:
        return 1.8;
      case width >= 370:
        return 1.7;
      case width >= 325:
        return 1.5;
    }
    return 1.47;
  };
  console.log(getSlidesPerView());

  return (
    <Swiper
      dir="rtl"
      navigation={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-80 lg:h-[25rem]"
      slidesPerView={getSlidesPerView()}
      centeredSlides={true}
      grabCursor={true}
    >
      {articles}
    </Swiper>
  );
};

export default ArticleCards;
