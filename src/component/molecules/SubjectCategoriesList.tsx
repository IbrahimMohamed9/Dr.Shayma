import { FC } from "react";
import SubjectCategory from "../atoms/SubjectCategory";

type SubjectCategoriesListProps = {
  categories: string[];
  color: string;
}

const SubjectCategoriesList: FC<SubjectCategoriesListProps> = ({
  categories,
  color,
}) => {
  const categoryElementsList = categories.map((category, index) => (
    <li key={index}>
      <SubjectCategory category={category} color={color} />
    </li>
  ));

  return (
    <ul className="flex flex-wrap gap-2 text-nowrap -mt-3">
      {categoryElementsList}
    </ul>
  );
};

export default SubjectCategoriesList;
