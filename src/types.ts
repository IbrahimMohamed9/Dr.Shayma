import { UseFormRegister, Path } from "react-hook-form";

export type CommentType = {
  imgSrc: string;
  name: string;
  comment: string;
};

export type ArticleType = {
  title: string;
  description: string;
  imgSrc: string;
};

export type InputFieldType = {
  type: string;
  className: string;
  // TODO: change the type
  register: UseFormRegister<any>;
  required: boolean;
  label: Path<any>;
  pattern: RegExp;
};

