import { FC } from "react";
import SubjectCategory from "../atoms/SubjectCategory";

interface SubjectCategoriesListProps {
  categories: string[];
  color: string;
}

const SubjectCategoriesList: FC<SubjectCategoriesListProps> = ({
  categories,
  color,
}) => {
  return (
    <ul className="flex flex-wrap gap-2 text-nowrap -mt-3">
      {categories.map((category, index) => (
        <li key={index}>
          <SubjectCategory category={category} color={color} />
        </li>
      ))}
    </ul>
  );
};

export default SubjectCategoriesList;
