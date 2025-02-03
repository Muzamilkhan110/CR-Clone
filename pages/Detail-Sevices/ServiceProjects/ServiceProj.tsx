"use client";
import React from "react";
import { ServiceData } from "@/app/data/ServiceProjData/page";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ServiceSliderCard from "@/components/ServiceSlider/ServiceSlider";

export const ServiceProj = () => {
  return (
    <div
      className=" h-[calc(100vh-85px)] border-t  max-lg:h-[calc(100vh-66px)] max-sm:h-[calc(100vh-73px)] overflow-hidden object-cover md:shrink-0"
      style={{ backgroundImage: "url('/casestudies.webp')" }}
    >
      <div className="text-lg text-white font-bold flex flex-wrap justify-center gap-1 pt-3 px-4">
        <h1 className="useclass">Successfully</h1>
        Developed Application
      </div>
      <div className="max-w-[1140px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,
          }}
          autoplay={
            {
              delay: 2000,
            }
          }
          speed={600}
        >
          {ServiceData.map((data, index) => (
            <div key={index}>
              <SwiperSlide>
                <ServiceSliderCard
                  heading={data.heading}
                  description={data.description}
                  imageSrc={data.imageSrc}
                  imageAlt={data.imageAlt}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
