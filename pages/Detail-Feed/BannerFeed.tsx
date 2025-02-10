import React from "react";

const BannerFeed = () => {
  return (
    <section
      className="bg-cover h-[calc(100vh-83px)] max-sm:pb-11 max-lg:h-[calc(100vh-66px)] max-sm:h-[max-content] bg-black bg-opacity-30"
      style={{ backgroundImage: "url('/CaseStudy.webp')" }}
    >
      <div className="container-custom m-auto h-full">
        <div className="">
          <div className="text-white font-bold text-[22px] md:text-[34px] xl:text-[56px] text-center py-7 md:pt-[20%]">
            Discover Insights and Inspiration: Dive into our Latest
            <span className="useclass ml-1">Blog Posts</span>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-base text-neutral-300 pb-5">
              Explore a wealth of knowledge and innovative ideas with our latest
              blog posts. Stay informed on industry trends, gain valuable
              insights, and find inspiration to drive your projects forward. Our
              curated content is designed to keep you ahead of the curve and
              spark creativity in your professional journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFeed;
