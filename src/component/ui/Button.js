import React from "react";

const Button = (props) => {
  const text = props.fontSize !== undefined ? props.fontSize : " text-xs ";
  const className =
    "px-3.5 py-2 rounded-md font-semibold transition-all duration-300 border-0 hover:rounded-[22px] " +
    props.className +
    " " +
    text;
  return (
    <button className={`cursor-pointer ${className}`}>{props.content}</button>
  );
};

export default Button;
