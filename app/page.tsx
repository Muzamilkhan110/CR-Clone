"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { document } from "postcss";

const cards = [
  {
    image : "/RyanClient.webp",
    text : "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name : "Ryan Flaherty",
    pic : "/stars.svg",
    rating : "4.9 Ratings",
  },
  {
    image : "/RyanClient.webp",
    text : "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name : "Ryan Flaherty",
    pic : "/stars.svg",
    rating : "4.9 Ratings",
  },
  {
    image : "/RyanClient.webp",
    text : "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name : "Ryan Flaherty",
    pic : "/stars.svg",
    rating : "4.9 Ratings",
  },
  {
    image : "/RyanClient.webp",
    text : "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name : "Ryan Flaherty",
    pic : "/stars.svg",
    rating : "4.9 Ratings",
  },
  {
    image : "/RyanClient.webp",
    text : "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name : "Ryan Flaherty",
    pic : "/stars.svg",
    rating : "4.9 Ratings",
  },
  
]
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
          <div className=" grid grid-cols-4 text-white gap-6">
            <div className=" rounded-2xl bg-zinc-900 hover:bg-zinc-700">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid1.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[10]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android. Our approach ensures your
                  app stands out in a crowded marketplace, driving growth and
                  user loyalty with every interaction. From initial concept to
                  final launch, we're with you every step of the way, making
                  sure your mobile app exceeds expectations.
                </span>
              </div>
            </div>

            <div className=" rounded-2xl bg-zinc-900 hover:bg-zinc-700">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid2.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[10]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android. Our approach ensures your
                  app stands out in a crowded marketplace, driving growth and
                  user loyalty with every interaction. From initial concept to
                  final launch, we're with you every step of the way, making
                  sure your mobile app exceeds expectations.
                </span>
              </div>
            </div>
            <div className=" rounded-2xl bg-zinc-900 hover:bg-zinc-700">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid3.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[10]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android. Our approach ensures your
                  app stands out in a crowded marketplace, driving growth and
                  user loyalty with every interaction. From initial concept to
                  final launch, we're with you every step of the way, making
                  sure your mobile app exceeds expectations.
                </span>
              </div>
            </div>
            <div className=" rounded-2xl bg-zinc-900 hover:bg-zinc-700">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid4.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[10]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android. Our approach ensures your
                  app stands out in a crowded marketplace, driving growth and
                  user loyalty with every interaction. From initial concept to
                  final launch, we're with you every step of the way, making
                  sure your mobile app exceeds expectations.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 pb-10">
            <button className="text-white bg-useclass px-4 py-3 rounded-lg font-semibold text-lg">
              View all services
            </button>
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
              <Link href={""}>
                <button className="bg-useclass mt-5 px-4 py-3 font-bold text-base text-white rounded-lg">
                  Contact Us
                </button>
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

          <div className="grid grid-cols-3 text-white gap-6 mt-10 ">
            <div className="rounded-2xl min-h-[24rem] bg-black hover:bg-zinc-900 hover:border">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid1.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[7]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android.
                </span>
              </div>
            </div>
            <div className="rounded-2xl min-h-[24rem] bg-black hover:bg-zinc-900 hover:border">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid1.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[7]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android.
                </span>
              </div>
            </div>
            <div className="rounded-2xl min-h-[24rem] bg-black hover:bg-zinc-900 hover:border">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid1.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[7]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android.
                </span>
              </div>
            </div>
            <div className="rounded-2xl min-h-[24rem] bg-black hover:bg-zinc-900 hover:border">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid1.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[7]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android.
                </span>
              </div>
            </div>
            <div className="rounded-2xl min-h-[24rem] bg-black hover:bg-zinc-900 hover:border">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid1.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[7]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android.
                </span>
              </div>
            </div>
            <div className="rounded-2xl min-h-[24rem] bg-black hover:bg-zinc-900 hover:border">
              <Image
                className="flex mt-4 ml-4"
                width={40}
                height={45}
                src={"/grid1.png"}
                alt=""
              ></Image>
              <div className="  my-5 mx-4 overflow-hidden">
                <h6 className="text-xl font-semibold mb-8 ml-1">
                  Tailored Mobile
                </h6>
                <span className="line-clamp-[7]">
                  In a digital-first world, our tailored mobile app solutions
                  are your gateway to engaging your audience like never before.
                  We combine cutting-edge technology with user-centric design to
                  create apps that not only look great but also perform
                  flawlessly across iOS and Android.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 pb-10">
            <button className="text-white bg-useclass px-4 py-3 rounded-lg font-semibold text-lg">
              View all industries
            </button>
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
          slidesPerView={4} // Show 4 slides at a time
          spaceBetween={10} // Adjust space between slides
          loop={true} // Enable infinite loop
          allowTouchMove={false} // Disable manual sliding
          autoplay={{
            delay: 0, // Continuous autoplay with no pause
            disableOnInteraction: false, // Prevent stopping on interaction
          }}
          speed={5000} // Transition speed in milliseconds (5 seconds for a full loop)
          loopAdditionalSlides={5} // Preload additional slides for a smoother loop
          modules={[Navigation, Autoplay]} // Enable Navigation and Autoplay modules
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
      <section className=" bg-zinc-950 ">
        <div className="container m-auto max-w-screen-sm py-7">
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
      </section>
      <section className="bg-zinc-900">
        <div className="container m-auto max-w-screen-lg ">
        <div>
          <div className="my-16">
            <div className="flex justify-center gap-3">
              <h2 className=" text-4xl text-white font-semibold">Recent</h2>
              <h2 className="text-4xl useclass font-semibold"> News Letter</h2>
            </div>
            <p className="text-center text-stone-400 mt-3 m-auto max-w-screen-sm">
              Uncover industry trends, insights, and innovative ideas. Our blog
              posts are crafted to keep you informed, inspired, and ahead in
              your professional journey. Dive in now!
            </p>
          </div>
          <div className=" grid grid-cols-3 text-white gap-6">
            <div className="rounded-2xl bg-black">
              <Image
                className="flex rounded-t-2xl"
                width={1000}
                height={200}
                src={"/1.png"}
                alt=""
              ></Image>
              <div className="hover:bg-zinc-800">
                <div className="  my-5 mx-4 overflow-hidden  ">
                  <h6 className="text-xl font-semibold mb-8 ml-1 line-clamp-2 ">
                    Tailored Custom Software Development Solutions for Your
                    Unique Needs
                  </h6>
                  <span className="line-clamp-6 ">
                    Every business has unique challenges and requirements, which
                    is why we offer custom software development services at
                    ConceptRecall. Our team of experts works closely with you to
                    understand your specific needs and develop software
                    solutions that address them.
                  </span>
                  <div
                    className="flex justify-between py-3
"
                  >
                    <span className="useclass">Get more Info</span>
                    <Image
                      className=""
                      src={"/arrowright.svg"}
                      width={20}
                      height={20}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-black">
              <Image
                className="flex rounded-t-2xl w-full h-[43%]"
                width={1000}
                height={200}
                src={"/2.png"}
                alt=""
              ></Image>
              <div className="hover:bg-zinc-800">
                <div className="  my-5 mx-4 overflow-hidden  ">
                  <h6 className="text-xl font-semibold mb-8 ml-1 line-clamp-2 ">
                    A Game-Changing Partnership Between ConceptRecall and IIFYMc
                  </h6>
                  <span className="line-clamp-6 ">
                    ConceptRecall is excited to announce a new venture with
                    IIFYM (If It Fits Your Macros) to develop a cutting-edge
                    meal-planning app. This collaboration aims to bring users a
                    seamless experience through mobile and web platforms.
                  </span>
                  <div
                    className="flex justify-between py-3
"
                  >
                    <span className="useclass">Get more Info</span>
                    <Image
                      className=""
                      src={"/arrowright.svg"}
                      width={20}
                      height={20}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-black">
              <Image
                className="flex rounded-t-2xl w-full h-[43%]"
                width={1000}
                height={200}
                src={"/3.png"}
                alt=""
              ></Image>
              <div className="hover:bg-zinc-800">
                <div className="  my-5 mx-4 overflow-hidden  ">
                  <h6 className="text-xl font-semibold mb-8 ml-1 line-clamp-2 ">
                    Tailored Custom Software Development Solutions for Your
                    Unique Needs
                  </h6>
                  <span className="line-clamp-6 ">
                    Every business has unique challenges and requirements, which
                    is why we offer custom software development services at
                    ConceptRecall. Our team of experts works closely with you to
                    understand your specific needs and develop software
                    solutions that address them.
                  </span>
                  <div className="flex justify-between py-3">
                    <span className="useclass">Get more Info</span>

                    <Image
                      className=""
                      src={"/arrowright.svg"}
                      width={20}
                      height={20}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 pb-10">
            <button className="text-white bg-useclass px-4 py-3 rounded-lg font-semibold text-lg">
              View all Blogs
            </button>
          </div>
        </div>
        </div>
      </section>

      <section className="min-h-screen flex justify-center items-center ">
        <div className="grid grid-cols-5  ">
        {cards.map((card , index) =>(
          <div key={index} className="bg-gray-800 text-white rounded-lg p-6 shadow-lg">
            <Image src={card.image} alt={card.image} width={80} height={80} className="rounded-full mb-4"/>
            <h3>{card.name}</h3>
            <p className="mb-4">{card.text}</p>
            <div>

              
              <Image src={card.pic} alt="stars" width={50} height={50}/>
              <span className="mt-2 font-bold">{card.rating}</span>
            </div>
          </div>
        ))}
        </div>
      </section>
    </main>
  );
}
