import React from 'react'
import Image from 'next/image'


interface ServiceCardProps{
    heading1: string,
    svgIcon: string,
    svgAlt: string,
    heading2: string,
    text: string

}
const ServiceCard:React.FC<ServiceCardProps> = ({ heading1 , svgIcon , svgAlt , heading2 , text}) => {
  return (
    <div className="container-custom m-auto">
        
        <div className='text-white p-6'>
            <h1 className='text-lg font-bold md:text-xl xl:text-4xl'>{heading1}</h1>
            <Image className='mt-7 mb-3' src={svgIcon} alt={svgAlt} width={50} height={10} />
            <h2 className='text-base font-bold py-4 md:text-lg xl:text-xl'>{heading2}</h2>
            <p className='text-neutral-400 text-xs md:text-sm leading-relaxed xl:text-base'>{text}</p>
        </div>
    </div>
  )
}

export default ServiceCard