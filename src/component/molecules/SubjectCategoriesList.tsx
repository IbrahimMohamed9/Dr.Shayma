import { FC, useEffect, useRef } from "react";
import SubjectCategory from "../atoms/SubjectCategory";
import { useRecoilState } from "recoil";
import subjectCategoryState from "../../assets/atoms/subjectState";

type SubjectCategoriesListProps = {
  color: string;
};

const SubjectCategoriesList: FC<SubjectCategoriesListProps> = ({ color }) => {
  const [categories] = useRecoilState(subjectCategoryState);
  const categoryList = useRef<HTMLUListElement | null>(null);

  const categoryElementsList = Object.entries(categories).map(
    ([key, value]) => (
      <li key={key} className="inline mx-1">
        <SubjectCategory valueKey={key} value={value} color={color} />
      </li>
    )
  );

  useEffect(() => {
    const listElement = categoryList.current;

    if (listElement) {
      let isMouseDown = false;
      let initialX: number;

      let currentRight = 0;

      const handleMouseOver = (e: MouseEvent) => {
        if (isMouseDown && listElement && initialX !== null) {
          const deltaX = e.pageX - initialX;

          // Update position efficiently
          currentRight += deltaX;

          // Use requestAnimationFrame for smoother updates
          requestAnimationFrame(() => {
            listElement.style.right = `${currentRight}px`;
          });

          initialX = e.pageX;
        }
      };

      // Initialize currentRight when mouse down starts
      const handleMouseDown = () => {
        if (listElement) {
          currentRight =
            parseInt(window.getComputedStyle(listElement).right, 10) || 0;
          isMouseDown = true;
        }
      };

      const handleMouseUp = (e: MouseEvent) => {
        initialX = e.pageX;

        isMouseDown = false;
      };

      listElement.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        listElement.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  return (
    <div className="relative h-9 overflow-hidden w-full">
      <ul
        className="absolute bottom-0 text-nowrap whitespace-nowrap overflow-auto hidden-scrollbar right-transition"
        ref={categoryList}
      >
        {categoryElementsList}
      </ul>
    </div>
  );
};

export default SubjectCategoriesList;
