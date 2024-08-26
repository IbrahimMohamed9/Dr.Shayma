import { FC } from "react";

interface SectionHeaderProps {
  className?: string;
  content: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ className, content }) => {
  return (
    <h1
      className={`text-[2.6rem] xs:text-5xl min-[500px]:text-6xl font-bold mr-3 text-main-dark-blue mb-6 ${
        className || ""
      }`}
    >
      {content}
    </h1>
  );
};

export default SectionHeader;
