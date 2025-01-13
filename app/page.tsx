"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { document } from "postcss";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/button/Button";
import Card from "@/components/cards/Crads";
import { cardDescription} from "@/app/data/gridInfo/page"
import { cardDescription1 } from "@/app/data/second/page"
import ImageCard from "@/components/imagecard/Image-Card";
import { cardDescription3 } from "./data/experience/page";
import SliderCard from "@/components/slidercards/SliderCard";
import { cardDescription4 } from "./data/clientreviews/page"
import OverView from "@/components/overview/Overview";
import Project from "@/components/projectSlider/Project";
import SectionSlider from "./section-slider/page";
import Heading from "@/components/heading/Heading";
import FormWithGrid from "@/components/label/Label";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  return (
    <main className="bg-black">
      <section
        className="flex justify-center items-center flex-col w-full h-[90vh] overflow-hidden"
        style={{ backgroundImage: "url('/homeBg.webp')" }}
      >
        <div className="container max-w-screen-lg"> 
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold">
              Revolutionizing Marketing for
            </h1>
            <span className="useclass text-6xl font-bold">
              Digital Advancement
            </span>
          </div>
          <p className=" text-lg text-stone-400 text-center mt-10">
            ConceptRecall takes pride in helping our clients achieve massive
            success, increase revenue, and take their businesses to new heights.
            Our strategies to catapult your business are simple yet powerful. We
            enjoy a distinguished reputation as a customer-oriented marketing
            agency, boasting 95.5% happy clients.
          </p>
        </div>
      </section>
      <section className="container m-auto max-w-screen-lg">
        <div>
          <div className="my-16">
          <Heading tittle="Award-winning" dynamic=" Services we provide" />
            <p className="text-center text-stone-400 mt-3">
              Our services are tailor-made and we are always striving to surpass
              your wildest expectations!
            </p>
          </div>
          <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-white">
            {
               cardDescription.map((card, index)=>(
                <Card 
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={
                <span className="line-clamp-[10]">
                {card.description}
                </span>
                }
                />
              ))
            }
          </div>
          <div className="flex justify-center mt-10 pb-10">
           <Button text="View all Services"/>
          </div>
        </div>
      </section>
      <OverView />
      <section className="min-h-screen flex justify-center items-center">
        <div className="container m-auto max-w-screen-lg">
          <div className="my-14">
            <Heading tittle="About" dynamic="Us"/>
            <p className="text-center text-stone-400  mt-3">
              We are a team of seasoned creators who upgrade your business
              processes with modern technology and advancements. And well, these
              numbers speak volumes about what we have achieved on our journey
              so far.
            </p>
          </div>
          <div className="flex gap-6 pb-10">
            <div className="w-[50rem] h-[25rem] overflow-hidden rounded-xl relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                src="/player1.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image
                  className=""
                  width={"100"}
                  height={"100"}
                  src={"/play.svg"}
                  alt=""
                />
              </div>
            </div>

            <div className="h-[25rem] w-[50rem] font-medium text-stone-400 pt-20">
              <span className="">
                <p>
                  We believe in surpassing expectations and satisfying our
                  clientele to form lasting alliances. What makes this target
                  attainable is thinking out of the box and gladly, our
                  personnel does just that! We fuse creativity with technical
                  expertise to foster impactful results and never fail to
                  surprise our clients with it!
                </p>
              </span>
              <Link href={"/"}>
              <Button text="Contact Us"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-zinc-950 ">
        <div className="container m-auto max-w-screen-lg py-7">
          <Heading tittle="Industries we've" dynamic="excelled in" />
          <p className="text-stone-400 text-center my-4 px-[20rem]">
            Our services are tailor-made and we are always striving to surpass
            your wildest expectations!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-white">
            {
               cardDescription1.map((card, index)=>(
                <Card 
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={
                <span className="line-clamp-6 mb-4">
                  {card.description}
                </span>
                 }
                />
              ))
            }
          </div>
          <div className="flex justify-center mt-10 pb-10">
               <Button text="View all Industries"/>
          </div>
        </div>
      </section>
      <Project projects={[]}  />
      <SectionSlider />
      <section className="my-20">
        <div className="container m-auto max-w-screen-sm">
          <Heading tittle="Our" dynamic="Testimonials" />
          <p className="text-stone-400 text-center my-4 ">
            Having a satisfied clientele that appreciates our work is a
            milestone in itself. Our clients are our evangelists and they love
            to write their journey and success stories with us.
          </p>
        </div>
        
  

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={60}
    slidesPerView={3}
    navigation={true}
    pagination={{ clickable: true }}
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
      <section className="bg-zinc-900 py-7">
        <div className="container m-auto max-w-screen-lg ">
          <div>
            <div className="my-16">
              <Heading tittle="Recent" dynamic="News Letter" />
              <p className="text-center text-stone-400 mt-3 m-auto max-w-screen-sm">
                Uncover industry trends, insights, and innovative ideas. Our
                blog posts are crafted to keep you informed, inspired, and ahead
                in your professional journey. Dive in now!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-white">
            {
                  cardDescription3.map((card, index) => (
            <ImageCard
                   key={index}
                   imageSrc={card.imageSrc}
                   imageAlt={card.imageAlt}
                   title={card.title}
                   description={card.description}
                   linkText={card.linkText}
                   svgIco={card.svgIco}  // Change this to match the interface
                />
              ))
              }               
            </div>
            <div className="flex justify-center mt-10 pb-10">
              <Button text="View all Blogs"/>
              {}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <Heading dynamic="Us" tittle="Contact" />
        <div><FormWithGrid /></div>
      </section>
    </main>
  );
}
