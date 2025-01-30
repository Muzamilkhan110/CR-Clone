'use client'
import React from 'react'
import Heading from "@/components/component-heading/Heading"
import CompIndus from "@/components/CompIndus/CompIndus";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";


export const imgData = [
    {
      row: 0,
      imageSrc: "/file1.png",
      imageAlt: "icoSvg",
      title1:"Medical"
    },
    {
      row: 1,
      imageSrc: "/file1.png",
      imageAlt: "icoSvg",
      title1:"Medical"
  
    },
    {
      row: 2,
      imageSrc: "/file1.png",
      imageAlt: "icoSvg",
      title1:"Medical"
  
    },
    {
      row: 3,
      imageSrc: "/file1.png",
      imageAlt: "icoSvg",
      title1:"Medical"
  
    },
    {
      row: 4,
      imageSrc: "/file1.png",
      imageAlt: "icoSvg",
      title1:"Medical"
  
    },
    {
      row: 5,
      imageSrc: "/file1.png",
      imageAlt: "icoSvg",
      title1:"Medical"
  
    },
  
  ];
const WeServe = () => {
  return (
    <div className="bg-zinc-900 py-8">
      <div className='text-lg sm:text-2xl md:text-2xl xl:text-4xl text-white py-7 font-bold flex justify-center gap-2'>
        <Heading dynamic="Services" />
         We Serve
        </div>
        <div className="container m-auto">
        <div className="px-[15%] lg:px-10 xl:px-[10%]">
        <Swiper
        className="items-center relative z-0 "
        spaceBetween={30}
        modules={[Pagination , Autoplay]}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          540:{ slidesPerView :2},
          970: { slidesPerView: 4 },
          1200:{ slidesPerView:5}
        }}
        pagination={{
          clickable: true,
      
        }}
        autoplay={{
          delay:2000,
        }}
        speed={1000}
        >
          {imgData.map((data, index) => (
            <SwiperSlide key={index} className="" >
              <CompIndus
                imageSrc={data.imageSrc}
                imageAlt={data.imageAlt}
                title1={data.title1}
              />
          </SwiperSlide>
          ))}
          </Swiper> 
          
          </div>
          </div>
      
    </div>
  )
}

export default WeServe