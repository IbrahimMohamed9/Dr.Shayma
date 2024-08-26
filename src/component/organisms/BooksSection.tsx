import { FC } from "react";
import SectionHeader from "../atoms/SectionHeader";
import BookCard from "./../molecules/BookCard";

interface Book {
  title: string;
  imgSrc: string;
}

const BooksSection: FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div className="m-5">
      <SectionHeader content="الكتب المتاحة" className="text-center" />
      <div className="flex gap-x-12 overflow-auto">
        {books.map((book, index) => (
          <BookCard title={book.title} imgSrc={book.imgSrc} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
