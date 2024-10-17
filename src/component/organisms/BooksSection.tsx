import { useRecoilState } from "recoil";
import SectionHeader from "../atoms/SectionHeader";
import booksState from "../../assets/atoms/booksState";
import BookCard from "../molecules/BookCard";

const BooksSection = () => {
  const [books] = useRecoilState(booksState);

  const bookElementsList = books.map((book, index) => (
    <BookCard title={book.title} imgSrc={book.imgSrc} key={index} />
  ));

  return (
    <div className="m-5">
      <SectionHeader content="الكتب المتاحة" className="text-center" />
      <div className="container flex gap-12 flex-wrap justify-center max-w-full">
        {bookElementsList}
      </div>
    </div>
  );
};

export default BooksSection;
