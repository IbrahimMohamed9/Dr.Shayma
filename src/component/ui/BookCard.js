import React from "react";
import BookCardText from "./BookCardText";

const BookCard = (props) => {
  const { img, title } = props;
  return (
    <div className="border-2 border-header-color rounded-[0.5rem] overflow-hidden min-w-48">
      <img
        src={img}
        alt={title}
        className="border-b-header-color border-b-[1px] w-full h-52"
      />
      <BookCardText title={title} />
    </div>
  );
};

export default BookCard;
