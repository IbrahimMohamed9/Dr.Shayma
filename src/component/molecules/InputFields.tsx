import { FC } from "react";
import { InputFieldType } from "../../types";
import ErrorMessage from "../atoms/ErrorMessage";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import InputField from "../atoms/InputField";

type InputFieldsProps = {
  inputFields: InputFieldType[];
  errors: FieldErrors<any>;
  register: UseFormRegister<any>;
};

const InputFields: FC<InputFieldsProps> = ({
  inputFields,
  errors,
  register,
}) => {
  return (
    <>
      {inputFields.map((input, index) => (
        <div
          key={index}
          className="flex flex-col items-start font-inter font-semibold text-bold mb-2 w-full"
        >
          <InputField
            key={index}
            type={input.type}
            className={input.className}
            register={register}
            required={input.required}
            fieldName={input.fieldName}
            pattern={input.pattern}
            PrefixIcon={input.PrefixIcon}
            OnClickIcon={input.OnClickIcon}
            ElementBelowField={input.ElementBelowField}
          />
          <ErrorMessage errors={errors} fieldName={input.fieldName} />
        </div>
      ))}
    </>
  );
};

export default InputFields;
