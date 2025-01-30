import React from "react";
import ToolsLogo from "../toolslogo/ToolsLogo";
import { toolLogo } from "@/app/data/OurApproachData/page";

interface ServiceLogosProps {
  isBlackBackground: boolean;
}

const ServiceLogos: React.FC<ServiceLogosProps> = ({ isBlackBackground }) => {
  return (
    <div
      className="max-w-[70%]"
    >
      <div
        className=" grid grid-cols-12 gap-5 py-10" 
      >
        {toolLogo.map((data, index) => (
          <div key={index}>
            <div
              className="bg-zinc-900 p-3 rounded-lg "
            >
              <ToolsLogo imageSrc={data.imageSrc} imageAlt={data.imageAlt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServiceLogos;
