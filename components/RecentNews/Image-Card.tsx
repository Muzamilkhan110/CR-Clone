import React from "react";
import Link from "next/link";
import Image from "next/image";


interface ImageCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    linkText: string;
    svgIco: string;
}
const ImageCard: React.FC<ImageCardProps> = ({
    imageSrc,
    imageAlt,
    title,
    description,
    linkText,
    svgIco,
}) =>{
  return (
    <div className="rounded-2xl bg-black container">
        <Image className="flex h-[35vh] rounded-t-2xl"  width={1000} height={0} src={imageSrc} alt={imageAlt} ></Image>
        <div className=" my-5 mx-4 overflow-hidden">
        <div className="">
            <h2 className="text-xl font-semibold  line-clamp-2 ">{title}</h2>
            <p className="line-clamp-6 py-4 text-stone-400">{description}</p>
        </div>
        <div className="flex justify-between py-3 ">
            <Link className="useclass" href={""}>{linkText}</Link>
            <Image width={20} height={20} src={svgIco} alt={imageAlt}></Image>
        </div>
      </div>
    </div>
  )
}
export default ImageCard;