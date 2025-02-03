import React from "react";
import Image from "next/image";
import Button from "../button/Button";

interface ServiceSliderCardProps {
  id?: number;
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
    <div className="max-w-[1140px] m-auto">
      <div className="flex xl:flex-row items-center flex-col  p-4 ">
        <div className="flex flex-col">
          <div className="text-lg xl:text-2xl font-bold text-white py-6">{heading}</div>
          <div>
            <p className="text-neutral-400 text-xs md:text-sm xl:text-base pb-10">
              {description}
            </p>
          </div>
          <div>
            <Button text="View Case Study" />
          </div>
        </div>
        <div className="">
          <Image
            className="md:min-w-[400px] lg:min-w-[580px] xl:min-w-[550px]"
            src={"/Zinco.png"}
            alt="Image"
            width={270}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
export default ServiceSliderCard;
