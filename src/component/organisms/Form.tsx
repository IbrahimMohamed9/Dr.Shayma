import React from "react";
import { useForm, Resolver } from "react-hook-form";


const resolver: Resolver<any> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  }
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver });
  return <div>Form</div>;
};

export default Form;
