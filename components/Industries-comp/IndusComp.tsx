import React from "react";
import Image from "next/image";
import Button from "../button/Button";

interface IndusCompProps {
  tags: string;
  tags1?: string;
  tags2?: string;
  svgSrc: string;
  svgAlt: string;
  heading: string;
  descriptions: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
}
const IndusComp: React.FC<IndusCompProps> = ({
  tags,
  tags1,
  tags2,
  svgSrc,
  svgAlt,
  heading,
  descriptions,
  imageSrc,
  imageAlt,
  bgColor,
}) => {
  const flexDirectionClass =
    bgColor === "gray" ? "flex-row" : "flex-row-reverse";
  return (
    <div className={`py-4 ${bgColor === "black" ? "bg-black" : "bg-zinc-900"}`}>
      <div className="max-w-[1240px] m-auto">
        <div className={`lg:flex justify-center gap-8 px-[6%] ${flexDirectionClass}`}>
          <div className="m-auto max-w-[550px]">
            <div className="flex flex-wrap gap-2 py-3 text-xs  font-semibold text-white">
              <h1 className="bg-neutral-500 p-1 rounded-md">{tags}</h1>
              <h1 className="bg-neutral-500 p-1 rounded-md">{tags1}</h1>
              <h1
                className="bg-neutral-500 p-1 rounded-md "
                style={{ backgroundColor: tags2 ? "#737373" : "transparent" }}
              >
                {tags2}
              </h1>
            </div>
            <div className="flex gap-2 items-center py-3">
              <Image src={svgSrc} alt={svgAlt} width={30} height={10} />
              <h2 className="text-white ">{heading}</h2>
            </div>
            <div>
              <p className="text-xs md:text-sm xl:text-base text-neutral-300">
                {descriptions}
              </p>
            </div>
            <div className="py-6 ">
              <Button text="View Case Study" />
            </div>
          </div>
          <div
            className={`md:flex justify-center m-auto ${
              bgColor === "black" ? "bg-black" : "bg-zinc-900"
            }`}
          >
            <Image
              className=""
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndusComp;
