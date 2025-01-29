import React from "react";
import WorkFlow from "@/components/workflow/WorkFlow";
import { dataFlow } from "@/app/data/workplacedata/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import SmallWork from "@/components/workflow/SmallWork";

const Workproc = () => {
  return (
    <div className="bg-zinc-900 py-8">
      <div className='text-lg md:text-2xl text-white font-bold flex justify-center py-5 md:pb-[8%]'>
        Our&nbsp;
        <h1 className='useclass '>Workflow</h1>
        &nbsp;in the App is going to look like
      </div>
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          breakpoints={{
            1440: { slidesPerView: 7 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            320: { slidesPerView: 1 },
          }}
            pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
          }}
          speed={1000}
        >
          {dataFlow.map((data, index) => (
            <SwiperSlide key={index}>
              <SmallWork
                number={data.number}
                title={data.title}
                orderlist={data.orderlist}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[1240px] m-auto">
        <div className="hidden  md:flex  px-10">
          <Swiper
            modules={[Autoplay, Scrollbar]}
            scrollbar={{
              draggable: true,
            }}
            spaceBetween={10}
            breakpoints={{
              1440: { slidesPerView: 7 },
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
            }}

          >
            {dataFlow.map((data, index) => (
              <SwiperSlide
                key={index}
                className={`pb ${index % 2 === 0 ? "pt-[17%]" : ""} `}
              >
                <WorkFlow
                  id={data.id}
                  number={data.number}
                  imageSrc=""
                  imageAlt=""
                  title={data.title}
                  orderlist={data.orderlist}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Workproc;
