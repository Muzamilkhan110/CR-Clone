import React from "react";

const BgDetails = () =>{
    return(
<section
        className="flex justify-center items-center flex-col h-[calc(100vh-85px)]  max-lg:h-[calc(100vh-66px)] max-sm:h-[max-content] overflow-hidden object-cover md:shrink-0"
        style={{ backgroundImage: "url('/homeBg.webp')" }}
      >
        <div className="container max-w-screen-lg"> 
          <div className="px-[7%] py-[7%]">
          <div className="text-center">
            <h1 className="text-white  sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold">
              Revolutionizing Marketing for
            </h1>
            <span className="useclass sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl  font-bold">
              Digital Advancement
            </span>
          </div>
          <p className=" text-base sm:text-xs md:text-sm lg:text-base xl:text-xl text-stone-400 text-center mt-10">
            ConceptRecall takes pride in helping our clients achieve massive
            success, increase revenue, and take their businesses to new heights.
            Our strategies to catapult your business are simple yet powerful. We
            enjoy a distinguished reputation as a customer-oriented marketing
            agency, boasting 95.5% happy clients.
          </p>
        </div>
        </div>
      </section>
    )
}
export default BgDetails