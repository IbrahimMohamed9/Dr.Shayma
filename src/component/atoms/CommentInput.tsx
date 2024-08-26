import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { useState } from "react";

const CommentInput = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputText, setInputText] = useState("");

  const shouldShowSubmitIcon = isInputActive || inputText.trim() !== "";

  const iconBaseClassNames = `absolute translate-center-y w-8 h-8 transition-all duration-1000 ${
    shouldShowSubmitIcon ? "left-4 " : "left-[calc(100%-2.5rem)] "
  }`;

  const commentIconVisibility = shouldShowSubmitIcon
    ? "opacity-0"
    : "opacity-100";
  const submitIconVisibility = shouldShowSubmitIcon
    ? "opacity-100"
    : "opacity-0";

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    if (inputText.trim() === "") {
      setIsInputActive(false);
      setInputText("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="w-full rounded-2xl relative">
      <AiOutlineComment
        className={iconBaseClassNames + commentIconVisibility}
      />
      <BsFillArrowLeftSquareFill
        className={iconBaseClassNames + submitIconVisibility}
      />
      <input
        value={inputText}
        onChange={handleInputChange}
        className="w-full p-4 rounded-2xl bg-gray-700 focus:bg-gray-400 transition-all"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default CommentInput;
