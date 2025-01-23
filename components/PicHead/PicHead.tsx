import React from "react";
import Image from "next/image";
import Link from "next/link";
interface PicHeadProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  text: string;
  svgSrc: string;
  svgAlt: string;
}

const PicHead: React.FC<PicHeadProps> = ({
  imageSrc,
  imageAlt,
  heading,
  text,
  svgSrc,
  svgAlt,
}) => {
  return (
    <div className="">
      <div className="grayscale hover:grayscale-0">
        <Image src={imageSrc} alt={imageAlt} width={220} height={10} />
      </div>
      <div className="py-4">
        <h2 className="text-base text-white">{heading}</h2>
        <p className="text-sm text-neutral-400">{text}</p>
        <div className="pt-2">
          <Link href={"mailto:info@conceptrecall.com"}>
            <Image src={svgSrc} alt={svgAlt} width={15} height={10} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PicHead;
