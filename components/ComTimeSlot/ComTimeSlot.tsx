import React from 'react'

interface ComTimeSlotProps{
    text?:string;
}

const ComTimeSlot:React.FC<ComTimeSlotProps> = ({text}) => {
  return (
    <div>
         <div className=" p-2 max-sm:text-center lg:text-center text-xs md:text-sm xl:text-base rounded-md text-white">{text}</div>
    </div>
  )
}

export default ComTimeSlot