import { FC } from "react";
import { InputFieldType } from "../../types";

const InputField: FC<InputFieldType> = ({
  type,
  className,
  register,
  required,
  label,
  pattern,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        className={className}
        {...register(label, { required: required, pattern: pattern })}
      />
    </div>
  );
};

export default InputField;
