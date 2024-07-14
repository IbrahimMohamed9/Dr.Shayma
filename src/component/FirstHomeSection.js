import React from "react";
import aqidtna from "../assets/images/aqidtna.png";
import rideWithUs from "../assets/images/rideWithUs.jpg";
import childrenAqidat from "../assets/images/childrenAqidat.jpg";
import Button from "./ui/Button";

const FirstHomeSection = () => {
  return (
    <div className="bg-gradient-to-l from-white via-cyan to-cyan min-h-fit py-5 w-full">
      <div className="container border-[#2D3648] border-5 h-full py-2 md:py-5 flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3 px-2 min-h-fit text-2xl md:text-4xl md:flex md:flex-col md:justify-center">
          <p className="md:block-fit">
            عقيدة سليمة هي أثمن ما نقدمه لأبنائنا؛ فكيف نغرسها في نفوسهم؟ هذا هو
            ما سنبحر فيه معا حتى نصل بأبنائنا لبر الأمان، فالتوحيد هو أجل غاية
            وأعظم مطلب. فهيا:
            <br />
            <br />
            (يَا بُنَيَّ ارْكَب مَّعَنَا)
          </p>
          <Button
            content="المواضيع"
            classes="bg-main-green text-white text-lg w-fit py-1 px-3 rounded-md font-medium mt-4 hover:rounded-full "
          />
        </div>

        <div className="flex gap-7 justify-center mb-5">
          <div>
            <img
              src={childrenAqidat}
              alt="عثيدتنا"
              className="w-36 translate-center-y rounded-lg"
            />
          </div>

          <div>
            <img
              src={rideWithUs}
              alt="يا بني اركب معنا"
              className="w-36 mb-8 rounded-lg"
            />
            <img src={aqidtna} alt="عثيدتنا" className="w-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHomeSection;
