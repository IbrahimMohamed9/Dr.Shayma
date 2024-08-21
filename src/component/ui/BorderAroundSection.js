import React from "react";

const BorderAroundSection = (props) => {
  return (
    <div className={`min-h-fit p-5 w-full ${props.bg_color && true}`}>
      <div className="container border-main-dark-blue border-5 h-full py-2 md:py-5 flex flex-col-reverse md:flex-row">
        {props.children}
      </div>
    </div>
  );
};

export default BorderAroundSection;
