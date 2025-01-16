import React from "react";
import Heading from "@/components/component-heading/Heading";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
const AboutUS = () =>{
    return(
        <section className="min-h-screen flex justify-center items-center">
        <div className="container m-auto max-w-screen-lg">
          <div className="py-10">
            <Heading tittle="About" dynamic="Us"/>
            <p className="text-center text-stone-400 mt-3">
              We are a team of seasoned creators who upgrade your business
              processes with modern technology and advancements. And well, these
              numbers speak volumes about what we have achieved on our journey
              so far.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 pb-10">
            <div className="max-w- overflow-hidden rounded-xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                src="/player1.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className=" flex items-center justify-center">
                <Image
                  className=""
                  width={"100"}
                  height={"100"}
                  src={"/play.svg"}
                  alt=""
                />
              </div>
            </div>

            <div className=" font-medium text-stone-400 pt-20">
              <div className="">
                <p>
                  We believe in surpassing expectations and satisfying our
                  clientele to form lasting alliances. What makes this target
                  attainable is thinking out of the box and gladly, our
                  personnel does just that! We fuse creativity with technical
                  expertise to foster impactful results and never fail to
                  surprise our clients with it!
                </p>
              </div>
              <Link href={"/"}>
              <Button className="mt-4" text="Contact Us"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}
export default AboutUS