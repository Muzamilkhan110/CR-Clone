import React from "react";
import ServiceCard from "@/components/ServiceCards/ServiceCard";
import { AgileData } from "@/app/data/AgileData/page";
export const AgileService = () => {
  return (
    <div className="container-custom m-auto py-16">
    <div className="text-white mx-auto text-center ">
      <div className="xl:text-4xl text-lg md:text-2xl font-bold gap-2 max-6">
        <h1 className="useclass">Our Agile</h1>
        development tested 100s of projects
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-6">
        {AgileData.map((data, index) => (
          <div key={index}>
            <ServiceCard
              heading1={data.heading1}
              svgIcon={data.svgIcon}
              svgAlt={data.svgAlt}
              heading2={data.heading2}
              text={data.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
