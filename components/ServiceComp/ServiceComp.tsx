"use client";
import React from "react";
import Button from "../button/Button";
import ToolsLogo from "../toolslogo/ToolsLogo";
import { toolLogo } from "@/app/data/OurApproachData/page";
import FAQ from "../ServiceFAQ/ServiceFAQ";
import { useState, useEffect } from "react";
import CompIndus from "@/components/CompIndus/CompIndus";
import { imgData } from "@/pages/Detail-Sevices/WeServe";
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
    <div className={`${isBlackBackground ? "bg-black" : "bg-zinc-900"} py-12`}>
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
        <div
          className={`${
            isBlackBackground ? "max-w-[80%]" : "max-w-[100%]"
          } pt-10`}
        >
          <div
            className={`grid ${
              isBlackBackground ? "grid-cols-3 gap-5" : "grid-cols-4 gap-3"
            }`}
          >
            {toolLogo.map((data, index) => (
              <div key={index}>
                <div
                  className={`${
                    isBlackBackground ? "bg-zinc-900 p-3" : "bg-black p-3"
                  }  rounded-lg `}
                >
                  <ToolsLogo
                    imageSrc={data.imageSrc}
                    imageAlt={data.imageAlt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {isBlackBackground && (
          <div className="pt-8">
             <FAQ /> 
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceComponent;
