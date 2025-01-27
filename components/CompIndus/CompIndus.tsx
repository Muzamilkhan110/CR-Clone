import React from 'react'
import Image from 'next/image';


interface indusProps{
    imageSrc: string;
    imageAlt: string;
    title1: string;
}

const CompIndus:React.FC<indusProps> = ({imageSrc , imageAlt , title1}) => {
  return (
    <div>
        <div className='min-w-[100px] '>
            <div className='bg-black p-10 rounded-lg flex flex-col justify-center items-center '>
                <Image src={imageSrc} alt={imageAlt} width={50} height={50} />
                <h1 className='text-white py-4'>{title1}</h1>
            </div>
        </div>
    </div>
  )
}

export default CompIndus