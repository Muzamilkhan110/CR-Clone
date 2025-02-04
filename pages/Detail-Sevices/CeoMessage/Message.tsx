"use client";
import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";

const Message = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="bg-zinc-900 py-[4%]">
      <div className="container-custom m-auto">
        <div className="text-white flex justify-center gap-1 font-bold text-lg md:text-xl lg:text-2xl xl:text-4xl">
          Our
          <h1 className="useclass">Message</h1>
        </div>
        <div className="md:flex justify-center gap-8 max-lg:gap-16 md:py-10">
          <div className="my-2 relative py-8 ">
            <video
              className="rounded-lg"
              ref={videoRef}
              src="/Services.mp4"
              loop
            />
            {!isPlaying && (
              <div
                onClick={toggleVideo}
                className="absolute inset-0 flex justify-center items-center"
              >
                <div className="absolute flex justify-center items-center w-full h-full">
                  <Image
                    src="/play.svg"
                    alt="VideoIcon"
                    width={100}
                    height={100}
                    className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                  />
                </div>
              </div>
            )}
            {isPlaying && (
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={toggleVideo}
              ></div>
            )}
          </div>
          <div className="pt-4 md:pt-[4%] lg:pt-[6%] md:max-w-[50%]">
            <h1 className="text-neutral-400 font-bold text-base mb-3 xl:text-lg">
              Dear Client and Employess,
            </h1>
            <p className="text-neutral-400 text-xs mb-3 lg:text-base">
              Our success at ConceptRecall is a testament to your hard work and
              commitment. To our clients, thank you for trusting us with your
              visions and allowing us to bring them to life. To our employees,
              your creativity and perseverance are the backbone of our
              achievements. Together, we have built something remarkable, and I
              look forward to continuing this journey of innovation and
              excellence with all of you. Thank you!
            </p>
            <h1 className="text-white text-base font-bold xl:text-lg">
              Mubashir Hussain-CEO
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
