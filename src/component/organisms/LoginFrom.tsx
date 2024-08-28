import Form from "../molecules/Form";

type LoginFormType = {
  email: string;
  password: string;
};

const LoginFrom = () => {
  return (
    <Form
      inputFields={[
        {
          type: "email",
          className: "",
          required: "This field is required",
          label: "email",
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        },
      ]}
    />
  );
};

export default LoginFrom;
