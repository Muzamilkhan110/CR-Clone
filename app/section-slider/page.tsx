import React from "react";
import { sectSlider } from "../data/sectSlider/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


interface sectionSliderProps{
    imageSrc?: string;
    imageAlt?: string;
}

const SectionSlider:React.FC<sectionSliderProps> =({}) => {
    return (
        <div className="bg-zinc-900 py-10">
           <Swiper
           modules={[Navigation, Autoplay]}
            slidesPerView={4}
            spaceBetween={10}
            allowTouchMove={false} 
            loop
            autoplay={{
              delay: 0, 
            }}
          speed={5000}
            className="mySwiper"
          >
          {
            sectSlider.map((section) =>
            <SwiperSlide>
            <Image src={section.imageSrc!} alt={section.imageAlt!} width={200} height={100} />
            </SwiperSlide>
            )
            
        }
        </Swiper>
       </div>
    )
}
export default SectionSlider