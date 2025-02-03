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
      className="relative max-h-[90vh] md:h-[120vh] sm:h-[110vh] max-lg:h-[calc(100vh-66px)]  max-sm:h-[calc(100vh-20px)]
       bg-cover bg-center  overflow-hidden"
      style={{ backgroundImage: "url('/casestudies.webp')" }}
    >
      <div className="text-lg md:text-2xl xl:text-4xl text-white font-bold flex flex-wrap justify-center gap-1 py-2 md:py-6 px-4">
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
            delay: 2000,
          }}
          speed={600}
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
