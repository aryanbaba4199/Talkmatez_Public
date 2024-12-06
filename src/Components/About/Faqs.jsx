import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqData } from "../../Context/faqData";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 mt-16">
      <h1 className="text-4xl font-bold text-[#15892e] mb-6 text-center">
        FAQs
      </h1>
      <div className="w-full max-w-xl space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-lg font-medium text-gray-700">
                {item.question}
              </h2>
              {openIndex === index ? (
                <FaChevronDown className="text-[#15892e] transition-transform transform rotate-180" />
              ) : (
                <FaChevronDown className="text-[#15892e]" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{item.ans}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
