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
import { cardDescription} from "@/app/data/first/page"
import { cardDescription1 } from "@/app/data/second/page"
import ImageCard from "@/components/imagecard/Image-Card";
import { cardDescription3 } from "./data/third/page";

const cards = [
  {
    image: "/RyanClient.webp",
    text:
      "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name: "Ryan Flaherty",
    pic: "/stars.svg",
    rating: "4.9 Ratings",
  },
  {
    image: "/RyanClient.webp",
    text:
      "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name: "Ryan Flaherty",
    pic: "/stars.svg",
    rating: "4.9 Ratings",
  },
  {
    image: "/RyanClient.webp",
    text:
      "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name: "Ryan Flaherty",
    pic: "/stars.svg",
    rating: "4.9 Ratings",
  },
  {
    image: "/RyanClient.webp",
    text:
      "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name: "Ryan Flaherty",
    pic: "/stars.svg",
    rating: "4.9 Ratings",
  },
  {
    image: "/RyanClient.webp",
    text:
      "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name: "Ryan Flaherty",
    pic: "/stars.svg",
    rating: "4.9 Ratings",
  },
];
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
            <div className="flex justify-center gap-3">
              <h2 className=" text-4xl text-white font-semibold">
                Award-winning
              </h2>
              <h2 className="text-4xl useclass font-semibold">
                {" "}
                Services we provide
              </h2>
            </div>
            <p className="text-center text-stone-400   mt-3">
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

      <section className="bg-neutral-900 py-10">
        <div className="container mx-auto max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl h-28 flex flex-col items-center justify-center p-4">
              <h3 className="useclass text-4xl font-bold">10+</h3>
              <p className="text-white text-lg">Years of Experience</p>
            </div>
            <div className="rounded-2xl h-28 flex flex-col items-center justify-center p-4">
              <h3 className="useclass text-4xl font-bold">116+</h3>
              <p className="text-white text-lg">Project Completed</p>
            </div>
            <div className="rounded-2xl h-28 flex flex-col items-center justify-center p-4">
              <h3 className="useclass text-4xl font-bold">100+</h3>
              <p className="text-white text-lg">Happy Customers</p>
            </div>
            <div className="rounded-2xl h-28 flex flex-col items-center justify-center p-4">
              <h3 className="useclass text-4xl font-bold">12M+</h3>
              <p className="text-white text-lg">Total Revenue</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex justify-center items-center">
        <div className="container m-auto max-w-screen-lg">
          <div className="my-14">
            <div className="flex justify-center gap-2 flex-col items-center">
              <h2 className="text-4xl useclass font-bold mb-2">About</h2>
              <h2 className="text-4xl text-white font-bold">Us</h2>
            </div>
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
          <div className="flex justify-center gap-3">
            <h3 className="text-white text-4xl font-bold">Industries we've</h3>
            <h3 className="useclass text-4xl font-bold">excelled in</h3>
          </div>
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
      <section className="container m-auto max-w-screen-lg">
        <div className="py-20 ">
          <div className="">
            <Swiper
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={1} // Show one slide at a time
              autoplay={{
                delay: 3000, // 3 seconds delay before transitioning to the next slide
                disableOnInteraction: false, // Keep autoplay active even after user interaction
              }}
              speed={700} // Speed of transition in milliseconds (700ms)
              loop={true} // Enable looping
              pagination={{ clickable: true }} // Enable clickable pagination
              navigation={true} // Enable navigation buttons
              modules={[Navigation, Pagination, Autoplay]} // Import Swiper modules
            >
              {/* Slide 1 */}
              <SwiperSlide className="flex items-center gap-10">
                {/* Image */}
                <div className="flex">
                  <Image
                    src="/Linco.png"
                    alt="Image 1"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />

                  {/* Content Div */}
                  <div className="bg-zinc-900 max-w-[35rem] rounded-2xl text-white pt-10 pb-10 px-6 shadow-lg">
                    <h3 className="text-3xl font-bold">Linco</h3>
                    <p className="my-6">
                      We believe in surpassing expectations and satisfying our
                      clientele to form lasting alliances. What makes this
                      target attainable is thinking out of the box and gladly,
                      our personnel does just that! We fuse creativity with
                      technical expertise to foster impactful results and never
                      fail to surprise our clients with it!
                    </p>
                    <button className="bg-useclass mt-5 px-4 py-3 font-bold text-base text-white rounded-lg">
                      Contact Us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center gap-10">
                {/* Image */}
                <div className="flex">
                  <Image
                    src="/Linco.png"
                    alt="Image 1"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />

                  {/* Content Div */}
                  <div className="bg-zinc-900 max-w-[35rem] rounded-2xl text-white pt-10 pb-10 px-6 shadow-lg">
                    <h3 className="text-3xl font-bold">Linco</h3>
                    <p className="my-6">
                      We believe in surpassing expectations and satisfying our
                      clientele to form lasting alliances. What makes this
                      target attainable is thinking out of the box and gladly,
                      our personnel does just that! We fuse creativity with
                      technical expertise to foster impactful results and never
                      fail to surprise our clients with it!
                    </p>
                    <button className="bg-useclass mt-5 px-4 py-3 font-bold text-base text-white rounded-lg">
                      Contact Us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div></div>
      </section>
      <section className="bg-zinc-900 py-10">
        <Swiper
         modules={[Navigation, Autoplay]}
          slidesPerView={4} // Show 4 slides at a time
          spaceBetween={10} // Adjust space between slides
          allowTouchMove={false} // Disable manual sliding
          loop
          autoplay={{
            delay: 0, 
          }}
        speed={5000}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                width={200}
                height={100}
                src="/client1.webp"
                alt="Client 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                width={200}
                height={100}
                src="/client2.webp"
                alt="Client 2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                width={200}
                height={100}
                src="/client3.webp"
                alt="Client 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                width={200}
                height={100}
                src="/client4.webp"
                alt="Client 4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                width={200}
                height={100}
                src="/client5.webp"
                alt="Client 5"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                width={200}
                height={100}
                src="/client6.webp"
                alt="Client 6"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="  py-20">
        <div className="container m-auto max-w-screen-sm">
          <div className="flex justify-center gap-3">
            <h3 className="useclass text-4xl font-bold">Our</h3>
            <h3 className="text-white text-4xl font-bold">Testimonials</h3>
          </div>
          <p className="text-stone-400 text-center my-4 ">
            Having a satisfied clientele that appreciates our work is a
            milestone in itself. Our clients are our evangelists and they love
            to write their journey and success stories with us.
          </p>
        </div>
        <section className=" flex justify-center items-cente pt-8">
        <Swiper
        modules={[Navigation, Pagination,Autoplay]}
          spaceBetween={60} // Har card ke beech ka gap
          slidesPerView={3} // Ek time par dikhne wale slides
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
          className="w-[65%]" // Swiper width
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center text-center bg-black text-white rounded-lg p-6 shadow-lg border"
            >
              <Image
                src={card.image}
                alt={card.image}
                width={150}
                height={0}
                className="rounded-full object-cover"
              />

              <p className="overflow-hidden text-left text-ellipsis line-clamp-6 py-6 text-stone-400">
                {card.text}
              </p>
              <h3 className="text-lg font-bold flex ">{card.name}</h3>
              <div className="">
                <Image
                  className="py-4"
                  src={card.pic}
                  alt="stars"
                  width={60}
                  height={50}
                />
                <span className="flex  pb-6">{card.rating}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      </section>
      <section className="bg-zinc-900 py-7">
        <div className="container m-auto max-w-screen-lg ">
          <div>
            <div className="my-16">
              <div className="flex justify-center gap-3">
                <h2 className=" text-4xl text-white font-semibold">Recent</h2>
                <h2 className="text-4xl useclass font-semibold">
                  {" "}
                  News Letter
                </h2>
              </div>
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
        <div className="flex gap-3 justify-center">
          <h2 className="text-4xl useclass font-bold">Contact</h2>
          <h2 className="text-4xl text-white font-semibold">Us</h2>
        </div>
        <div>
          <form action="">
          
          </form>
        </div>
        <div></div>

      </section>
    </main>
  );
}
