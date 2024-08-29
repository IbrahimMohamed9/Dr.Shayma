import { FC, ReactNode } from "react";

type BorderAroundSectionProps = {
  flex: boolean;
  children: ReactNode;
  bgColor?: string;
  rounded?: string;
  borderColor?: string;
};

const BorderAroundSection: FC<BorderAroundSectionProps> = ({
  bgColor,
  flex,
  rounded,
  children,
  borderColor,
}) => {
  return (
    <div className={`min-h-fit p-1 sm:p-5 w-full ${bgColor ?? ""}`}>
      <div
        className={`container border-5 h-full py-2 md:py-5 
        border-${borderColor ?? "royal-blue"} 
        ${flex ? "flex flex-col-reverse md:flex-row" : ""} 
        ${rounded ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderAroundSection;
