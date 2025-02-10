import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";

interface SvgTimeProps {
  imageSrc: string | StaticImport;
  imageAlt: string;
  text?: string;
}

const SvgTime: React.FC<SvgTimeProps> = ({ imageSrc, imageAlt, text }) => {
  return (
    <div className="flex text-white items-center gap-2">
      <div className="text-white">
        <Image className="md:w-[30px]" src={imageSrc} alt={imageAlt} width={25} height={20} />
      </div>
      <div>
        <h2 className="text-sm md:text-base font-semibold">{text}</h2>
      </div>
    </div>
  );
};

export default SvgTime;
