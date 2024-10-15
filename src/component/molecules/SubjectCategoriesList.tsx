import { FC } from "react";
import SubjectCategory from "../atoms/SubjectCategory";
import { useRecoilState } from "recoil";
import subjectCategoryState from "../../assets/atoms/subjectCategories";

type SubjectCategoriesListProps = {
  color: string;
};

const SubjectCategoriesList: FC<SubjectCategoriesListProps> = ({ color }) => {
  const [categories] = useRecoilState(subjectCategoryState);

  const categoryElementsList = Object.entries(categories).map(
    ([key, value]) => (
      <li key={key}>
        <SubjectCategory valueKey={key} value={value} color={color} />
      </li>
    )
  );

  return (
    <ul className="flex flex-wrap gap-2 text-nowrap -mt-3">
      {categoryElementsList}
    </ul>
  );
};

export default SubjectCategoriesList;
