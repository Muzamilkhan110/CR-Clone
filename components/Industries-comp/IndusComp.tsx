import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'

interface IndusCompProps{
    tags: string,
    svgSrc: string,
    svgAlt: string,
    heading: string,
    descriptions: string,
    imageSrc: string,
    imageAlt: string,
}

const IndusComp:React.FC<IndusCompProps> = ({
    tags,
    svgSrc,
    svgAlt,
    heading,
    descriptions,
    imageSrc,
    imageAlt,
}) => {
  return (
    <div className=''>
        <div className='lg:flex gap-32'>
       <div className="m-auto"> 
       <div className='md:flex  items-center gap-1 py-4  text-white'>
        <div className='bg-neutral-500 px-2'>{tags}</div>
       </div>
       <div className='flex gap-2 items-center'>
        <Image src={svgSrc} alt={svgAlt} width={30} height={10} />
        <h2 className='text-white'>{heading}</h2>
       </div>
       <p className='text-white'>
        {descriptions}
       </p>
       <div className='py-10'><Button text='View Case Study' /></div>
       </div>
       <div>
       <Image src={imageSrc} alt={imageAlt} width={400} height={200} />
       </div>
       </div>
    </div>
  )
}

export default IndusComp