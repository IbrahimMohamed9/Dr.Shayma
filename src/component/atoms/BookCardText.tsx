import { FC } from "react";
import Button from "./Button";

type BookCardTextProps = {
  title: string;
};

const BookCardText: FC<BookCardTextProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h2 className="py-4 font-bold text-center">{title}</h2>
      <Button
        content="أقرأ"
        className="bg-main-green mx-auto block text-white"
      />
    </div>
  );
};

export default BookCardText;
