import React from "react";
import Image from "next/image";

interface workProps {
  id: number;
  number: string;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  orderlist?: string[];
}

const WorkFlow: React.FC<workProps> = ({
  id,
  number,
  imageSrc,
  imageAlt,
  title,
  orderlist,
}) => {
  return (
    <div className="">
      <div className={`flex ${id % 2 !== 0 ? "flex-col" : "md:flex-col-reverse"} max-sm:justify-center  items-baseline px-[6%]`}>
        <div className="p-4 text-base rounded-full bg-white text-black">{number}</div>
        <div>
          <Image
          className="max-sm:hidden md:relative left-6 "
            src={imageSrc || "/border-line.webp"}
            alt={imageAlt || ""}
            width={1}
            height={1}
          />
          
        </div>
        <div className="bg-bguseclass rounded-full md:relative w-3 h-3 left-[19px] text-transparent max-sm:hidden">.</div>
        <div className=" max-sm:text-center py-3 ">
          <h1 className="text-xl pb-1 text-white">{title}</h1>
          <ol className="max-sm:list-inside max-sm:pl-0 text-sm text-neutral-300 md:relative left-5">
            {orderlist?.map((point, index) => (
              <li className="list-disc " key={index}>
                {point}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
