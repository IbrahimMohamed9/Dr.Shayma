import { FC } from "react";

interface subjectCategoryProps {
  color: string;
  category: string;
}

const subjectCategory: FC<subjectCategoryProps> = ({ color, category }) => {
  return (
    <div
      className={`rounded-16 border border-${color} hover:border-black hover:border-opacity-50 text-base py-1 px-2 cursor-pointer hover:text-white transition-all duration-300 hover:bg-${color}`}
    >
      {category}
    </div>
  );
};

export default subjectCategory;
