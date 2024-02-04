import React, { useState } from "react";

const AccordionItem = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="w-[800px] h-auto bg-slate-50 flex justify-center items-center flex-col">
        {items.map((item, index) => (
          <div className="bg-white cursor-pointer rounded-xl w-[360px] border active:bg-indigo-400 duration-500 mt-4 md:w-full">
            <div
              key={index}
              className="pl-10 pt-10 pr-10 pb-10 shadow-lg"
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center justify-between">
                <h1 className=" text-indigo-900 font-medium">{item.title}</h1>

                {openIndex === index ? (
                  <i className="fa fa-arrow-right text-2xl"></i>
                ) : (
                  <i className="fa fa-arrow-down text-2xl"></i>
                )}
              </div>

              {openIndex === index ? (
                <div className=" pr-10 text-sm text-slate-500 text-justify leading-relaxed relatives pt-2">
                  <p>{item.content}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
        

export default AccordionItem;
