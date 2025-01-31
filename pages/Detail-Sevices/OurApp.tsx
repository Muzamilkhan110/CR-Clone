"use client";
import React from "react";
import ServiceComponent from "@/components/ServiceComp/ServiceComp";
import ToolsLogo from "@/components/toolslogo/ToolsLogo";
import { ourData } from "@/app/data/OurApproachData/page";

const OurApp = () => {
  return (
    <div className="bg-slate-500">
      <div className="max-w-[90%] xl:max-w-[80%] m-auto">
        <div className="">
          {ourData.filter((member) => member.id % 2 === 0).map((data, index) => (
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
              {}
              {/* <div className="xl:py-6 pb-4">
              {data.question.map((question) => (
                <FAQ question={question.question} answer={question.answer} />
              ))}
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurApp;
