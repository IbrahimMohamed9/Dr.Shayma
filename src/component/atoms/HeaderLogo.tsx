import logo from "./../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { LOGO_DESCRIPTION } from "./../../assets/utils/Constants";

const HeaderLogo = () => {
  return (
    <Link to="/home">
      <img
        src={logo}
        alt={LOGO_DESCRIPTION}
        className="w-32 translate-center-y"
      />
    </Link>
  );
};

export default HeaderLogo;
