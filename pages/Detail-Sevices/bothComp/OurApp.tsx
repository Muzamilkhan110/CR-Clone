"use client";
import React from "react";
import ServiceComponent from "@/components/ServiceComp/ServiceComp";
import ToolsLogo from "@/components/toolslogo/ToolsLogo";
import { ourData } from "@/app/data/OurApproachData/page";

const OurApp = ({ data }: { data: any }) => {
  return (
    <div className="bg-slate-500">
      <div className="max-w-[90%] xl:max-w-[80%] m-auto">
        <div className="">
          {ourData.map((data, index) => (
            <div key={index}>
              <div className="xl:flex items-center gap-10 pr-[8%]">
                <ServiceComponent
                  heading1={data.heading1}
                  heading2={data.heading2}
                  paragraph={data.paragraph}
                />
                <div className="max-sm:max-w-[200px] w-[270px] xl:w-[450px] py-8 ">
                  <div className="grid grid-cols-4 gap-4">
                    {data.assets.map((image, index) => (
                      <ToolsLogo
                        className="bg-black"
                        key={index}
                        imageSrc={image.url}
                        imageAlt={image.alt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurApp;
