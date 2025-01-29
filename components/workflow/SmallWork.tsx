import React from 'react'

interface SmallWorkProps{
    
    number: string;
    title: string;
    orderlist?: string[];

}

const SmallWork:React.FC<SmallWorkProps>=({ number , title , orderlist}) => {
  return (
    <div className='max-w-[560px] m-auto py-6'>
      
        <div className='flex flex-col justify-center'>
        <div className='flex justify-center'>
         <span className="p-4 text-base rounded-full bg-white text-black">{number}</span>
         </div>
         <div className="text-center py-3 ">
          <h1 className="text-xl pb-1 text-white">{title}</h1>
          <ol className="list-inside pl-0 text-sm text-neutral-300 ">
            {orderlist?.map((point, index) => (
              <li className="list-disc " key={index}>
                {point}
              </li>
            ))}
          </ol>
        </div>
        </div>
    </div>
  )
}

export default SmallWork