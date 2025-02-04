'use client'
import React from "react";
import Heading from "@/components/component-heading/Heading";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import { useState, useRef } from "react";
const AboutUS = () => {
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
    <section className="flex justify-center items-center">
      <div className="container-custom mx-auto">
        <div className="px-[2%] py-10">
          <div className="pb-12">
            <Heading
              tittle="About"
              dynamic="Us"
              text="We are a team of seasoned creators who upgrade your   business
              processes with modern technology and advancements. And well, these
              numbers speak volumes about what we have achieved on our journey
              so far."
            />
          </div>
      <div className="md:flex justify-center gap-8 max-lg:gap-16 md:py-10">
                <div className="my-2 relative py-8 ">
                  <video
                    className="rounded-lg"
                    ref={videoRef}
                    src="/concept.mp4"
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
                  <p className="text-neutral-400 text-xs mb-3 lg:text-base">
                    Our success at ConceptRecall is a testament to your hard work and
                    commitment. To our clients, thank you for trusting us with your
                    visions and allowing us to bring them to life. To our employees,
                    your creativity and perseverance are the backbone of our
                    achievements. Together, we have built something remarkable, and I
                    look forward to continuing this journey of innovation and
                    excellence with all of you. Thank you!
                  </p>
                 <Button text="Contact us" />
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUS;
