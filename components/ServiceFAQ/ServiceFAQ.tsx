"use client";
import { useState } from "react";
import Image from "next/image";

interface FAQProps {
  question: string;
  answer: string;
}
const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="py-2 xl:py-3">
    <div className="border rounded-xl p-4 md:p-7">
      <button
        onClick={() => setIsActive(!isActive)}
        className="flex justify-between items-center w-full text-left xl:text-lg font-medium focus:outline-none"
      >
        <div className="text-sm md:text-lg font-bold text-white max-w-[90%]">
          {question}
        </div>
        <div className="ml-2 text-2xl text-white max-w-[10%]">
          {isActive ? (
            <Image src="/collapsew.png" alt="Collapse" width={20} height={20} />
          ) : (
            <Image src="/expandw.png" alt="Expand" width={20} height={10} />
          )}
        </div>
      </button>
      {isActive && (
        <p className="mt-2 text-neutral-300 text-xs md:text-base">{answer}</p>
      )}
    </div>
  </div>
  );
}
export default FAQ;
