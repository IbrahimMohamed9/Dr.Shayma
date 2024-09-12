import ArticleCard from "./../molecules/ArticleCard";
import { Categories } from "../../assets/utils/Constants";

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
    <ArticleCard
      key={index}
      category={card.category}
      title={card.title}
      description={card.description}
      date={card.date}
      imgSrc={card.imgSrc}
    />
  ));

  return (
    <div className="flex gap-5 overflow-x-auto  overflow-visible">
      {articles}
    </div>
  );
};

export default ArticleCards;
