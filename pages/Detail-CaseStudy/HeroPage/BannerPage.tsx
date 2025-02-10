import React from "react";

const BannerPage = () => {
  return (
    <section
      className="bg-cover h-[calc(100vh-83px)] max-sm:pb-11 max-lg:h-[calc(100vh-66px)] max-sm:h-[max-content] bg-black bg-opacity-30"
      style={{ backgroundImage: "url('/CaseStudy.webp')" }}
    >
      <div className="container-custom m-auto h-full">
        <div className="">
        <div className="text-white font-bold text-[22px] md:text-[34px] xl:text-[56px] text-center py-7 md:pt-[20%]">
          Innovation Beyond Limits: Explore Our
          <span className="useclass ml-1">Project Showcase</span>
        </div>
        <div className="text-center"> 
        <p className="text-sm md:text-base text-neutral-300 pb-5">
          Explore our projects and see how we’re redefining possibilities. Our
          showcase features the creative solutions we've developed to tackle
          tough challenges across different industries. From smart analytics to
          smooth integrations, discover how our work brings real progress and
          delivers meaningful results that make a difference for businesses and
          communities alike.
        </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
