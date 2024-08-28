import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputFieldType } from "../../types";
import InputField from "../atoms/InputField";

type FormProps = {
  inputFields: InputFieldType[];
};

const Form: FC<FormProps> = ({ inputFields }) => {
  const {
    register,
    handleSubmit,
    // errors,
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputFields.map((input, index) => (
        <InputField
          key={index}
          type={input.type}
          className={input.className}
          register={register}
          required={input.required}
          label={input.label}
          pattern={input.pattern}
        />
      ))}
    </form>
  );
};

export default Form;
