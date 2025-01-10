"use client";
import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projectSlide } from "@/app/data/projectsslider/projectslide";

interface ProjectProps {
  projects: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    descriiption: string;
  }[];
}
const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className="container m-auto max-w-screen-lg">
      <span className="py-20">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={700}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {projectSlide.map((item: any, index) => (
            <SwiperSlide key={index} className="flex items-center gap-10 ">
              <div className="flex">
                <div className="">
                  <Image
                    src={item.imageSrc}
                    width={500}
                    height={500}
                    alt={item.imageAlt}
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-zinc-900 max-w-[35rem] rounded-2xl text-white pt-10 pb-10 px-6 shadow-lg">
                  <span className="text-3xl font-bold">{item.title}</span>
                  <p className="my-6">{item.description}</p>
                  <Button text="Contact Us" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </span>
    </div>
  );
};

export default Project;
