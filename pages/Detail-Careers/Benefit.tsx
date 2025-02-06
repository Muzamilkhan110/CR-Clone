"use client";
import React from "react";
import CareerCR from "@/components/CareerCR/CareerCR";
import { CareerData } from "@/app/data/CareersData/page";
import Heading from "@/components/component-heading/Heading";

const Benefit = () => {
  return (
    <div className="bg-zinc-900 py-6 md:py-12 xl:py-24">
      <div className="container-custom m-auto">
        <div className="text-center">
          <div className="text-white font-bold text-lg md:text-xl xl:text-4xl flex flex-wrap justify-center gap-1">
            Why Build Your Career at
            <h1 className="useclass">Concept Recall?</h1>
            </div>
            <div className="leading-relaxed text-xs md:text-sm xl:text-base text-neutral-400 px-5 xl:px-10 mt-3 xl:mt-5 mb-10">
              <p>
                ConceptRecall is more than just a workplace; it's a hub where
                ambitious minds flourish. Here, creativity and contribution are
                valued, your growth is accelerated, and every day brings new
                opportunities to influence the industry. We’re committed to
                nurturing talent and fostering an environment where you can
                succeed.
              </p>
            </div>
        </div>

        <div className=" flex flex-wrap justify-center items-center ">
          {CareerData.map((data, index) => (
            <div key={index} className="w-1/2 lg:w-1/3">
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
