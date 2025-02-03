import React from "react";
import Image from "next/image";
import Button from "../button/Button";


interface ServiceSliderCardProps {
  heading?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceSliderCard: React.FC<ServiceSliderCardProps> = ({
  heading,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="max-sm:max-w-[400px] m-auto">
      <div className="xl:flex justify-center p-4">
        <div className="flex flex-col">
        <div className="text-lg font-bold text-white py-6" >{heading}</div>
         <div>
            <p className="text-neutral-400 text-xs pb-10">{description}</p>
        </div>
        </div>
        <div><Button text="View Case Study" /></div>
        <div className="pt-3">
            <Image src={imageSrc} alt={imageAlt} width={300} height={200} />
        </div>
      </div>
    </div>
  );
};
export default ServiceSliderCard;
