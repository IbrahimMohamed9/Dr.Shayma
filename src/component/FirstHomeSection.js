import React from "react";
import aqidtna from "../assets/images/aqidtna.png";
import rideWithUs from "../assets/images/rideWithUs.jpg";
import childrenAqidat from "../assets/images/childrenAqidat.jpg";
import Button from "./ui/Button";
import BorderAroundSection from "./ui/BorderAroundSection";

const FirstHomeSection = () => {
  return (
    <BorderAroundSection bg_color="bg-gradient-to-l from-white via-cyan to-cyan">
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
          className="bg-main-green text-white w-fit mt-4"
          fontSize="text-xl"
        />
      </div>
      <div className="flex gap-7 justify-center mb-5">
        <div>
          <img
            src={childrenAqidat}
            alt="عقيدتنا"
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
    </BorderAroundSection>
  );
};

export default FirstHomeSection;
