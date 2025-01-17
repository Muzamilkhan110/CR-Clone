import React from "react";
import Card from "@/components/cards/Crads";
import { cardDescription1 } from "@/app/data/second/page"
import Heading from "@/components/component-heading/Heading";
import Button from "@/components/button/Button";
const Industries = () =>{
    return (
<section className=" ">
        <div className="container m-auto max-w-screen-lg py-7">
          <div className="px-[1%]">
          <Heading tittle="Industries we've" dynamic="excelled in" />
          <p className="text-stone-400 text-center my-4 text-sm md:text-base">
            Our services are tailor-made and we are always striving to surpass
            your wildest expectations!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-white">
            {
               cardDescription1.map((card, index)=>(
                <Card 
                
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={
                <span className="line-clamp-6 mb-4">
                  {card.description}
                </span>
                 }
                />
              ))
            }
          </div>
          <div className="flex justify-center mt-10 pb-10">
               <Button text="View all Industries"/>
          </div>
          </div>
        </div>
      </section>
    )
}
export default Industries