import React from "react";

const BgDetails = () =>{
    return(
<section
        className="flex justify-center items-center flex-col h-[calc(100vh-85px)]  max-lg:h-[calc(100vh-66px)] max-sm:h-[max-content] overflow-hidden object-cover md:shrink-0"
        style={{ backgroundImage: "url('/homeBg.webp')" }}
      >
        <div className="container max-w-screen-lg"> 
          <div className="px-[7%] py-[10%]">
          <div className="text-center text-xl md:text-4xl lg:flex justify-center items-center gap-2">
            
            <h1 className="text-white font-bold whitespace-nowrap">
              Revolutionizing Marketing for
            </h1>
            <span className="useclass font-bold whitespace-nowrap py-1">
              Digital Advancement
            </span>
          </div>
          <p className=" text-sm lg:text-lg text-stone-400 text-center pt-4">
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