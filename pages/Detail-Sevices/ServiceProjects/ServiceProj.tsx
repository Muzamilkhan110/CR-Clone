"use client";
import React from "react";
import { ServiceData } from "@/app/data/ServiceProjData/page";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ServiceSliderCard from "@/components/ServiceSlider/ServiceSlider";
import "swiper/css";



export const ServiceProj = () => {
  return (
    <div className="bg-zinc-900 ">
      <div className="text-lg md:text-2xl xl:text-4xl text-white font-bold flex flex-wrap justify-center gap-1  px-4">
        <h1 className="useclass ">Successfully</h1>
        Developed Application
      </div>
      <div className="container m-auto flex ">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,

          }}
          autoplay={{
            delay: 1000,
          }}
          speed={1000}
          className="md:max-w-[85%]"
        >
          {ServiceData.map((data) => (
            <SwiperSlide key={data.id}>
              <ServiceSliderCard
                heading={data.heading}
                description={data.description}
                imageSrc={data.imageSrc}
                imageAlt={data.imageAlt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
