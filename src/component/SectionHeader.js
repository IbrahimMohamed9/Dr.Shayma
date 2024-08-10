import React from "react";

const SectionHeader = (props) => {
  return (
    <h1 className="text-6xl font-bold text-header-color mb-6">
      {props.content}
    </h1>
  );
};

export default SectionHeader;
