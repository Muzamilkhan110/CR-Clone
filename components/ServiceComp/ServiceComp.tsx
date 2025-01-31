"use client";
import React from "react";
import Button from "../button/Button";
import FAQ from "../ServiceFAQ/ServiceFAQ";
import ToolsLogo from "@/components/toolslogo/ToolsLogo";
interface ServiceCompProps {
  id?: number;
  heading1?: string;
  heading2?: string;
  paragraph?: string;
  isBlackBackground?: boolean;
}

const ServiceComponent: React.FC<ServiceCompProps> = ({
  heading1,
  heading2,
  paragraph,
  isBlackBackground = false,
}) => {
  return (
    <div className={`${isBlackBackground ? "bg-black" : "bg-zinc-900"} py-14`}>
      <div className="max-w-[1140px] m-auto">
        <div>
          <div className="lg:flex px-4 md:px-10">
            <div>
              <div className="text-white text-lg md:text-2xl xl:text-4xl font-bold mb-4">
                <h2 className="useclass">{heading1}</h2>
                <h3>{heading2}</h3>
              </div>
              <p className="text-neutral-300 text-xs md:text-sm xl:text-base pb-5 leading-relaxed">
                {paragraph}
              </p>
              <Button text="Get More Info" />
            </div>
            <div className="lg:min-w-[31%]">
            <div className="max-w-[70%]">
              <ToolsLogo imageSrc={[]} imageAlt={[]}  />
            </div>
            </div>
          </div>
          {isBlackBackground && (
            <div className="px-4 md:px-10">
              <FAQ />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
