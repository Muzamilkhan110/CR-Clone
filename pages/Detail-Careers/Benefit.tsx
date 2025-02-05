"use client";
import React from "react";
import CareerCR from "@/components/CareerCR/CareerCR";
import { CareerData } from "@/app/data/CareersData/page";

const Benefit = () => {
  return (
    <div className="bg-zinc-900 py-10">
      <div className="container-custom m-auto">
        <div className=" flex flex-wrap justify-center items-center ">
          {CareerData.map((data, index) => (
            <div key={index}  className="w-1/2 lg:w-1/3">
              <CareerCR
                imageSrc={data.imageSrc}
                imageAlt={data.imageAlt}
                text={data.text}
              />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Benefit;
