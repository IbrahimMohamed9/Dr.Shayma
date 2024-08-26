import { FC } from "react";

interface ButtonProps {
  fontSize?: string;
  className: string;
  content: string;
}

const Button: FC<ButtonProps> = ({ fontSize, className, content }) => {
  const text = fontSize !== undefined ? fontSize : " text-xs ";
  const classNameConcatenation =
    "px-3.5 py-2 rounded-md font-semibold transition-all duration-300 border-0 hover:rounded-[22px] " +
    className +
    " " +
    text;
  return (
    <button className={`cursor-pointer ${classNameConcatenation}`}>
      {content}
    </button>
  );
};

export default Button;
