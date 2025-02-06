import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
interface CareerCRProps {
  imageSrc: string | StaticImport;
  imageAlt: string;
  text?: string;
}

const CareerCR: React.FC<CareerCRProps> = ({ imageSrc, imageAlt, text }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center pb-10 max-sm:w-[70%]">
        <div className="bg-black p-5 rounded-full">
          <Image
            className=""
            src={imageSrc}
            alt={imageAlt}
            width={40}
            height={20}
          />
        </div>
        <div className="pt-8 text-center">
          <p className="text-white text-xs md:text-sm xl:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default CareerCR;
