import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heading from "@/components/component-heading/Heading";

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
    <div className="bg-black container m-auto py-4 md:py-10">
      <Heading tittle="Our Participation in" dynamic="GITEX Global:" text="ConceptRecall proudly showcased our advanced technology and cloud systems at GITEX, the world's largest tech event. We formed invaluable partnerships and made lasting friendships, solidifying our leadership in AI innovation." />
      <div className="py-4 md:py-14">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2} // Sets gap between slides
      
        breakpoints={{
          320: { slidesPerView: 2 },
          768:{ slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440:{ slidesPerView: 4}
        }}
        loop
        autoplay={{ delay: 1000 }}
         effect="slide"
        
      >
        {pictures.map((card, index) => (
          <SwiperSlide key={index}>
             <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              width={370}
              height={100}
              className="md:grayscale hover:grayscale-0"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default PicSlide;
