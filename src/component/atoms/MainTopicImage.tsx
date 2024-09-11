import { FC } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import utils from "../../assets/utils/utils";
import { Categories } from "../../assets/utils/Constants";

type MainTopicImageProps = {
  category: Categories;
}

const MainTopicImage: FC<MainTopicImageProps> = ({ category }) => {
  const { color, smallImg, navTo } = utils.categoryDetails(category);

  return (
    <div className="group w-full relative transition-all overflow-hidden">
      <img src={smallImg} alt={category} className="w-full" />
      <Link to={`/${navTo}`}>
        <Button
          className={`translate-center-l bg-${color} absolute -bottom-16 py-2/5 px-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-20 text-xl`}
        >
          اقرء المزيد
        </Button>
      </Link>
    </div>
  );
};

export default MainTopicImage;
