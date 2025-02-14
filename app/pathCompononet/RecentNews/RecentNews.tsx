import React from "react";
import Heading from "@/components/component-heading/Heading";
import { cardDescription3 } from "@/app/data/experience/page";
import ImageCard from "@/components/RecentNews/Image-Card";
import Button from "@/components/button/Button";
const RecentNews = () => {
  return (
    <section className="bg-zinc-900 py-7 ">
      <div className="container-custom m-auto  ">
        <div className="">
          <div className="my-16">
            <Heading
              tittle="Recent"
              dynamic="News Letter"
              text="Uncover industry trends, insights, and innovative ideas. Our
                blog posts are crafted to keep you informed, inspired, and ahead
                in your professional journey. Dive in now!"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  text-white">
            {cardDescription3.map((card, index) => (
              <ImageCard
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
                linkText={card.linkText}
                svgIco={card.svgIco} // Change this to match the interface
              />
            ))}
          </div>
          <div className="flex justify-center mt-10 pb-10">
            <Button text="View all Blogs" />
            {}
          </div>
        </div>
      </div>
    </section>
  );
};
export default RecentNews;
