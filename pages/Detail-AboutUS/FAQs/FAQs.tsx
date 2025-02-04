"use client"; // If you're using app directory in Next.js
import { useState } from "react";
import { faqs } from "@/app/data/faqsData/FaqsData";
import Heading from "@/components/component-heading/Heading";
import Image from "next/image";

const FAQ = () => {
  // Track which question is expanded
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle visibility of answers
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" text-white py-8 container m-auto">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-10 xl:px-[13%]">
        <div className="py-8">
          <Heading tittle="Frequently Asked" dynamic="Questions" />
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl p-5 md:p-7 ${
                activeIndex === index ? "bg-neutral-800" : ""
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left xl:text-lg font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <div className="w-[20px] h-[20px] ml-2 flex-shrink-0">
                  {activeIndex === index ? (
                    <Image
                      src="/collapsew.png"
                      alt="Collapse"
                      width={20}
                      height={20}
                      className="w-full h-full"
                    />
                  ) : (
                    <Image
                      src="/expandw.png"
                      alt="Expand"
                      width={20}
                      height={10}
                      className="w-full h-full"
                    />
                  )}
                </div>
              </button>

              {/* Answer (conditionally rendered) */}
              {activeIndex === index && (
                <p className="mt-2 text-neutral-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
