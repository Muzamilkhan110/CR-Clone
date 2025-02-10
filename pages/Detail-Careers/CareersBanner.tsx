import React from "react";

const CareersBanner = () => {
  return (
    <section
      className="bg-cover h-[calc(100vh-83px)] max-sm:pb-11 max-lg:h-[calc(100vh-66px)] max-sm:h-[max-content] bg-black bg-opacity-30"
      style={{ backgroundImage: "url('/CaseStudy.webp')" }}
    >
      <div className="container-custom m-auto h-full">
        <div className="">
          <div className="text-white font-bold text-[22px] md:text-[34px] xl:text-[56px] text-center py-7 md:pt-[20%] ">
            Step Into Your Future: Discover Exciting Career Opportunity at
            <span className="useclass ml-1">ConceptRecall</span>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-base text-neutral-300 pb-5">
              Embark on a journey of professional growth with ConceptRecall,
              where each position offers a chance to innovate and excel. Dive
              into roles that foster your skills and push the boundaries of
              what's possible in your career. Join us and contribute to shaping
              the technology landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
