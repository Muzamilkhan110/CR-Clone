import React from "react";
import Image from "next/image";

interface ToolsLogoProps {
  imageSrc: string;
  imageAlt: string;
  isBlack?: boolean;
}
const ToolsLogo: React.FC<ToolsLogoProps> = ({ imageSrc, imageAlt  }) => {
  return (
    <div className="rounded-lg">
      <div className="">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={70}
          height={20}
          className=""
        />
      </div>
    </div>
  );
};

export default ToolsLogo;
