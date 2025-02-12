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
    <section className="container-custom m-auto my-20">
      <div className="">
        <Heading
          tittle="Our"
          dynamic="Testimonials"
          text="Having a satisfied clientele that appreciates our work is a milestone
          in itself. Our clients are our evangelists and they love to write
          their journey and success stories with us."
        />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={60}
        breakpoints={{
          0: {
            slidesPerView: 1,
            navigation: {
              enabled: true,
            },
            // Show 1 slide on very small screens
          },
          768: {
            slidesPerView: 2, // Show 2 slides on medium screens (e.g., tablets)
          },
          1280: {
            slidesPerView: 3, // Show 3 slides on larger screens
          },
        }}
        navigation={false}

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
        className=""
      >
        {cardDescription4.map((card, index) => (
          <SwiperSlide key={index} className="">
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
