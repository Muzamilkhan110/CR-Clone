"use client";
import React from "react";
import Button from "../button/Button";
interface ServiceCompProps {
  heading1?: string;
  heading2?: string;
  paragraph?: string;
}

const ServiceComponent: React.FC<ServiceCompProps> = ({
  heading1,
  heading2,
  paragraph,
}) => {
  return (
    <div className="pt-[3%] xl:pt-[7%]">
      <div className="max-w-[1140px] m-auto">
        <div className="text-white text-lg md:text-2xl xl:text-4xl font-bold mb-4">
          <h2 className="useclass">{heading1}</h2>
          <h3>{heading2}</h3>
        </div>
        <p className="text-neutral-300 text-xs md:text-sm xl:text-base pb-5 leading-relaxed">
          {paragraph}
        </p>
        
      </div>
    </div>
  );
};

export default ServiceComponent;
