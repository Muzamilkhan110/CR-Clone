import React from "react";
import Heading from "@/components/component-heading/Heading";
import Image from "next/image";
import Button from "@/components/button/Button";
const AchieveTales = () => {
  return (
    <div className="bg-zinc-900  py-4 lg:py-14">
     <div className="px-1 lg:px-[23%] ">
       <Heading tittle="Fostering" dynamic="Achievement Tales" text="We're committed to nurturing success, helping businesses from various
           sectors grow and thrive through our dedicated support and innovative
           approaches." />
     </div>
          <div className="flex flex-col md:flex-row justify-center pt-[5%] px-[2%] xl:px-[8%]">
          <div className="w-full md:w-1/2 border-b pb-8 md:pb-0 md:border-r"> 
             <div className="flex justify-center items-center gap-1">
             <Image src={'/journey.svg'}  alt="" width={45} height={25}/>
             <Heading tittle="From Frustration to" />
             <Heading dynamic="Success"/>
             </div>
             <div className="flex flex-col text-left px-4 md:px-[9%]">
             <p className="pt-3 text-stone-400 mt-2 text-sm sm:text-base md:text-lg">In 2015, a young boy, frustrated by his father's automobile business challenges, discovered a market gap in digital transitions for brick-and-mortar businesses. His successful digital marketing project for his father’s business inspired him to co-found ConceptRecall with a tech-savvy partner. Starting as a small digital agency, it has grown to over 100 employees, dedicated to digitizing businesses.
            <br/>
            <br/>
             By 2024, ConceptRecall has served more than 2,500 clients worldwide, delivered over 10,000 projects, and achieved annual revenues exceeding $100 million. Today, it stands as a testament to innovation born from frustration and a commitment to sustainable digital growth.</p> 
            <div className="pt-8"> <Button text="Let's Connect" /></div>
             </div>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-[4%]">
            <p className="py-3 text-stone-400 mt-2 text-sm sm:text-base md:text-lg">Throughout our history, we've driven many companies towards prosperity, fostering strong relationships with a teamwork-driven mindset.
            <br/>
            <br/>
            We take pride in aiding diverse businesses, from emerging startups to seasoned companies, to flourish and overcome obstacles through customized strategies that help them achieve their goals and bring their dreams to life</p>
            <hr className="border-gray-400 " />
            <div className="flex gap-2 justify-center items-center">
            <div className="w-[65%]">
                 <h1 className="useclass text-5xl font-bold">250+</h1>
                 <p className="text-white">Businesses Flourished</p>
            </div>
            <div className="">
               <p className="py-3 text-stone-400 mt-2 text-sm sm:text-base md:text-lg">We've guided over 250 businesses towards achieving their goals through our creative strategies.</p>
            </div>
            </div>
            <hr className="border-gray-400 " />
            <div className="flex gap-2 justify-center items-center">
            <div className="w-[95%]">
                 <h1 className="useclass text-5xl font-bold">$1B+</h1>
                 <p className="text-white">Surpassed $1 Billion</p>
            </div>
               <p className="py-3 text-stone-400 mt-2 text-sm sm:text-base md:text-lg">Throughout our work with a diverse range of companies, from small startups to large enterprises, we've helped generate over $1 billion.</p>
            </div>
          </div> 
     </div>
    </div>
  );
};

export default AchieveTales;
