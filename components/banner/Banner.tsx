import React from 'react'

interface bannerProps {
    title?: string;
    text?: string;
    description?: string;
    className?:string;

}
const Banner:React.FC<bannerProps> = ({
    title,
    text,
    description,
    className='',

}) => {
  return (
    <div className='container max-w-screen-lgx'>
        <div className=''>
        <div className=" text-xl md:text-5xl lg:flex justify-center  gap-2">
         <h1 className={`text-white font-bold whitespace-nowrap' ${className}`}>{title}</h1>
         <h1 className='text-white font-bold whitespace-nowrap py-1'>{text}</h1>
         <p>{description}</p>
        </div>
        </div>
    </div>
  )
}
export default Banner