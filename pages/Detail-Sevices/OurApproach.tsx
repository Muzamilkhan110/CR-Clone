import React from "react";
import ServiceComp from "@/components/ServiceComp/ServiceComp";
import { ourData } from "@/app/data/OurApproachData/page";

const OurApproach = () => {
  return (
    <div>
      <div className="container m-auto">
        <div>
          {ourData.map((data, index) => {
            const isBlack = index % 2 === 0;

            return (
              <div
                key={index}
                className={`justify-center ${
                  isBlack ? "bg-black" : "bg-zinc-900"
                }`}
              >
                <ServiceComp
                  typo={data.typo}
                  typo1={data.typo1}
                  text={data.text}
                  isBlack={isBlack}
                />
                {index % 2 !== 0 && (
                  <ServiceComp
                    s2typo={data.s2typo}
                    s2typo1={data.s2typo1}
                    text={data.text} 
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
