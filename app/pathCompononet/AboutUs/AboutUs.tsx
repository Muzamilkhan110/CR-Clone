import React from "react";
import Heading from "@/components/component-heading/Heading";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
const AboutUS = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container mx-auto">
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
          <div className="flex flex-col md:flex-row gap-6 py-4 px-[4%]">
            <div className="lg:w-1/2 h-full overflow-hidden rounded-xl">
              <video className="" autoPlay loop src="/player1.mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="lg:w-1/2 text-sm md:text-base font-normal text-stone-400 flex flex-col justify-center">
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
                <Button className="my-3" text="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUS;
