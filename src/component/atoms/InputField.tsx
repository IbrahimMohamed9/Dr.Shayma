import { FC } from "react";
import { InputFieldType } from "../../types";
import { UseFormRegister } from "react-hook-form";

type InputFieldProps = InputFieldType & {
  register: UseFormRegister<any>;
};

const InputField: FC<InputFieldProps> = ({
  type,
  className,
  register,
  required,
  fieldName,
  pattern,
  PrefixIcon,
  OnClickIcon,
  ElementBelowField,
}) => {
  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <div
        className={`w-full relative border border-slate-400 rounded p-1 ${
          PrefixIcon && "relative"
        }`}
      >
        <input
          id={fieldName}
          type={type}
          className={`py-1 px-4 focus:bg-royal-blue focus:bg-opacity-20 rounded-lg outline-none h-full
            ${PrefixIcon ? "w-[calc(100%-2rem)]" : "w-full"}
            ${className ?? ""}`}
          {...register(fieldName, {
            required: required,
            pattern: pattern
              ? { value: pattern.value, message: pattern.message }
              : undefined,
          })}
        />
        {PrefixIcon && <PrefixIcon onClick={OnClickIcon} inputType={type} />}
      </div>
      {ElementBelowField && <ElementBelowField />}
    </>
  );
};

export default InputField;
