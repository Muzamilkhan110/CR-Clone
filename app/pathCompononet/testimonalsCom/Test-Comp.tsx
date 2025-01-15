import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heading from "@/components/component-heading/Heading";
import { cardDescription4 } from "@/app/data/clientreviews/page";
import SliderCard from "@/components/Testimonals/SliderCard";
const TestComp = () => {
  return (
    <section className="my-20">
      <div className="container m-auto max-w-screen-sm">
        <Heading tittle="Our" dynamic="Testimonials" />
        <p className="text-stone-400 text-center my-4 ">
          Having a satisfied clientele that appreciates our work is a milestone
          in itself. Our clients are our evangelists and they love to write
          their journey and success stories with us.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={60}
        slidesPerView={3}
        navigation={true}
        scrollbar={{ draggable: true }}
        loop
        autoplay={{
          delay: 2000,
        }}
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        className="w-[65%]"
      >
        {cardDescription4.map((card, index) => (
          <SwiperSlide key={index}>
            <SliderCard
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              description={card.description}
              heading={card.heading}
              svgIcon={card.svgIcon}
              rating={card.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default TestComp;
