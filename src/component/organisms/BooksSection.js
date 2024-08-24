import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import BookCard from "./../molecules/BookCard";

const BooksSection = (props) => {
  return (
    <div className="m-5">
      <SectionHeader content="الكتب المتاحة" className="text-center" />
      <div className="flex gap-x-12 overflow-auto">
        {props.books.map((book, index) => (
          <BookCard title={book.title} img={book.img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
