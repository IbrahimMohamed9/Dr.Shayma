import React from "react";

const SectionHeader = (props) => {
  return (
    <h1 className="text-[2.6rem] xs:text-5xl min-[500px]:text-6xl font-bold mr-3 text-header-color mb-6">
      {props.content}
    </h1>
  );
};

export default SectionHeader;
