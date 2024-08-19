import React from "react";

const SubjectPageArticleCard = (props) => {
  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-lg gap-y-4 my-7">
      {props.articles.map((article, index) => (
        <div
          key={index}
          className={`flex border border-gray-300 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className={`flex-none bg-gray-200 flex items-center justify-center border-gray-300 w-2/5 ${
              index % 2 === 0 ? "border-r-2" : "border-l-2"
            }`}
          >
            <img
              src={article.img}
              alt={article.title}
              className={
                article.img.width > article.img.height ? "w-full" : "h-full"
              }
            />
          </div>
          <div className="flex-1 p-4 flex items-center w-3/5">
            <div className="w-full">
              <h2 className="text-right font-bold text-lg">{article.title}</h2>
              <p className="text-right my-4 line-clamp-4">
                {article.description}
              </p>
              <button
                className={
                  "block transition-all duration-300 mx-auto mt-4 text-white py-2 px-4 rounded-md hover:rounded-[22px] bg-" +
                  props.color
                }
              >
                اقرأ المزيد
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectPageArticleCard;
