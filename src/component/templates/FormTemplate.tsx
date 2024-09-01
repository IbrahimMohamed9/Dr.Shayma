import { ElementType, FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputFieldType } from "../../types";
import Button from "../atoms/Button";
import SectionHeader from "../atoms/SectionHeader";
import BorderAroundSection from "../atoms/BorderAroundSection";
import InputFields from "../molecules/InputFields";

type FormTemplateProps = {
  inputFields: InputFieldType[];
  title: string;
  submitBtnClassName: string;
  submitBtnTitle: string;
  AdditionButtons: ElementType;
  children: ElementType;
};

const FormTemplate: FC<FormTemplateProps> = ({
  inputFields,
  title,
  AdditionButtons,
  submitBtnClassName,
  submitBtnTitle,
  children,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto max-w-xl"
    >
      <BorderAroundSection flex={false} className="rounded-3xl p-6">
        <div className="flex flex-col items-center max-w-xl">
          <SectionHeader
            content={title}
            className="!text-5xl text-center ml-auto mr-auto mt-7 "
          />
          <InputFields
            errors={errors}
            register={register}
            inputFields={inputFields}
          />
          <>{children}</>
          <Button
            className={`bg-main-green mt-7 text-white ${submitBtnClassName}`}
            content={submitBtnTitle}
            type={"submit"}
          />
        </div>
      </BorderAroundSection>
    </form>
  );
};

export default FormTemplate;
