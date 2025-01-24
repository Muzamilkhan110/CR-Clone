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
    <div className=''>
        <div className='container m-auto'>
        <div className="text-white  font-bold text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl text-wrap text-center" >
         <span className="useclass ">{title}</span>
         {text}
         <p>{description}</p>
        </div>
        </div>
    </div>
  )
}
export default Banner