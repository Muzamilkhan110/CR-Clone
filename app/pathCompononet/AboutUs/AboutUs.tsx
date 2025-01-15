import React from "react";
import Heading from "@/components/component-heading/Heading";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
const AboutUS = () =>{
    return(
        <section className="min-h-screen flex justify-center items-center">
        <div className="container m-auto max-w-screen-lg">
          <div className="my-14">
            <Heading tittle="About" dynamic="Us"/>
            <p className="text-center text-stone-400  mt-3">
              We are a team of seasoned creators who upgrade your business
              processes with modern technology and advancements. And well, these
              numbers speak volumes about what we have achieved on our journey
              so far.
            </p>
          </div>
          <div className="flex gap-6 pb-10">
            <div className="w-[50rem] h-[25rem] overflow-hidden rounded-xl relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                src="/player1.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image
                  className=""
                  width={"100"}
                  height={"100"}
                  src={"/play.svg"}
                  alt=""
                />
              </div>
            </div>

            <div className="h-[25rem] w-[50rem] font-medium text-stone-400 pt-20">
              <span className="">
                <p>
                  We believe in surpassing expectations and satisfying our
                  clientele to form lasting alliances. What makes this target
                  attainable is thinking out of the box and gladly, our
                  personnel does just that! We fuse creativity with technical
                  expertise to foster impactful results and never fail to
                  surprise our clients with it!
                </p>
              </span>
              <Link href={"/"}>
              <Button text="Contact Us"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}
export default AboutUS