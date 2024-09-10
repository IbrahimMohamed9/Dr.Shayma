import HeaderWordList from "./../atoms/HeaderWordList";
import HeaderButtons from "../molecules/HeaderButtons";
import HeaderLogo from "../atoms/HeaderLogo";

const Header = () => {
  const buttomsClasses = "mr-2 translate-center-y ";
  const buttons = [
    {
      navTo: "/Login",
      className: `bg-main-green text-white ${buttomsClasses}`,
      content: "تسجيل دخول",
    },
    {
      navTo: "/SignUp",
      className: `bg-white text-black ${buttomsClasses}`,
      content: "إنشاء حساب",
    },
  ];

  return (
    <header className="bg-black sticky top-0 z-50 w-full h-20">
      <div className="container flex justify-between">
        <HeaderLogo />
        <HeaderWordList />
        <HeaderButtons buttons={buttons} />
      </div>
    </header>
  );
};

export default Header;
