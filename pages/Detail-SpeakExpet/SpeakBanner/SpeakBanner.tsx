import React from "react";

const SpeakBanner = () => {
  return (
    <section
      className="bg-cover h-[calc(100vh-83px)] max-sm:pb-11 max-lg:h-[calc(100vh-66px)] max-sm:h-[max-content] bg-black bg-opacity-100"
      style={{
        backgroundImage: "url('/contact-us-bg.svg')",
      }}
    >
      <div className="container-custom m-auto h-full">
        <div className="">
          <div className="text-white font-bold text-[22px] md:text-[34px] xl:text-[56px] text-center py-6 md:pt-[20%] ">
            <span className="useclass mr-1">Reach</span>
            Out to Us
          </div>
          <div className="text-center">
            <p className="text-sm md:text-base text-neutral-300 pb-5">
              Have questions or need assistance? Get in touch today and let us
              help you find the perfect solution. We're here to ensure
              everything goes seamlessly and effortlessly for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakBanner;
