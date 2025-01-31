import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ToolsLogoProps {
  imageSrc: string | StaticImport;
  imageAlt: any;
  isBlack?: boolean;
  className?:string;
}
const ToolsLogo: React.FC<ToolsLogoProps> = ({ imageSrc, imageAlt , className='' }) => {
  return (
    <div>
        <Image className={`${className} p-2 rounded-lg md:w-[100px] `} src={imageSrc} alt={imageAlt} width={60} height={30} />
    </div>
  );
};

export default ToolsLogo;
