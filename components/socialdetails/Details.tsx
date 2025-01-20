import React from "react";
import Link from "next/link";

const Details = () => {
    return (
       
            <div className="container text-white pt-10 px-4 sm:px-6 lg:px-8">
              {/* Heading Section */}
              <div className="flex flex-wrap gap-2 font-bold text-2xl sm:text-3xl">
                <h1 className="useclass">Speak</h1>
                <h1>to an Expert</h1>
              </div>
        
              {/* Description Section */}
              <div className="pt-5  text-base sm:text-lg">
                  If you have any RFP requirements, please share them with us at
                  <Link
                    className="useclass text-blue-400 underline"
                    href={"mailto:info@conceptrecall.com"}
                  >
                    info@conceptrecall.com
                  </Link>
                  and if you are looking for a career-
                  related enquiry, please check our
                  <Link
                    href={"/careers"}
                    className="font-semibold useclass cursor-pointer text-blue-400 underline"
                  >
                    Career
                  </Link>
                   section
              </div>
              {/* Closing Section */}
              <div className="mt-5 text-stone-500 text-xl sm:text-base">
                <p className="text-lg">
                  Discover the perfect solution for your business needs with us! Let's
                  join forces and unlock the path to success.
                </p>
              </div>
            </div>
          );
}
export default Details