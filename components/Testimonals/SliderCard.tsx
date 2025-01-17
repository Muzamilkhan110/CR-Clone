import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SliderCardProps{
    imageSrc: string;
    imageAlt: string;
    description: string;
    heading: string;
    svgIcon: string;
    rating: string;
}

const SliderCard:React.FC<SliderCardProps> = ({
    imageSrc,
    imageAlt,
    description,
    heading,
    svgIcon,
    rating
}) => {
    return (
        <div className="">
        <div className="">
        <div className="text-white border-[0.5px] mt-10 px-5">
           <Image className=" flex my-6 rounded-full object-cover" src={imageSrc} alt={imageAlt} width={100} height={100} />
           <p className="overflow-hidden text-ellipsis line-clamp-6 text-stone-400">{description}</p>
           <h2 className="text-lg font-bold flex my-3">{heading}</h2>
           <Image className=""  src={svgIcon}  alt={imageAlt} width={80} height={40}  />
           <div className="my-4 pb-10 font-medium">{rating}</div>
           </div>
        </div>
        </div>


)}
export default SliderCard

