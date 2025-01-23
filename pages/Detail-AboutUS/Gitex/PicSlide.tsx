import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const pictures = [
  {
    imageSrc: "/G1.webp",
    imageAlt: "image",
  },
  {
    imageSrc: "/G2.webp",
    imageAlt: "image",
  },
  {
    imageSrc: "/G3.webp",
    imageAlt: "image",
  },
  {
    imageSrc: "/G4.webp",
    imageAlt: "image",
  },
  {
    imageSrc: "/G5.webp",
    imageAlt: "image",
  },
  {
    imageSrc: "/G6.webp",
    imageAlt: "image",
  },
  {
    imageSrc: "/G8.webp",
    imageAlt: "image",
  },
];

const PicSlide = ({}) => {
  return (
    <div className="bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2} // Sets gap between slides
        slidesPerView={3} // Number of slides visible at a time
        autoplay={{ delay: 5000 }}
        // navigation
        pagination={{ clickable: true }}
      >
        {pictures.map((card, index) => (
          <SwiperSlide key={index} className="group">
   

            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              width={370}
              height={50}
              className="group-hover:opacity-1 opacity-50 transition-opacity duration-300"
            />
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PicSlide;
