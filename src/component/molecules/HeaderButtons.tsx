import { FC } from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

type ButtonData = {
  navTo: string;
  className: string;
  content: string;
}

type HeaderButtonsProps = {
  buttons: ButtonData[];
}

const HeaderButtons: FC<HeaderButtonsProps> = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button, index) => (
        <Link to={button.navTo} key={index}>
          <Button content={button.content} className={button.className} />
        </Link>
      ))}
    </div>
  );
};

export default HeaderButtons;
