import React from "react";

const Button = (props) => {
  const { content, classes } = props;
  return <button className={`cursor-pointer ${classes}`}>{content}</button>;
};

export default Button;
