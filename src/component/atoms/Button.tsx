import { FC, ReactNode } from "react";

type ButtonType = "submit" | "reset" | "button";

type ButtonProps = {
  className: string;
  type?: ButtonType;
  children?: ReactNode | string;
};

const Button: FC<ButtonProps> = ({ className, type = "button", children }) => {
  const classNameConcatenation =
    "px-3.5 py-2 rounded-md font-semibold transition-all duration-300 border-0 hover:rounded-[22px] " +
    className;
  return (
    <button className={`cursor-pointer ${classNameConcatenation}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
