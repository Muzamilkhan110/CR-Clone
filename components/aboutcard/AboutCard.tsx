import React from 'react'
import Image from 'next/image';


interface AboutCardProps {
    imageSrc: string;
    imageAlt: string;
    text:string;
    text1:string;
    description: | React.ReactNode;
}

const AboutCard:React.FC<AboutCardProps>= ( {
    imageSrc,
    imageAlt,
    text,
    text1,
    description,

}) =>{

  return (
    <div
    className=" rounded-2xl bg-zinc-900 " >
        <div className=''>
        <div className='p-6'>
            <div className='flex gap-2'>
            <Image width={40} height={40} src={imageSrc} alt={imageAlt}  />
            <h1 className="pl-2 text-lg sm:text-xl md:text-2xl lg:text-3xl  text-white font-bold">
             {text}
            </h1>
             <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl useclass font-bold">{text1}</h1>
            </div>
            <div>
            <p className='my-4 text-xs md:text-sm xl:text-base text-neutral-300'>
                {description}
            </p>
        </div>
        </div>
        </div>
    </div>
  )

}


export default AboutCard