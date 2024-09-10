import { ElementType } from "react";
import { Path, ValidationRule, ValidationValueMessage } from "react-hook-form";

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

export type PatternValidationType = {
  message: string;
  value: RegExp;
};

export type LengthValidationType = {
  message: string;
  value: number;
};

export type InputFieldType = {
  fieldName: Path<any>;
  required: string;
  type?: string;
  className?: string;
  PrefixIcon?: ElementType;
  OnClickIcon?: () => void;
  ElementBelowField?: ElementType;
  pattern?: PatternValidationType;
  minLength?: LengthValidationType;
  maxLength?: LengthValidationType;
};
