import React from "react";
import style from "../../assets/css/button.module.css";

const Button = (props) => {
  const { content, classes } = props;
  return (
    <button className={`cursor-pointer ${style.button} ${classes}`}>
      {content}
    </button>
  );
};

export default Button;
