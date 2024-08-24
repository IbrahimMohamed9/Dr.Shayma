import React from "react";
import Button from "./Button";

const BookCardText = (props) => {
  return (
    <div className="p-4">
      <h2 className="py-4 font-bold text-center">{props.title}</h2>
      <Button
        content="أقرأ"
        className="bg-main-green mx-auto block text-white"
      />
    </div>
  );
};

export default BookCardText;
