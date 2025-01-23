import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heading from "@/components/component-heading/Heading";


// Button Component
const TimelineButton = ({ content }: { content: string }) => {
    return (
        <div className="ml-5 md:ml-10 xl:ml-20">

      <button className="bg-useclass text-white px-10 py-2 rounded-3xl shadow-lg">
        {content}
      </button>
        </div>
    );
  };
  
  // Div Component
  interface TimeDivPorps{
    imageSrc: string;
    imageAlt: string;
    content: string;
    descriptions: string

  }
  const TimelineDiv: React.FC<TimeDivPorps> = ({imageSrc , imageAlt , content , descriptions}) => {
    return (
      <div className="text-white xl:mx-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-10 ">
        <div className="flex justify-center">
            <Image src={imageSrc} alt={imageAlt} width={80} height={50} className="" />
        </div>
        <div className="bg-black p-3 rounded-md ">
            <h2 className="text-lg font-semibold pb-6">{content}</h2>
            <p className="text-sm text-neutral-500">{descriptions}</p>
        </div>
        </div>
     </div>
    );
  };

const TimelineWithPadding = () => {
  const timelineData = [
    { type: "button", content: "2015" },
    { type: "div",   imageSrc : "/Digital-Agency.svg" , imageAlt :'image', content: "Digital Agency" , descriptions:"ConceptRecall started as a digital agency offering a wide range of digital assets and graphic design creation." },
    { type: "button", content: "2017" },
    { type: "div",   imageSrc : "/Web-Agency.svg" , imageAlt :'image', content: "Web Agency" , descriptions:"ConceptRecall started as a digital agency offering a wide range of digital assets and graphic design creation." },
    { type: "button", content: "2019" },
    { type: "div",   imageSrc : "/Mobile-Development.svg" , imageAlt :'image', content: "Mobile Development", descriptions:"ConceptRecall started as a digital agency offering a wide range of digital assets and graphic design creation." },
    { type: "button", content: "2020" },
    { type: "div",   imageSrc : "/WebApp-Development.svg" , imageAlt :'image', content: "Web App Development" , descriptions:"ConceptRecall started as a digital agency offering a wide range of digital assets and graphic design creation."},
    { type: "button", content: "2021" },
    { type: "div",   imageSrc : "/Web3Development.svg" , imageAlt :'image', content: "Web3 Development" , descriptions:"ConceptRecall started as a digital agency offering a wide range of digital assets and graphic design creation."},
    { type: "button", content: "2023" },
    { type: "div",   imageSrc : "/Big-Data.svg" , imageAlt :'image', content: "Big Data" , descriptions:"ConceptRecall started as a digital agency offering a wide range of digital assets and graphic design creation"},
  ];

  return (
    <section className="bg-zinc-900 py-6 lg:py-16">
      <Heading tittle="C.R" dynamic="Timeline" text="At ConceptRecall, our process kicks off with a detailed evaluation to pinpoint the unique needs and goals of each project, setting the stage for strategic success. Our seasoned core team powers our innovative approaches, driving client success through a dynamic and adaptable development process." />
      {/* Top section with dot */}
      <div className="pl-4 md:px-10 lg:pl-[3%] xl:pl-[13%] pt-[6%]">
        <div className="bg-useclass w-3 h-3 rounded-full relative z-50"></div>
      </div>

      {/* Vertical line */}
      <div className="pl-4 md:px-10 lg:pl-[3%] xl:pl-[13%] bottom-2 relative">
        <div className="border-2 border-gray-500 h-full"></div>
      </div>

      {/* Swiper slider with left padding */}
      <div className="pl-4 md:px-10 lg:pl-[3%] xl:pl-[13%] pt-6 relative bottom-14 z-0">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2 },
            768:{ slidesPerView:4},
            1024: { slidesPerView: 5 },
            1440:{ slidesPerView:5}
          }}
        >
          {timelineData.map((item, index) => (
           <SwiperSlide key={index} className="flex">
           {item.type === "button" ? (
             <TimelineButton content={item.content} />
           ) : (
            <TimelineDiv 
            imageSrc={item.imageSrc || "/default-image.png"}
            imageAlt={item.imageAlt || "default image"}
            content={item.content}
            descriptions={item.descriptions || "default image"}
          />
           )}
         </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TimelineWithPadding;
