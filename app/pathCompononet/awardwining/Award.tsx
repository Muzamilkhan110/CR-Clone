import React from "react";
import { cardDescription} from "@/app/data/gridInfo/page";
import Heading from "@/components/component-heading/Heading";
import Card from "@/components/cards/Crads";
import Button from "@/components/button/Button";
import Link from "next/link";
import Image from "next/image";

const Award = () => {
    return(
        <section className="container m-auto max-w-screen-lg">
        <div className="">
          <div className="py-[9%]">
          <Heading tittle="Award-winning" dynamic=" Services we provide" text=" Our services are tailor-made   and  we are always striving to surpass
              your wildest expectations!" />
          </div>
          <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-3 text-white">
            {
               cardDescription.map((card, index)=>(
                <Card 
               
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={
                <span className="line-clamp-[5] lg:line-clamp-[10]">
                {card.description}
                </span>
                }
                />
              ))
            }
          </div>
          <div className="flex justify-center mt-10 pb-10">
           <Button text="View all Services"/>
          </div>
        </div>
      </section>
    )
}
export default Award