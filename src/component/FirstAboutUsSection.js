import React from "react";
import Button from "./ui/Button";

const FirstAboutUsSection = (props) => {
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
            className="bg-main-green text-white w-fit mt-4"
            fontSize="text-xl"
          />
        </div>
      </div>
    </div>
  );
};

FirstAboutUsSection.propTypes = {};

export default FirstAboutUsSection;
