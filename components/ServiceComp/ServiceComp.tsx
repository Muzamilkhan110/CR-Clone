import React from "react";
import Button from "../button/Button";

interface ServiceCompProps {
  typo?: string;
  typo1?: string;
  s2typo?: string;
  s2typo1?: string;
  text?: string;
  isBlack?: boolean;
  textLg?: boolean;
  section2?: boolean;
}
const ServiceComp: React.FC<ServiceCompProps> = ({
  typo1, 
  typo, 
  text,
  textLg, 
}) => {
  return (
    <div className="">
      <div className="max-sm:max-w-[290px]">
        <div
          className={`${
            textLg ? "text-lg" : "text-base"
          } text-white py-5 font-bold flex flex-col gap-1`}
        >
          <div className="useclass">{typo}</div>
          <div>{typo1}</div>
        </div>
        <div className="text-xs leading-loose text-neutral-400">
          <p>{text}</p>
        </div>
        <div className="py-6">
          <Button text="Get More Info" />
        </div>
      </div>
    </div>
  );
};

export default ServiceComp;
