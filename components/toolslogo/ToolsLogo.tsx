import React from "react";
import Image from "next/image";
import { ourData } from "@/app/data/OurApproachData/page";

interface ToolsLogoProps {
  imageSrc:string[];
  imageAlt:string[];
  isBlack?:boolean;
}
const ToolsLogo: React.FC<ToolsLogoProps> = ({ imageSrc , imageAlt}) => {
  return (
    <div className="rounded-lg ">
      <div className="md:min-w-[100px]">
      <div className=" grid grid-cols-3 gap-5 py-10 max-w-[200px]">
                {ourData[0].imagesources.map((src, index) => (
                    <div key={index}  className="bg-zinc-900 p-3 rounded-lg ">
                      <Image
                        src={src}
                        alt={ourData[0].imagealter[index]}
                        width={30}
                        height={30}
                      />
                    </div>
                ))}
              </div>
      </div>
    </div>
  );
};

export default ToolsLogo;
