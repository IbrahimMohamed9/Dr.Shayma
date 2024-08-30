import { FC, ReactNode } from "react";

type BorderAroundSectionProps = {
  flex: boolean;
  children: ReactNode;
  bgColor?: string;
  rounded?: string;
  borderColor?: string;
  className?: string;
};

const BorderAroundSection: FC<BorderAroundSectionProps> = ({
  flex,
  bgColor,
  children,
  className,
}) => {
  return (
    <div className={`min-h-fit p-1 sm:p-5 w-full ${bgColor ?? ""}`}>
      <div
        className={`border-5 h-full py-2 md:py-5 border-royal-blue ${className}
        ${flex ? "flex flex-col-reverse md:flex-row" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderAroundSection;
