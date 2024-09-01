import PasswordIcon from "../atoms/PasswordIcon";
import FormTemplate from "../templates/FormTemplate";
import ForgetPasswordLoginScreen from "../atoms/ForgetPasswordLoginScreen";
import { useState } from "react";
import SocialButton from "../atoms/SocialButton";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fieldsList = [
    {
      type: "email",
      required: "الرجاء ادخال البريد الالكتروني",
      fieldName: "البريد الإلكتروني",
      pattern: {
        value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/gm,
        message: "هذا النمط غير صحيح",
      },
    },
    {
      type: passwordVisible ? "text" : "password",
      required: "الرجاء ادخال كلمة السر",
      fieldName: "كلمة السر",
      PrefixIcon: PasswordIcon,
      OnClickIcon: togglePasswordVisibility,
      ElementBelowField: ForgetPasswordLoginScreen,
    },
  ];

  const platformsText = {
    google: "إنشاء حساب مع جوجل",
    facebook: "إنشاء حساب مع فيسبوك",
  };

  return (
    <FormTemplate
      inputFields={fieldsList}
      title={"تسجيل دخول"}
      submitBtnClassName="w-full text-xl"
      submitBtnTitle="تسجيل دخول"
    >
      <SocialButton platformsText={platformsText} />
    </FormTemplate>
  );
};

export default LoginPage;
