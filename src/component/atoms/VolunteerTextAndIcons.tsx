import { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

type VolunteerTextAndIconsProps = {
  name: string;
  title: string;
  whatsappNumber?: string;
  mail?: string;
};

const VolunteerTextAndIcons: FC<VolunteerTextAndIconsProps> = ({
  name,
  title,
  whatsappNumber,
  mail,
}) => {
  return (
    <div className="text-center flex-1">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-gray-500">{title}</p>
      <div className="flex gap-2 mt-2 items-center">
        {whatsappNumber && (
          <Link
            to={`https://wa.me/${whatsappNumber}`}
            className="text-xl hover:text-whatsapp m-auto"
          >
            <BsWhatsapp className="size-5" />
          </Link>
        )}
        {mail && (
          <Link
            to={`mailto:${mail}`}
            className="text-2xl hover:text-main-blue m-auto"
          >
            <AiOutlineMail className="size-6" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default VolunteerTextAndIcons;
