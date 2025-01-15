import React from "react";

const BgDetails = () =>{
    return(
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
    )
}
export default BgDetails