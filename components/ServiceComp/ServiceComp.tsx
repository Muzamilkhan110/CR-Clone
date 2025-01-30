"use client";
import React from "react";
import Button from "../button/Button";
import ToolsLogo from "../toolslogo/ToolsLogo";
import { toolLogo } from "@/app/data/OurApproachData/page";
import FAQ from "../ServiceFAQ/ServiceFAQ";
import { useState, useEffect } from "react";
import CompIndus from "@/components/CompIndus/CompIndus";
import { imgData } from "@/pages/Detail-Sevices/WeServe";
import ServiceLogos from "../ServiceLogo/ServiceLogo";
interface ServiceCompProps {
  id?: number;
  heading1?: string;
  heading2?: string;
  paragraph?: string;
  heading3?: string;
  heading4?: string;
  paragraph1?: string;

  isBlackBackground?: boolean;
}

const ServiceComponent: React.FC<ServiceCompProps> = ({
  heading1,
  heading2,
  paragraph,
  heading3,
  heading4,
  paragraph1,
  isBlackBackground = false,
}) => {
  return (
    <div className={`${isBlackBackground ? "bg-black" : "bg-zinc-900"} py-5`}>
      <div className="max-w-[90%] mx-auto">
        <div className="">
          <div className="text-white text-lg font-bold mb-4">
            <h2 className="useclass">{heading1}</h2>
            <h3>{heading2}</h3>
          </div>
          <p className="text-neutral-300 text-xs pb-5 leading-relaxed">
            {paragraph}
          </p>
          <div>
            <Button text="Get More Info" />
          </div>
        </div>
        {!isBlackBackground && (
          <div className="py-4">
            <div className="text-white text-base font-bold flex gap-1 py-3">
              <h1 className="useclass">{heading3}</h1>
              <h1>{heading4}</h1>
            </div>
            <p className="text-neutral-300 text-xs leading-relaxed">
              {paragraph1}
            </p>
          </div>
        )}
        <ServiceLogos isBlackBackground={true} />
        {isBlackBackground && (
          <div className="">
            <FAQ />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceComponent;
