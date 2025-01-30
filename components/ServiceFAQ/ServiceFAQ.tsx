"use client"; // If you're using app directory in Next.js
import { useState } from "react";
import { dataFAQ } from "@/app/data/OurApproachData/page";
import Image from "next/image";

const FAQ = () => {
  // Track which question is expanded
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle visibility of answers
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      {/* Questions */}
      <div className="space-y-4">
        {dataFAQ.map((data, index) => (
          <div
            key={index}
            className={`border rounded-xl p-4 md:p-7 ${
              activeIndex === index ? "bg-neutral-800" : ""
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between  items-center w-full text-left xl:text-lg font-medium focus:outline-none"
            >
              <div className="text-sm font-bold text-white max-w-[90%]">
                {data.question}
              </div>
              <div className="ml-2  text-2xl text-white max-w-[10%]">
                {activeIndex === index ? (
                  <Image
                    src={"/collapsew.png"}
                    alt="SvgIcon"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src={"/expandw.png"}
                    alt="SvgIcon"
                    width={20}
                    height={10}
                  />
                )}
              </div>
            </button>

            {/* Answer (conditionally rendered) */}
            {activeIndex === index && (
              <p className="mt-2 text-neutral-300 text-xs">{data.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
