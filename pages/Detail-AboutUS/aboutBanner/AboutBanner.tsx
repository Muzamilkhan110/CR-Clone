import React from "react";
import Banner from "@/components/banner/Banner";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="">
      <div className="px-[16%] pt-20 relative z-0 ">
        <Banner
          title="Consistent insights"
          text="help guide your business choices with confidence."
        />
         </div>

      
         {/* <div className="space-y-[10%] z-10">
        <div className="flex justify-center gap-[40rem]">
          <div className="flex items-center gap-3">
            <Image src={"/we-are-different.svg"} alt="icon1" width={50} height={10} />
            <h1 className="text-white text-lg">We Are different</h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-white text-lg">We Are different</h1>
            <Image src={"/we-are-different.svg"} alt="icon1" width={50} height={10} />
          </div>
        </div>
        <div className="flex justify-center gap-[48rem] pt-[10%]">
          <div className="flex items-center gap-3">
            <Image src={"/we-are-different.svg"} alt="icon1" width={50} height={10} />
            <h1 className="text-white text-lg">We Are different</h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-white text-lg">We Are different</h1>
            <Image src={"/we-are-different.svg"} alt="icon1" width={50} height={10} />
          </div>
        </div>
        <div className="flex justify-center gap-[48rem] pt-[10%]">
          <div className="flex items-center gap-3">
            <Image src={"/we-are-different.svg"} alt="icon1" width={50} height={10} />
            <h1 className="text-white text-lg">We Are different</h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-white text-lg">We Are different</h1>
            <Image src={"/we-are-different.svg"} alt="icon1" width={50} height={10} />
          </div>
        </div>
        </div> */}

        <div className="spinners w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden bg-logo-low-opacity bg-no-repeat xl:bg-center">
  {/* Spinner Block */}
  <div className="spinner-block h-[680px] lg:h-[950px] xl:h-[1100px] relative w-full mx-auto">
    {/* Spinner 1 */}
    <div className="spinner spinner-1 absolute top-0 left-0 w-full h-full">
      <div className="absolute w-full h-full border-2 border-solid rounded-full border-t-transparent border-l-transparent border-b-grey border-r-grey animate-rotate-anti-clockwise"></div>
    </div>
    {/* Spinner 2 */}
    <div className="spinner spinner-2 absolute top-0 left-0 w-full h-full">
      <div className="absolute w-[35%] h-[35%] top-[8%] left-[33%] border-2 border-solid rounded-full border-t-transparent border-l-transparent border-b-grey border-r-grey animate-rotate-clockwise"></div>
    </div>
  </div>
</div>
      </div>
  );
};

export default AboutBanner;
