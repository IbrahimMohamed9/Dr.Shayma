import { ElementType } from "react";
import { Path } from "react-hook-form";

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

export type PatternType = {
  message: string;
  value: RegExp;
};

export type InputFieldType = {
  fieldName: Path<any>;
  required: string;
  type?: string;
  className?: string;
  pattern?: PatternType;
  PrefixIcon?: ElementType;
  OnClickIcon?: () => void;
  ElementBelowField?: ElementType;
};
