import React from "react";
import Image from "next/image";
const CreationService = () => {
  return (
    <section
      className="flex items-center flex-col h-[calc(100vh-85px)]  max-lg:h-[calc(100vh-66px)] max-sm:h-[calc(100vh-300px)] overflow-hidden object-cover md:shrink-0"
      style={{ backgroundImage: "url('/industry-hero-banner.webp')" }}
    >
      <div className="container m-auto">
        <div className="max-sm:pl-4  md:flex justify-center lg:justify-around items-center">
        <div className="max-sm:pr-6 md:max-w-[400px] lg:max-w-[500px]">
          <div className="text-xl md:text-4xl xl:text-6xl font-bold text-white ">
            <span className="useclass">Personalized Application&nbsp;</span>
            Creation Services
          </div>
          <div className="text-sm md:text-base xl:text-lg text-neutral-400 py-4">
            <p>
              Unlock the potential of personalized apps designed specifically
              for your brand. We craft applications that resonate with your
              audience, delivering memorable experiences across every mobile
              platform. Dive into the world of custom app development that
              elevates your brand's presence and engagement.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="md:min-w-[200px] lg:min-w-[380px] xl:min-w-[450px]"
            src={"/Zinco.png"}
            alt="Image"
            width={270}
            height={100}

          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default CreationService;
