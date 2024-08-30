import { FC } from "react";

type ButtonType = "submit" | "reset" | "button";

type ButtonProps = {
  className: string;
  content: string;
  type?: ButtonType;
};

const Button: FC<ButtonProps> = ({ className, content, type = "button" }) => {
  const classNameConcatenation =
    "px-3.5 py-2 rounded-md font-semibold transition-all duration-300 border-0 hover:rounded-[22px] " +
    className;
  return (
    <button className={`cursor-pointer ${classNameConcatenation}`} type={type}>
      {content}
    </button>
  );
};

export default Button;
